// function Myplugin(Vue) {
//   // 当你使用插件时，会调用插件函数，传入Vue作为参数

//   // 扩展全局功能
//   Vue.globalplugin = function () {
//     console.log("我是globalplugin插件");
//   };

//   // 扩展实例对象功能
//   Vue.prototype.$instanceMethods = function () {
//     console.log("我是instanceMethods");
//   };

//   // 扩展全局过滤器
//   Vue.filter("nowDate", (val, form) => {
//     return dayjs(val).format(form);
//   });

//   // 扩展全局指令
//   Vue.directive("lower-text", (el, binding) => {
//     el.innerText = binding.value.toLowerCase();
//   });
// }



const Myplugin = {}
Myplugin.install = function (Vue) {
  // 当你使用插件时，会调用插件函数，传入Vue作为参数

  // 扩展全局功能
  Vue.globalplugin = function () {
    console.log("我是globalplugin插件");
  };

  // 扩展实例对象功能
  Vue.prototype.$instanceMethods = function () {
    console.log("我是instanceMethods");
  };

  // 扩展全局过滤器
  Vue.filter("nowDate", (val, form) => {
    return dayjs(val).format(form);
  });

  // 扩展全局指令
  Vue.directive("lower-text", (el, binding) => {
    el.innerText = binding.value.toLowerCase();
  });
}
// export default MyPlugin
window.Myplugin = Myplugin;


