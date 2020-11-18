<template>
  <ul class="todo-main">
    <Item
      v-for="item in commentData"
      :key="item.id"
      :item="item"
      :delComments="delComments"
      :reviseOneState="reviseOneState"
    />
  </ul>
</template>

<script>
import Item from '../ComponentItem/index.vue';

export default {
  name: 'Main',
  components: {
    Item,
  },
  props: {
    commentData: Array,
    delComments: Function,
    reviseOneState: Function,
  },
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
