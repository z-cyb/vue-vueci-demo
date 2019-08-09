<template>
    <div id="app">
        <div id="nav">
            <router-link to="/Stuappend">添加</router-link> |
            <router-link to="/Stuselect">查询</router-link> |
            <router-link to="/Stumodifier">修改</router-link> |
            <router-link to="/Studelete">删除</router-link> |
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Stumodifier"
    }
</script>

<style scoped>

</style>