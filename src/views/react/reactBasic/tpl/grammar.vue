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
        <section>
            <p>在<code>react</code>中可以使用【 函数 】的形式来创建一个组件：</p>
            <WebPrismEditor v-model="FunComponent"></WebPrismEditor>
        </section>
    </div>
    <div>
        <h4 id="ClassComponent">
            <RouterLink to="#ClassComponent" class="a-link">#</RouterLink>
            3、类式组件
        </h4>
        <section>
            <p>在<code>react</code>中可以使用【 类 】的形式来创建一个组件：</p>
            <WebPrismEditor v-model="ClassComponent"></WebPrismEditor>
            <p class="c-h7">两种组件的区别：</p>
            <div>
                <ul>
                    <li>
                        加载<code>props</code>方式不同，【函数式】定义组件从组件函数加载;【类式】的组件通过
                        <code>this.props</code>获取传入的参数
                    </li>
                    <li>
                        【函数式】组件比较简单，内部无法维护状态(因为没有 this,新版本的hook解决了次问题);
                        【类式】内部可以通过<code>this.state</code>和<code>this.setState</code>方法定义
                        和更新内部的<code>state</code>，同时更新<code>header</code>里面函数的渲染结果
                    </li>
                    <li>
                        【类式】组件内部可以定义更多的方法在实例上，但是【函数式】组件无法定义
                    </li>
                    <li>
                        【类式】组件需要使用<code>new</code>实例化，函数式组件直接使用
                    </li>
                </ul>
            </div>
        </section>
    </div>

    <div>
        <h4 id="StateAndSetState">
            <RouterLink to="#StateAndSetState" class="a-link">#</RouterLink>
            4、state与setState的理解使用
        </h4>
        <section>
            <div>
                <p class="c-h7">理解:</p>
                <ul>
                    <li><code>state</code>是组件对象最重要的属性，值是对象(可以包含多个<code>key-value</code>的组合)</li>
                    <li>
                        组件被称为【状态机】，通过更新组件的<code>state</code>来更新对应的页面显示(重新渲染组件)
                    </li>
                </ul>
                <p class="c-h7">注意:</p>
                <ul>
                    <li>
                        组件中<code>render</code>方法的<code>this</code>为组件实例对象
                    </li>
                    <li>
                        组件自定义方法中<code>this</code>为<code>undefined</code>，如何解决？
                        <div>
                            <ul type="cricle">
                                <li>
                                    强制绑定<code>this</code>：通过函数对象的<code>bind()</code>
                                </li>
                                <li>
                                    箭头函数
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        状态数据，不能直接修改或更新
                    </li>
                </ul>
            </div>
            <div>
                <p class="c-h7">强制绑定<code>this</code>：通过函数对象的<code>bind()</code></p>
                <WebPrismEditor v-model="ForceBindThis"></WebPrismEditor>
            </div>
            <div>
                <p class="c-h7">箭头函数</p>
                <WebPrismEditor v-model="ArrowFunctionBindThis"></WebPrismEditor>
            </div>
        </section>
    </div>
    <div>
        <h4 id="HasStateComponent">
            <RouterLink to="#HasStateComponent" class="a-link">#</RouterLink>
            5、有无状态组件
        </h4>
        <section>
            <div>
                <p class="c-h6">1. 有状态组件</p>
                <div>
                    <ul>
                        <li>
                            特点
                            <div>
                                <ul type="cricle">
                                    <li>
                                        是类组件
                                    </li>
                                    <li>
                                        有继承
                                    </li>
                                    <li>
                                        可以使用<code>this</code>
                                    </li>
                                    <li>
                                        使用较多，容易频繁触发生命周期钩子函数，影响性能
                                    </li>
                                    <li>
                                        内部使用<code>state</code>，维护自身状态的变化，有状态组件根据外部组件传入
                                        的<code>props</code>和自身的<code>state</code>进行渲染
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            使用场景
                            <div>
                                <ul type="cricle">
                                    <li>需要使用到状态的</li>
                                    <li>
                                        需要使用状态操作组件的(无状态的组件也可以实现，
                                        通过新版本的<code>React hooks</code>实现 )
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            总结
                            <div>
                                <ul type="cricle">
                                    <li>
                                        类组件可以维护自身的状态变量，即组件的<code>state</code>，类组件还有不同
                                        的生命周期方法，可以让开发者能够在组件的不同阶段（挂载、更新、卸载）对组件
                                        做更多的控制。类组件既可以充当无状态组件，也可以充当有状态组件。当一个类
                                        组件不需要管理自身状态时，也可以称为【无状态组件】
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p class="c-h6">2. 无状态组件</p>
                <div>
                    <ul>
                        <li>
                            特点
                            <div>
                                <ul type="cricle">
                                    <li>
                                        不依赖自身的状态<code>state</code>
                                    </li>
                                    <li>
                                        可以是类组件或者函数组件
                                    </li>
                                    <li>
                                        可以完全避免使用<code>this</code>关键字(由于使用的是箭头函数事件无需绑定)
                                    </li>
                                    <li>
                                        有更高的性能，当不需要使用生命周期钩子时，应该首先使用无状态函数组件
                                    </li>
                                    <li>
                                        组件内部不维护<code>state</code>，只根据外部组件传入的<code>props</code>
                                        进行渲染的组件，当<code>props</code>改变时，组件重新渲染。
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            使用场景
                            <div>
                                <ul type="cricle">
                                    <li>
                                        组件不需要管理<code>state</code>，纯展示
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            优点
                            <div>
                                <ul type="cricle">
                                    <li>
                                        简化代码，专注于<code>render</code>
                                    </li>
                                    <li>
                                        组件不需要被实例化，无生命周期，提升性能。
                                        输出(渲染)只取决于输入(属性)，无副作用
                                    </li>
                                    <li>
                                        视图和数据的解耦分离
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            缺点
                            <div>
                                <ul type="cricle">
                                    <li>
                                        无法使用<code>ref</code>
                                    </li>
                                    <li>
                                        无生命周期方法
                                    </li>
                                    <li>
                                        无法控制组件的重新渲染，因为无法使用
                                        <code>shouldComponentUpdate</code>方法，当组件接受到新的属性时则会重新渲染
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            总结
                            <div>
                                <ul type="cricle">
                                    <li>
                                        组件内部状态且与外部无关的组件，可以考虑用状态组件，这样状态数就不会过于复杂，易于理解和管理。
                                        当一个组件不需要管理自身状态时，也就是无状态组件，应该优先设计为函数组件，比如自定义的
                                        <code>Button、Input</code>等组件
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    <div>
        <h4 id="ControlComponent">
            <RouterLink to="#ControlComponent" class="a-link">#</RouterLink>
            6、受控组件和非受控组件
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

