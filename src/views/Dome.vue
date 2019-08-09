<template>
    <div>
        <div id="demo" class="demo">
            <h1>示例</h1>
            <p> 修改的地方有main.js、router.js、 App.vue、 views/Demo.vue 。<br>
                过程：用UI库引入了一个别人写好的按钮，触发事件，请求接口，获取数据，渲染数据到子组件。
            </p>
            <el-button v-on:click="handleClick" type="primary">点击向后端发起请求</el-button>
            <h5>接口返回结果：{{ respText }}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dome",
        data:function () {
            return {
                respText:''
            }
        },
        methods:{
            handleClick:function () {
                let _this =this
                this.axios.get('/api/index',{
                    params:{

                    }
                }).then(function (resp) {
                    console.log(resp);
                    console.log(resp.data, typeof resp);
                    console.log(resp.data.msg);
                    console.log(_this)
                    _this.respText = resp.data.msg;
                })
            }
        }
    }
</script>

<style scoped>
    .demo {
        background-color: lightblue;
    }
</style>