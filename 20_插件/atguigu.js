const atguigu = {};

atguigu.install = function (Vue, options) {
  //添加兩個全局指令
  Vue.directive("upper-text", function (el, binding) {
    el.innerText = binding.value.toUpperCase();
  });
  Vue.directive("lower-text", function (el, binding) {
    el.innerText = binding.value.toLowerCase();
  });

  //給Vue自身添加屬性
  Vue.productName = "學生管理系統";
  Vue.MyVersion = "v1.0.1";
  Vue.showInfo = function () {
    console.log("我是一個數據");
  };

  //給Vue原型上添加數據, 供vm使用
  Vue.prototype.$random = function (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  };
};
