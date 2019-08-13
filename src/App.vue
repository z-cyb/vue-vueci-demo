<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/dome">示例</router-link>  |
      <router-link to="/weather">天气预报</router-link> |
      <router-link to="/base64">base64</router-link>  |
      <router-link to="/Json压缩">json压缩</router-link>  |
      <router-link to="/Student">学生管理</router-link>  |
      <router-link to="/预处理器">预处理器</router-link>  |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
