<template>
    <div id="app">
        <div id="nav">
            <router-link to="/sass">sass</router-link> |
            <router-link to="/less">less</router-link> |
            <router-link to="/stylus">stylus</router-link> |
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Less"
    }
</script>

<style scoped>

</style>