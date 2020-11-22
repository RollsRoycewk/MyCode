<template>
  <div>
    <ul>
      <li>{{ showData.id }}</li>
      <li>{{ showData.brand }}</li>
      <li>{{ showData.color }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      detailData: [
        { id: 1, brand: '劳斯', color: 'green' },
        { id: 2, brand: '宾利', color: 'black' },
        { id: 3, brand: '法拉利', color: 'red' },
      ],
      showData: {},
    };
  },
  //   mounted() {
  //     console.log(this);
  //   },
  watch: {
    // 监视this原型链行的$route
    $route: {
      handler(newRouder) {
        // console.log(newRoder);  见图
        const id = +newRouder.params.id;
        this.showData = this.detailData.find((item) => item.id === id);
      },
      // 正常情况下，watch只有值发生变化的时候才会调用
      // 一上来会调用一次
      immediate: true,
    },
  },
};
</script>

<style>
</style>
