<template>
  <div class="container">
    <h1>Router Page</h1>
    <div class="row">
      <div class="col-md-4">
        <ul class="nav nav-pills nav-stacked">
          <!-- 给相同层级的路由组件一起传递参数 -->
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-8">
        <!-- 这样去传参,只要显示哪个组件,就给哪个组件传参 -->
        <router-view rolls="royce"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
