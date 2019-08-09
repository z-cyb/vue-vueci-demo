<template>
    <div id="weather" class="weather">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <el-row>
                    <el-col :span="24" class="list">
                        <div>
                            <h5>未来天气列表</h5>
                            <!-- 表格-->
                            <el-table
                                    :data="tableData"
                                    style="width: 100%"
                                    border>
                                <el-table-column
                                        prop="date"
                                        label="日期">
                                </el-table-column>
                                <el-table-column
                                        prop="high"
                                        label="高温"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="low"
                                        label="低温">
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-col>
                </el-row>
                <!--分页-->
                <el-row>
                    <el-col :span="24" class="pagination">
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :current-page="currentPage"
                                :page-size="pageSize"
                                :total="tableRowsTotal"
                                @current-change="handleCurrentChange">
                        </el-pagination>
                    </el-col>
                </el-row>

                <!--图表-->
                <el-row>
                    <el-col :span="24" class="temperature-chart">
                        <div>
                            <h5>温度趋势图</h5>
                            <ve-line :data="chartData"></ve-line>
                        </div>
                    </el-col>
                </el-row>

            </el-main>
        </el-container>
    </div>
</template>

<script>
    import VeLine from 'v-charts/lib/line.common'
    export default {
        name: "Weather",
        components: { VeLine },
        data: function(){
            return {
                tableData: [
                    {
                        "date": "24",
                        "sunrise": "05:28",
                        "high": "高温 38.0℃",
                        "low": "低温 28.0℃",
                        "sunset": "19:35",
                        "aqi": 87,
                        "ymd": "2019-07-24",
                        "week": "星期三",
                        "fx": "西北风",
                        "fl": "3-4级",
                        "type": "多云",
                        "notice": "阴晴之间，谨防紫外线侵扰"
                    },{
                        "date": "24",
                        "sunrise": "05:28",
                        "high": "高温 38.0℃",
                        "low": "低温 28.0℃",
                        "sunset": "19:35",
                        "aqi": 87,
                        "ymd": "2019-07-24",
                        "week": "星期三",
                        "fx": "西北风",
                        "fl": "3-4级",
                        "type": "多云",
                        "notice": "阴晴之间，谨防紫外线侵扰"
                    },
                ],
                tableRowsTotal: 15,   // 总条数
                pageSize: 5,   // 每页几条
                currentPage: 1,  // 当前页码
                chartData: {
                    columns: ['日期', '高温', '低温'],
                    rows: [
                        { '日期': '星期五', '高温': 36, '低温': 25, },
                        { '日期': '星期六', '高温': 38, '低温': 25, },
                        { '日期': '星期日', '高温': 33, '低温': 25, },

                    ]
                }
            }
        },
        // created: function(){
        //   // 类似methods,只是不用事件触发，vue实例创建时（用户看到页面时）就请求了，相当于jquery里的onready() 。
        //   预先需要的数据可以在created 或mounted 周期发起请求。
        //   this.axios.get('/api/weather', {
        //
        //   }).then(function(resp){
        //     console.log(resp.data)
        //   })
        // },
        mounted(){
            // es6写法
            this.axios.get('/api/weather').then(
                (resp) => {
                    console.log(resp.data);
                    let forecast_days = resp.data
                    forecast_days.forEach((day, index)=>{
                        // 循环数组
                        // 不能this.tableData[index] = day.date这种方式赋新值，数组长度不够时索引越界
                        // https://blog.csdn.net/shenzhen_zsw/article/details/84314842
                        // 应该this.$set(this.tableData,index,newRow)
                        this.$set(this.tableData, index, {
                            'date': day.date,
                            'high': day.high,
                            'low': day.low
                        })
                    });
                }
            );
            let _this = this;
            this.axios.get('/api/weather_chart').then(
                function(resp){
                    console.log(resp.data);
                    let chart_columns = resp.data.chart_columns
                    let chart_rows = resp.data.chart_rows
                    _this.chartData.columns = chart_columns
                    _this.chartData.rows = chart_rows
                }
            );
        },
        methods: {
            apiDataToTableData(apiData){
                // 页码改变重新请求 接口数据写入表格数据。业务逻辑跟mounted中的代码一致，可以抽象出方法供重复调用。
                let forecast_days = apiData
                forecast_days.forEach((day, index)=>{
                    // 循环数组
                    // 不能this.tableData[index] = day.date这种方式赋新值，数组长度不够时索引越界
                    // https://blog.csdn.net/shenzhen_zsw/article/details/84314842
                    // 应该this.$set(this.tableData,index,newRow)
                    this.$set(this.tableData, index, {
                        'date': day.date,
                        'high': day.high,
                        'low': day.low
                    })
                });
            },
            handleCurrentChange: function(page){
                // 页码改变时再次发起请求
                // console.log(page)
                this.axios.get('/api/weather',{
                    params: {
                        current_page: page,
                        page_size: this.pageSize
                    }
                }).then((resp)=>{
                    // console.log(resp.data);
                    this.apiDataToTableData(resp.data);
                })
            }
        }
    }
</script>

<style type="css" scoped>
    /*.header {*/
    /*  background-color: lightblue;*/
    /*}*/
    /*.main {*/
    /*  background-color: lightgoldenrodyellow;*/
    /*}*/
</style>