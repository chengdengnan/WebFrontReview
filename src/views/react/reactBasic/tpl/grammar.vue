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
        <h4 id="ReactProps">
            <RouterLink to="#ReactProps" class="a-link">#</RouterLink>
            5、props的理解与使用
        </h4>
        <section>
            <div class="overview">
                <NavigationBlank v-model="ReactPropTypesLink">使用 PropTypes 进行类型检查</NavigationBlank>
            </div>
            <p class="c-h7">理解：</p>
            <div>
                <ul>
                    <li>每个组件对象都会有<code>props( prototies 的简写 )</code>属性</li>
                    <li>组件标签的所有属性，都保存在<code>props</code>中</li>
                </ul>
            </div>
            <p class="c-h7">作用：</p>
            <div>
                <ul>
                    <li>通过标签属性从【组件外】向【组件内】传递变化的数据</li>
                    <li>注意：组件内部不要修改<code>props</code>数据</li>
                </ul>
            </div>
            <blockquote class="be-careful">
                <p class="title">注意：</p>
                <div>
                    自 <code>React v15.5</code> 起，<code>React.PropTypes</code>
                    已移入另一个包中。请使用 <code>prop-types</code> 库 代替。我们提供了一个 <code>codemod</code>
                    脚本来做自动转换。
                </div>
            </blockquote>
            <p class="c-h6">类式组件使用 props</p>
            <WebPrismEditor v-model="ClassComponentProps"></WebPrismEditor>
            <p class="c-h6">函数式组件使用 props</p>
            <WebPrismEditor v-model="FuncComponentProps"></WebPrismEditor>
        </section>
    </div>
    <div>
        <h4 id="ReactRef">
            <RouterLink to="#ReactRef" class="a-link">#</RouterLink>
            6、ref的理解与使用
        </h4>
        <section>
            <p class="c-h6">写法1：字符串写法(不推荐--效率不高且可能会在未来版本移除)</p>
            <WebPrismEditor v-model="StringRef"></WebPrismEditor>
            <p class="c-h6">写法2：回调函数写法</p>
            <WebPrismEditor v-model="CallbackRef"></WebPrismEditor>
            <blockquote class="be-careful">
                <p class="title">注意：关于回调 refs 的说明</p>
                <div>
                    如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数
                    <code>null</code> ，然后第二次会传入参数 <code>DOM</code> 元素。
                    这是因为在每次渲染时会创建一个新的函数实例，
                    所以 <code>React</code> 清空旧的 <code>ref</code> 并且设置新的。
                    通过将 <code>ref</code> 的回调函数定义成 <code>class</code> 的绑定函数的
                    方式可以避免上述问题，但是大多数情况下它是无关紧要的。
                </div>
            </blockquote>
            <p class="c-h7">将 <code>ref</code> 的回调函数定义成 <code>class</code> 的绑定函数</p>
            <WebPrismEditor v-model="CallbackRef2"></WebPrismEditor>

            <p class="c-h6">写法3：createRef 写法(最新)</p>
            <p>调用后可以返回一个容器，该容器可以存储被 <code>ref</code> 所标识的节点,
                该容器是【专人专用】，后声明的 <code>ref</code> 会覆盖前一个</p>
            <WebPrismEditor v-model="CreateRef"></WebPrismEditor>
        </section>
    </div>
    <div>
        <h4 id="HasStateComponent">
            <RouterLink to="#HasStateComponent" class="a-link">#</RouterLink>
            7、有无状态组件
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
            8、受控组件和非受控组件
        </h4>
        <section>
            <div>
                <ul>
                    <li>受控组件：表单数据是由<code>React</code>组件来管理的，推荐使用</li>
                    <li>非受控组件：表单数据将交由<code>DOM</code>节点来处理，可以通过<code>ref</code>
                        获取表单数据</li>
                </ul>
            </div>
        </section>
    </div>
    <div>
        <h4 id="EventBind">
            <RouterLink to="#EventBind" class="a-link">#</RouterLink>
            9、事件代理
        </h4>
        <section>
            <div>
                <ul>
                    <li>通过 <code>onXxx</code> 属性指定事件处理函数（注意大小写）
                        <div>
                            <ul type="cricle">
                                <li>React 使用的是自定义（合成）事件，而不是使用原生的 DOM 事件 ———— 为了更好的兼容性</li>
                                <li>React 中的事件是通过【事件委托(事件代理)】方式处理的（委托给组件最外层的元素）————
                                    为了跨端、兼容性和性能提升</li>
                            </ul>
                        </div>
                    </li>
                    <li>通过 event.target 得到发生事件的 DOM 元素对象</li>
                </ul>
            </div>
            <WebPrismEditor v-model="EventProxy"></WebPrismEditor>
            <blockquote class="be-careful">
                <p class="title">注意</p>
                <div>
                    异步操作最好将对象内部需要的值进行拷贝，否则会导致 <code>this</code> 指向问题。
                </div>
            </blockquote>
            <WebPrismEditor v-model="AsyncEventProxy"></WebPrismEditor>
        </section>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance, ref } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

const ReactPropTypesLink = ref<String>
    ("https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper")


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

