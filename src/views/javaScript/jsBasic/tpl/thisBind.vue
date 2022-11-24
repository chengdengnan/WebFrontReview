<template>
    <h3 id="ThisBind">
        <RouterLink to="#ThisBind" class="a-link">#</RouterLink>
        1、This绑定
    </h3>
    <div>
        <h4 id="DefaultBind">
            <RouterLink to="#DefaultBind" class="a-link">#</RouterLink>1、默认绑定(函数直接调用)
        </h4>
    </div>
    <div>
        <h4 id="ImplicitBind">
            <RouterLink to="#ImplicitBind" class="a-link">#</RouterLink>2、隐式绑定(属性访问调用，函数被别人调用)
        </h4>
    </div>
    <div>
        <h4 id="DisplayBind">
            <RouterLink to="#DisplayBind" class="a-link">#</RouterLink>3、显示绑定(call/apply/bind)
        </h4>
    </div>
    <div>
        <h4 id="NewObject">
            <RouterLink to="#NewObject" class="a-link">#</RouterLink>4、new创建对象
        </h4>
    </div>
    <div>
        <h4 id="ArrowFunction">
            <RouterLink to="#ArrowFunction" class="a-link">#</RouterLink>5、箭头函数
        </h4>
    </div>
    <div>
        <h4 id="ThisPriority">
            <RouterLink to="#ThisPriority" class="a-link">#</RouterLink>6、优先级
        </h4>
    </div>
</template>

<script lang='ts' setup >
</script>

<style lang='scss'>

</style>