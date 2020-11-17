<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对汽车的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <ComponentAdd :addData="addData" />
      <ComponentList :comments="comments" :del="del" />
    </div>
  </div>
</template>

<script>
import ComponentAdd from "./views/ComponentAdd/index.vue";
import ComponentList from "./views/ComponentList/index.vue";

export default {
  name: "App",
  data() {
    return {
      comments: [
        { id: 1, name: "rolls", content: "奢华静谧" },
        { id: 2, name: "G63", content: "城市装逼系列" },
      ],
    };
  },
  methods: {
    addData(name, content) {
      this.comments.unshift({
        id: Date.now(),
        name,
        content,
      });
    },
    del(id) {
      this.comments = this.comments.filter((item) => item.id !== id);
    },
  },
  components: {
    ComponentAdd,
    ComponentList,
  },
};
</script>

<style>
</style>
