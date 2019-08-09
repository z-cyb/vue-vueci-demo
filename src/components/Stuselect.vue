<template>
    <div id="app">
        <div id="nav">
            <router-link to="/Stuappend">添加</router-link> |
            <router-link to="/Stuselect">查询</router-link> |
            <router-link to="/Stumodifier">修改</router-link> |
            <router-link to="/Studelete">删除</router-link> |
        </div>
        <router-view/>
        <div>
            <template>
                <el-table
                        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%">
                    <el-table-column
                            label="Date"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            label="Name"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                                    v-model="search"
                                    size="mini"
                                    placeholder="输入关键字搜索"/>
                        </template>
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stuselect"
    }
</script>

<style scoped>

</style>