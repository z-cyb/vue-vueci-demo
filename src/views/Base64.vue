<template>
    <div id="bm">
        <div>
            <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="请输入要编码的内容"
                    v-model="textarea">
            </el-input>
            <el-button type="info" plain @click="handleClick">base64编码</el-button>
        </div>
       <div>

           <el-input
                   type="textarea"
                   :rows="5"
                   placeholder="请输入要解码的内容"
                   v-model="textarea2"
           >
           </el-input>
           <el-button type="info" plain @click="handleClick2">base64解码</el-button>
       </div>
    </div>

</template>

<script>
    export default {
        name: "Base64",
        data:function () {
            return {
                textarea: '',
                textarea2:''
            }
        },
        methods:{

            // handleClick:function () {
            //     // let _this =this
            //     let bm=this.textarea
            //     // console.log(bm)
            //     let Base64 = require('js-base64').Base64
            //     this.textarea2 =Base64.encode(bm)
            // },
            // textarea:''
            // , handleClick2:function () {
            //     // let _this =this
            //     let bm=this.textarea2
            //     // console.log(bm)
            //     let Base64 = require('js-base64').Base64
            //     this.textarea =Base64.decode(bm)
            //     console.log(this.textarea)
            //
            // },
            handleClick:function () {
                let _this=this
                this.axios.get('/api/routine/base/',{
                    params:{routine:this.textarea}
                }).then(function (resp) {
                    _this.textarea2 =resp.data.b64_content
                })
            },handleClick2:function () {
                let _this=this
                this.axios.get('/api/routine/base/',{
                    params:{decode:this.textarea2}
                }).then(function (resp) {
                    _this.textarea =resp.data.b64_content_js
                    // _this.textarea2 =''
                })
            },

        }
    }
</script>

<style scoped>
    #bm{
        width:800px;
        height: 300px;
        display: flex;
        margin:auto;
        justify-content: space-around;
    }
</style>