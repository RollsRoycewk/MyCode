const person = {
  firstName: "chen",
  lastName: "guanxi",
};

// 定义对象的属性的属性(原属性)
Object.defineProperty(person, "fullname", {
  // value:'chen guanxi',  属性的值
  configurable: false, // 是否可以重新配置或者删除
  // writable:true,  // 是否可以枚举
  enumerable: true, // 是否可以枚举,遍历, for in
  get() {
    // 属性读取时会调用的方法(返回值就是属性的值)
    return this.firstName + " " + this.lastName;
  },
  set(newVal) {
    // console.log(newVal);   luo yonghao
    // 利用数组一一对应关系来解构
    const [firstName, lastName] = newVal.split(" ");
    console.log(firstName); // luo
    console.log(lastName); // yonghao
    // console.log(this); { firstName: 'chen', lastName: 'guanxi', fullname: [Getter/Setter] }
    this.firstName = firstName;
    this.lastName = lastName;
  },
});

// 此时会调用get方法
console.log(person.fullname); //chen guanxi

// 此时会调用set方法
person.fullname = "luo yonghao";

console.log(person);
// { firstName: 'chen', lastName: 'guanxi', fullname: [Getter/Setter] } 修改前
// { firstName: 'luo', lastName: 'yonghao', fullname: [Getter/Setter] } 修改后
