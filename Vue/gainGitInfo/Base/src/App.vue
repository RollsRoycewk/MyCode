<template>
  <div class="container">
    <ComponentSearch />
    <ComponentList />
  </div>
</template>

<script>
import ComponentSearch from './views/ComponentSearch/index.vue';
import ComponentList from './views/CompoentList/index.vue';

export default {
  name: 'App',
  components: {
    ComponentSearch,
    ComponentList,
  },
};
</script>

<style>
</style>