const ClassComponentProps = $builtIn(`
class Person extends React.Component {
  // 开发过程中可以忽略，基本上不需要写
  // constructor(props) {
  //   // 构造器是否接收props，是否传递给super，
  //   // 取决于：是否希望在构造器中通过 this 访问 props
  //   super(props);
  // }

  // 如何限制 props 数据类型
  // React 16 之前,React 15.5开始已弃用
  // static propTypes = {
  // name: React.PropTypes.string.isRequired,
  // sex: React.PropTypes.string,
  // age: React.PropTypes.number,
  // speak: React.PropTypes.func,
  // };
  /**
   * 使用 prop-types 库进行限制
   * 需要引入 prop-types 库
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string,
    age: PropTypes.number,
    speak: PropTypes.func,
  };
  // 指定默认标签属性值
  static defaultProps = {
    sex: "未知",
    age: 6,
  };

  render() {
    // props 是只读的
    console.log("props", this.props);
    const { name, age, sex } = this.props;
    const speak = this.props.speak
      ? this.props.speak.bind(this)
      : () => console.log("请添加方法");
    return (
      <div>
        <ul>
          <li>姓名：{name}</li>
          <li>年龄：{age}</li>
          <li>性别：{sex}</li>
          <li>
            <button onClick={speak}>说话</button>
          </li>
        </ul>
      </div>
    );
  }
}
function speak() {
  console.log(this.props.name + '：说话了');
}
//方法传递
ReactDOM.render(
  <Person name="Barry" age={20} speak={speak} />,
  document.getElementById("container")
);

// 批量传递 props
const personInformation = { name: "Lishen", age: 22, sex: "男" };
// 扩展属性：将对象所有的属性通过 props 传递
ReactDOM.render(
  <Person {...personInformation} />,
  document.getElementById("container2")
);`)

const FuncComponentProps = $builtIn(`
function Person(props) {
    console.log("props", props);
    const { name, sex, age } = props;
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age}</li>
      </ul>
    );
}
// 如何限制 props 数据类型
// React 16 之前,React 15.5开始弃用
//   Person.propTypes = {
//    name: React.PropTypes.string.isRequired,
//    sex: React.PropTypes.string,
//    age: React.PropTypes.number,
//   };
/**
  * 使用 prop-types 库进行限制
  * 需要引入 prop-types 库
 */
Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  age: PropTypes.number,
};
// 指定默认标签属性值
Person.defaultProps = {
  sex: "未知",
  age: 6,
};
ReactDOM.render(
  <Person name="Barry" age={18} />,
  document.getElementById("container")
);`)

const StringRef = $builtIn(`
class Demo extends React.Component {
  handleLeftClick = () => {
    alert(this.refs.leftInput.value);
  };
  render() {
    return (
      <div>
        <input ref="leftInput" type="text" placeholder="请输入数据" />
        &nbsp;
        <button onClick={this.handleLeftClick}>点击提示左侧数据</button>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById("container"));`)

const CallbackRef = $builtIn(`
class Demo2 extends React.Component {
  handleLeftClick = () => {
    alert(this.leftInput2.value);
  };
  render() {
    return (
      <div>
        <input
          ref={(currentNode) => (this.leftInput2 = currentNode)}
          type="text"
          placeholder="请输入数据"
        />
        &nbsp;
        <button onClick={this.handleLeftClick}>点击提示左侧数据</button>
      </div>
    );
  }
}
ReactDOM.render(<Demo2 />, document.getElementById("container2"));`)

const CallbackRef2 = $builtIn(`
class Demo3 extends React.Component {
  // 通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免更新过程中它会被执行两次
  saveRef = (currentNode) => {
    this.rightInput2 = currentNode;
  };
  render() {
    return (
      <div>
        <input ref={this.saveRef} type="text" placeholder="请输入数据" />
      </div>
    );
  }
}
ReactDOM.render(<Demo3 />, document.getElementById("container2"));`)


const CreateRef = $builtIn(`
class Demo3 extends React.Component {
  /**
   * React.createRef()
   * 调用后可以返回一个容器，该容器可以存储被ref所标识的节点
   * 该容器是【专人专用】，后声明的ref会覆盖前一个
   */
  myRef = React.createRef();

  handleClick = () => {
    console.log(this.myRef.current.value);
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder="请输入数据" />
        &nbsp;
        <button onClick={this.handleClick}>点击提示左侧数据</button>
      </div>
    );
  }
}`)

const EventProxy = $builtIn(`
class Demo extends React.Component {
    myRef = React.createRef();
    handleClick = () => {
      console.log(this.myRef.current.value);
    };
    handleBlur = (event) => {
      console.log(event.target.value);
    };
    render() {
      return (
        <div>
          <input ref={this.myRef} type="text" placeholder="请输入数据" />
          &nbsp;
          <button onClick={this.handleClick}>点击提示左侧数据</button>
          <input
            onBlur={this.handleBlur}
            type="text"
            placeholder="失去焦点提示数据"
          />
        </div>
      );
   }
}`)

const AsyncEventProxy = $builtIn(`
class Demo extends React.Component {
    handleAsyncClick = (event) => {
      // 直接使用会报错
      setTimeout(() => {
        console.log(event.target.innerText);
      }, 1000);

      // 解决办法
      let text = event.target.innerText;
      setTimeout(() => {
        console.log(text);
      }, 1000);
    };
    render() {
      return (
        <div>
          <button onClick={this.handleAsyncClick}>异步展示</button>
        </div>
      );
   }
}`)


</script>

<style lang='scss'>

</style>