const FunComponent = $builtIn(`
function Demo(props) {
    return <h2>{props.text || 'My name is Function Component'}</h2>;
}
ReactDOM.render(<Demo />, document.getElementById("container"));`)

const ClassComponent = $builtIn(`
class Demo extends React.Component {
    render() {
      // render是放在哪里的？—— Demo的原型对象上，供实例使用
      // render中this是谁？—— Demo组件的实例对象
      return <h2>{ this.props.text || 'My name is Class Component'}</h2>;
    }
}
ReactDOM.render(<Demo />, document.getElementById("container"));`)

const ForceBindThis = $builtIn(`
class Weather extends React.Component {
    // constructor 调用几次？—— 1次
    constructor(props) {
      super(props);
      this.state = {
        isHot: false,
      };
      //解决 handleClick 中的 this 问题
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      //handleClick 放在哪里？——放在 Weather 的原型对象上，供实例使用
      //由于handleClick 是作为 onClick 的回调，所以不是通过实例调用的，属于直接调用
      //    严格模式下 this 为 undefined(类中的所有方法都默认开启了局部严格模式)
      //所以 handleClick 中的 this 为undefined

      //注意：state 不可直接更改，必须通过 setState 进行更新
      //且，更新是一种合并，不是替换
      //   this.setState((state) => (state.isHot = !state.isHot));
      this.setState({ isHot: !this.state.isHot });
    }
    // render 调用几次？—— 1 + n次，1：初始化，n：状态更新次数
    render() {
      return (
        <h2 onClick={this.handleClick}>
          今天天气很：{this.state.isHot ? "炎热" : "凉爽"}
        </h2>
      );
    }
}`)

const ArrowFunctionBindThis = $builtIn(`
class Weather extends React.Component {
    state = {
      isHot: false,
      wind: "微风",
    };
    handleClick = () => {
      this.setState({
        isHot: !this.state.isHot,
        wind: this.state.isHot ? "无风" : "微风",
      });
    };
    render() {
      const { isHot, wind } = this.state;
      return (
        <h2 onClick={this.handleClick}>
          今天天气很：{isHot ? "炎热" : "凉爽"} - {wind}
        </h2>
      );
    }
}`)


</script>

<style lang='scss'>

</style>