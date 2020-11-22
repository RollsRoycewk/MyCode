<template>
  <div class="container">
    <h1>Router Page</h1>
    <div class="row">
      <div class="col-md-4">
        <ul class="nav nav-pills nav-stacked">
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-8">
        <!-- app组件,要缓存哪个路由,就要在外面包一个keep-alive -->
        <keep-alive exclude="">
          <router-view rolls="royce"></router-view>
        </keep-alive>
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
