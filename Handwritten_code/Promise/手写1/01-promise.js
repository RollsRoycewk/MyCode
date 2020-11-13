(function (w) {
  function MyPromise(executor) {
    const that = this;
    that._status = "pending";
    that._result = undefined;
    // 定义一个容器保存then方法的回调
    that._callbacks = {};

    function resolve(value) {
      if (that._status !== "pending") return;
      that._status = "resolved";
      that._result = value;
      setTimeout(() => {
        // that._callbacks.onResolved && that._callbacks.onResolved(value);
        // ES11 新语法
        that._callbacks.onResolved ? .(value)
      }, 0);
    }

    function reject(reason) {
      if (that._status !== "pending") return;
      that._status = "rejected";
      that._result = reason;
      setTimeout(() => {
        that._callbacks.onRejected && that._callbacks.onRejected(reason);
      }, 0);
    }
    executor(resolve, reject);
  }
  w.MyPromise = MyPromise;

  // 实现then方法
  MyPromise.prototype.then = function (onResolved, onRejected) {
    onResolved =
      typeof onResolved === "function" ? onResolved : (value) => value;

    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    // 这里的this指向实例对象
    const that = this;
    // 调用then方法的时候返回一个promise
    return new MyPromise((resolve, reject) => {
      that._callbacks.onResolved = function (value) {
        try {
          const resolveRES = onResolved(value);
          // console.log(resolveRES)
          if (resolveRES instanceof MyPromise) {
            resolveRES.then(
              (value) => {
                resolve(value);
              },
              (reason) => {
                reject(reason);
              }
            );
          } else {
            resolve(resolveRES);
          }
        } catch (error) {
          reject(error);
        }
      };

      that._callbacks.onRejected = function (reason) {
        try {
          const rejectRES = onRejected(reason);
          // console.log(rejectRES);
          if (rejectRES instanceof MyPromise) {
            rejectRES.then(resolve, reject);
          } else {
            reject(rejectRES);
          }
        } catch (error) {
          reject(error);
        }
      };
    });
  };

  // catch
  MyPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
  };

  // resolve
  MyPromise.resolve = function (value) {
    if (value instanceof MyPromise) {
      return value;
    } else {
      return new MyPromise((resolve) => {
        resolve(value);
      });
    }
  };

  // reject
  MyPromise.reject = function (value) {
    return new MyPromise((resolve, reject) => {
      reject(value);
    });
  };

  // all,当所有的promise都成功的时候,返回一个成功的promise
  MyPromise.all = function (arr) {
    const result = [];
    const allNum = arr.length;
    let totalNum = 0;
    return new MyPromise((resolve, reject) => {
      arr.forEach((item, index) => {
        if (item instanceof MyPromise) {
          item.then(
            (value) => {
              // result[index] = value;
              // totalNum++;
              // if (allNum === totalNum) {
              //   resolve(result);
              // }
              Common(index, value);
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          // result[index] = item;
          // totalNum++;
          // if (allNum === totalNum) {
          //   resolve(result);
          // }
          Common(index, item);
        }
      });

      function Common(index, value) {
        result[index] = value;
        totalNum++;
        if (allNum === totalNum) {
          resolve(result);
        }
      }
    });
  };

  // allSelttled,不管你是怎么样,我都是成功,所有的都成功我再整体成功
  MyPromise.allSettled = function (arr) {
    const allNum = arr.length;
    let totalNum = 0;
    const result = [];
    return new MyPromise((resolve) => {
      arr.forEach((item, index) => {
        if (item instanceof MyPromise) {
          item.then(
            (value) => {
              // result[index] = value;
              // totalNum++;
              // if (totalNum === allNum) {
              //   resolve(result);
              // }
              Common(index, value, "resolved");
            },
            (reason) => {
              // result[index] = reason;
              // totalNum++;
              // if (totalNum === allNum) {
              //   resolve(reason);
              // }
              Common(index, reason, "rejected");
            }
          );
        } else {
          // result[index] = item;
          // totalNum++;
          // if (totalNum === allNum) {
          //   resolve(result);
          // }
          Common(index, item, "resolved");
        }
      });

      function Common(index, value, status) {
        result[index] = {
          status,
          value,
        };
        totalNum++;
        if (totalNum === allNum) {
          resolve(result);
        }
      }
    });
  };
})(window);
