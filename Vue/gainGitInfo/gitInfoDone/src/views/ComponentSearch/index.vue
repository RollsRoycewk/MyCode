<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="key"
      />
      <button @click="handleSearch(key)">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentSearch',
  data() {
    return {
      key: '',
    };
  },
  methods: {
    handleSearch(key) {
      if (!this.key) {
        alert('请输入要查询的信息');
        return;
      }
      this.$bus.$emit('serachData', key);
    },
  },
};
</script>

<style>
</style>
