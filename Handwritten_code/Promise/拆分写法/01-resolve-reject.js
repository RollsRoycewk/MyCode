(function (w) {
  function MyPromise(executor) {
    // promise对象就是this,这是因为new关键字作用
    const that = this;
    /* 
        初始化promise对象是pending状态
        _开头的属性是私有属性,外界不允许操作
    */
    that._status = "pending";

    // resolve函数将promise对象状态改成resolved
    function resolve() {
      // 让promise对象状态只能修改一次
      if (that._status !== "pending") return;
      // 如果不用that,这里的this指向是有问题的
      that._status = "resolved";
    }

    // reject函数将promise对象状态改成rejected
    function reject() {
      if (that._status !== "pending") return;
      that._status = "rejected";
    }
    // 同步调用
    executor(resolve, reject);
  }
  w.MyPromise = MyPromise;
})(window);
