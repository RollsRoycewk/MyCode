<template>
  <h1>About</h1>
</template>

<script>
export default {
  name: 'About',
  props: ['rolls'],
  mounted() {
    console.log('about mounted');
  },
  beforeDestroy() {
    console.log('about beforeDestroy');
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

<style>
</style>
