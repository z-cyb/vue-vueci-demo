<template>
        <div id="app">
            <div id="nav">
                <router-link to="/sass">sass</router-link> |
                <router-link to="/less">less</router-link> |
                <router-link to="/stylus">stylus</router-link> |
            </div>
            <div>
                <p class="p">测试sass</p>
            </div>
            <div id="a1">
                <div>
                    <div></div>
                    <p>测试sass嵌套</p>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "sass"
    }
</script>
<style lang="scss">
    $color:yellow;
    $font-color:#FF00FF;
    $bg-color:#B0E2FF;
    .p{
        color:$color;
    }
    #a1{
        div{
            div{
                width: 50px;
                height: 50px;
                background-color: $bg-color;
                margin: 0 auto;
            }
            p{
                color:$font-color;

            }
        }
    }
</style>