(function (w) {
  function MyPromise(executor) {
    const that = this;
    that._status = "pending";
    // 定义promise默认返回值
    that._result = undefined;
    that._callbacks = {};

    function resolve(value) {
      if (that._status !== "pending") return;
      that._status = "resolved";
      // 修改promise的返回值
      that._result = value;
      setTimeout(() => {
        that._callbacks.onResolved?.(value);
      });
    }

    function reject(error) {
      if (that._status !== "pending") return;
      that._status = "rejected";
      // 修改promise的返回值
      that._result = error;
      setTimeout(() => {
        that._callbacks.onRejected && that._callbacks.onRejected(error);
      });
    }
    executor(resolve, reject);
  }

  MyPromise.prototype.then = function (onResolved, onRejected) {
    const that = this;
    // 调用then方法,返回一个新的promise对象,这样才能实现then方法的链式调用
    return new MyPromise((resolve, reject) => {
      // then的返回值,取决于内部函数的返回值,怎么拿到这个函数内部返回值呢?小技巧
      that._callbacks.onResolved = function (value) {
        const resolvedRES = onResolved(value);
        // 如果res的隐式原型在MyP的显示原型上,其实就是确认是peomise实例
        if (resolvedRES instanceof MyPromise) {
          resolvedRES.then(resolve, reject);
          /* 
            实际这个是这样的简写
            result.then(
              (value) => resolve(value),
              (reason) => reject(reason)
            );
           */
        } else {
          // 说明没有返回值或者返回值不是promise
          resolve(resolvedRES);
        }
      };
      // 其实和resolve返回机制一样
      this._callbacks.onRejected = function (error) {
        const rejectedRES = onRejected(error);
        if (rejectedRES instanceof MyPromise) {
          rejectedRES.then(resolve, reject);
        } else {
          resolve(rejectedRES);
        }
      };
    });
  };
  w.MyPromise = MyPromise;
})(window);
