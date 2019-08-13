<template>
    <div>
        <el-input
                type="textarea"
                :rows="8"
                placeholder="请输入要压缩内容"
                v-model="textarea">
        </el-input>
        <el-button type="success" plain @click="handleClick">json压缩</el-button>
        <el-button type="success" plain @click="handleClick2">json压缩</el-button>
        <el-input
                type="textarea"
                :rows="8"
                placeholder="压缩后的内容"
                v-model="textarea2">
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "json压缩",
        data() {
            return {
                textarea: '',
                textarea2:''
            }
        },
        methods:{
            handleClick:function () {
                this.textarea2=JSON.stringify(this.textarea).replace('\n','')
            },handleClick2:function () {
                this.textarea=JSON.parse(this.textarea2)
            },
            // handleClick:function () {
            //     let _this=this
            //     this.axios.get('/api/routine/jsys/',{
            //         params:{"js":this.textarea}
            //     }).then(function (resp) {
            //         _this.textarea2=resp.data.js
            //     })
            // },
        //     // handleClick2:function () {
        //     //     this.textarea=JSON.parse(this.textarea2)
        //     // },
        }
    }
</script>

<style scoped>

</style>



