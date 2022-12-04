<template>
    <h3 id="ReactGrammar">
        <RouterLink to="#ReactGrammar" class="a-link">#</RouterLink>
        3、React 基础
    </h3>
    <div>
        <h4 id="ReactJSX">
            <RouterLink to="#ReactJSX" class="a-link">#</RouterLink>
            1、JSX
        </h4>
        <section>
            <div>
                <p class="c-h5">1. JSX语法规则</p>
                <div>
                    <ul>
                        <li> 定义虚拟DOM时，不能写引号</li>
                        <li> 标签中混入Js表达式时要用{ }</li>
                        <li> 样式类名要用className</li>
                        <li> 内联样式，要用<code>双花括号</code>的形式</li>
                        <li> 只有一个根标签，所有标签必须闭合</li>
                        <li>
                            标签首字母：
                            <div>
                                <ul type="cricle">
                                    <li>小写开头，则将改标签转为html中同名元素</li>
                                    <li>大写开头，react 则去渲染对应组件</li>
                                </ul>
                            </div>
                        </li>
                        <li> 注释：{/* xxx */}</li>
                        <li> props默认值为true</li>
                    </ul>
                </div>
                <WebPrismEditor v-model="JSXGrammar"></WebPrismEditor>
            </div>
            <div>
                <p class="c-h5">2. 合法的JSX元素</p>
                <div>
                    <ul>
                        <li>普通的DOM元素，如<code>div/span/p</code>等</li>
                        <li>
                            申明的react组件，例如通过<code>class</code>或者函数创建的<code>jsx</code>组件
                            ，用户定义的组件必须以大写字母开头
                        </li>
                        <li>
                            <code>false、null、undefined、true</code>
                            为合法元素，但是不会渲染
                        </li>
                        <li>
                            字符串最终会渲染一个<code>text节点</code>
                        </li>
                        <li>
                            数字类型，最终会渲染出来
                        </li>
                    </ul>
                </div>
                <WebPrismEditor v-model="JSXElement"></WebPrismEditor>

            </div>
        </section>
    </div>
    <div>
        <h4 id="FunctionComponent">
            <RouterLink to="#FunctionComponent" class="a-link">#</RouterLink>
            2、函数式组件
        </h4>
    </div>
    <div>
        <h4 id="ClassComponent">
            <RouterLink to="#ClassComponent" class="a-link">#</RouterLink>
            3、类式组件
        </h4>
    </div>
    <div>
        <h4 id="HasStateComponent">
            <RouterLink to="#HasStateComponent" class="a-link">#</RouterLink>
            4、有无状态组件
        </h4>
    </div>
    <div>
        <h4 id="ControlComponent">
            <RouterLink to="#ControlComponent" class="a-link">#</RouterLink>
            5、受控组件和非受控组件
        </h4>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance, ref } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

const JSXGrammar = $builtIn(`const arr = ["Vue", "React", "Angular"];
const virtualDOM = (
  <div>
    <h2 className="title">前端 JS 框架</h2>
    <ul>
      {arr.map((t, i) => {
        return (
          <li className="sub-title" style={{ color: "#F0F" }} key={i}>
            {t}
          </li>
        );
      })}
    </ul>
  </div>
);
ReactDOM.render(virtualDOM, document.getElementById("container"));`)

const JSXElement = $builtIn(`<div>
    <p>{false && <p>test</p>}{/* 渲染空元素 */}</p>
    <p>{0 && <p>true</p>}{/* 与门如果出现非布尔值，渲染与预期有出入，渲染出0 */}</p>
    <p>{0 ? null : <p>true</p>} {/* 建议使用三目运算符 */}</p>
</div>`)
</script>

<style lang='scss'>

</style>