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
  watch: {
    $route: {
      handler(newRouder) {
        const id = +newRouder.params.id;
        this.showData = this.detailData.find((item) => item.id === id);
      },
      immediate: true,
    },
  },
  // 接收
  props: ['id', 'brand', 'engine'],
};
</script>

<style>
</style>
