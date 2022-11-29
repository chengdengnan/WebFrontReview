<template>
    <h3 id="ClosePackage">
        <RouterLink to="#ClosePackage" class="a-link">#</RouterLink>
        1、闭包
    </h3>
    <div>
        <section>
            <p>
                <span class="red">高级程序设计：</span>
                闭包指有权访问另一个函数作用域中的变量的函数，可以理解为那些引用了另一个函数作用域变量的函数，
                通常是在嵌套函数中实现的。
            </p>
        </section>
    </div>
    <div>
        <h4 id="PrivateVariable">
            <RouterLink to="#PrivateVariable" class="a-link">#</RouterLink>1、封装私有变量（AMD的框架等都使用）
        </h4>
        <section>
            <WebPrismEditor v-model="PrivateVariable"></WebPrismEditor>
        </section>
    </div>
    <div>
        <h4 id="StorageVariable">
            <RouterLink to="#StorageVariable" class="a-link">#</RouterLink>2、存储变量
        </h4>
        <section>
            <WebPrismEditor v-model="StorageVariable"></WebPrismEditor>
        </section>
    </div>
</template>

<script lang='ts' setup >
import { ref, getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

const PrivateVariable = $builtIn(`
// 普通定义类
function Person() {
  this.age = 10;
}
Person.prototype = {
  addAge() {
    this.age += 1;
  },
};

var person = new Person();
console.log(person.age);

// 工厂方法
function Person2() {
  var age = 10;
  return {
    addAge() {
      this.age += 1;
    },
  };
}
var person2 = new Person2();
console.log(person2.age);
`)

const StorageVariable = $builtIn(`
function getList() {
  let loaclData = null;
  return {
    getData() {
      if (loaclData) {
        return Promise.resolve(loaclData);
      }
      return fetch("xxx").then((res) => {
        loaclData = res.json();
      });
    },
  };
}

const listDataManager = getList();
const result = listDataManager.getData(); // 如果有数据就是取缓存的数据
`)

</script>

<style lang='scss'>

</style>