(function (w) {
  function MyPromise(executor) {
    const that = this;
    that._status = "pending";
    // 用来存储成功/失败回调函数的容器
    that._callbacks = {};

    function resolve(value) {
      if (that._status !== "pending") return;
      that._status = "resolved";
      // 触发和调用onResolved函数,切记这里要异步去调用,因为代码同步执行的,这个时候原型上还没有添加这些方法
      setTimeout(() => {
        // that._callbacks.onResolved && that._callbacks.onResolved(value);

        // 这个和上面的写法一样,但是是ES11的语法,2020年  新的运算符?.可选链
        that._callbacks.onResolved?.(value);
      }, 0);
    }
    function reject(error) {
      if (that._status !== "pending") return;
      that._status = "rejected";
      // 如果不用定时器,这样子也可以
      that._callbacks.onRejected && that._callbacks.onRejected(error);
    }

    executor(resolve, reject);
  }

  MyPromise.prototype.then = function (onResolved, onRejected) {
    /* 
      this指向实例对象promise
      将成功/失败回调添加到容器中(注意没有调用,只是去添加这个属性,在调用回调的时候执行)
    */
    this._callbacks.onResolved = onResolved;
    this._callbacks.onRejected = onRejected;
  };
  w.MyPromise = MyPromise;
})(window);
