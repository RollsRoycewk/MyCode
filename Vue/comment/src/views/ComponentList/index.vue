<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none" v-show="!comments.length">
      暂无评论，点击左侧添加评论！！！
    </h2>
    <ul class="list-group">
      <ComponentDel
        v-for="item in comments"
        :key="item.id"
        :item="item"
        :del="del"
      />
    </ul>
  </div>
</template>

<script>
import ComponentDel from "../ComponentDel/index.vue";

export default {
  name: "ComponentList",
  components: {
    ComponentDel,
  },
  props: {
    comments: Array,
    del: Function,
  },
};
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>
