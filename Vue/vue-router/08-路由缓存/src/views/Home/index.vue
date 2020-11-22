<template>
  <div>
    <h1>Home</h1>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/message">message</router-link>
      </li>
      <li>
        <router-link to="/home/news">news</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 组件名字,要缓存什么就传什么名字
  name: 'Home',
  mounted() {
    console.log('home mounted');
  },
  beforeDestroy() {
    console.log('home beforeDestroy');
  },
  // 已激活,在显示
  activated() {
    console.log('About activated ');
  },
  // 未激活
  deactivated() {
    console.log('About deactivated');
  },
};
</script>
<style></style>
