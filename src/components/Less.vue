<template>
    <div id="app">
        <div id="nav">
            <router-link to="/sass">sass</router-link> |
            <router-link to="/less">less</router-link> |
            <router-link to="/stylus">stylus</router-link> |
        </div>
        <router-view/>
        <div>
            <p>测试vue中预处理器less</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Less"
    }
</script>

<style lang="less">
    @color:blue;
    div p{
        color: @color;
    }
</style>