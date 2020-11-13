(function (w) {
  function MyPromise(executor) {
    const that = this;
    that._status = "pending";
    that._result = undefined;
    that._callbacks = {};

    function resolve(value) {
      if (that._status !== "pending") return;
      that._status = "resolved";
      that._result = value;
      setTimeout(() => {
        that._callbacks.onResolved?.(value);
      });
    }

    function reject(error) {
      if (that._status !== "pending") return;
      that._status = "rejected";
      that._result = error;
      setTimeout(() => {
        that._callbacks.onRejected && that._callbacks.onRejected(error);
      });
    }
    executor(resolve, reject);
  }

  MyPromise.prototype.then = function (onResolved, onRejected) {
    const that = this;
    return new MyPromise((resolve, reject) => {
      that._callbacks.onResolved = function (value) {
        // 加入了try tach
        try {
          const resolvedRES = onResolved(value);
          if (resolvedRES instanceof MyPromise) {
            resolvedRES.then(resolve, reject);
          } else {
            resolve(resolvedRES);
          }
        } catch (error) {
          reject(error);
        }
      };
      this._callbacks.onRejected = function (error) {
        try {
          const rejectedRES = onRejected(error);
          if (rejectedRES instanceof MyPromise) {
            rejectedRES.then(resolve, reject);
          } else {
            resolve(rejectedRES);
          }
        } catch (error) {
          reject(error);
        }
      };
    });
  };
  w.MyPromise = MyPromise;
})(window);
