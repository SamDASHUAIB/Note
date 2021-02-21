// 第一步: 创建一个空对象, 作为将要返回的对象实例
// 第二步: 将这个空对象的原型(prototype)指向构造函数的 prototype 属性
// 第三步: 将这个空对象赋值给函数内部的 this 关键字
// 第四步: 开始执行构造函数内部的代码

// new 命令总是返回一个对象, 要么是实例对象, 要么是 return 语句指定的对象

// 当且仅当 return 语句后面返回的是一个对象时, new 命令直接返回这个对象

// 构造函数内部没有 this 关键字, 使用 new 命令返回一个空对象

// 浏览器原生提供一个 Event 对象, 所有的事件都是这个对象的实例, 或者说继承了 Event.prototype 对象

// ajax 的简单例子
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    } else {
      console.error(xhr.statusText)
    }
  }
}
xhr.onerror = function (e) {
  console.error(xhr.statusText)
}
// 第三个参数为 true 表示异步请求
xhr.open('GET', '/endpoint', true)
xhr.send(null)
