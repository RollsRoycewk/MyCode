<template>
  <div>
    <p>clicked:{{ $store.state.count }} times,count is xxx</p>
    <select v-model="num">
      <!-- 小技巧:value不写:是字符串  写value,会当js解析 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsvnc">incrementAsvnc</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(this);
  },
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    increment() {
      // 更新vuex数据 --> 页面中要调用dispatch函数
      this.$store.dispatch('increment', this.num);
    },
    decrement() {
      this.$store.dispatch('decrement', this.num);
    },
    incrementIfOdd() {
      this.$store.dispatch('incrementIfOdd', this.num);
    },
    incrementAsvnc() {
      this.$store.dispatch('incrementAsvnc', this.num);
    },
  },
};
</script>

<style>
</style>
