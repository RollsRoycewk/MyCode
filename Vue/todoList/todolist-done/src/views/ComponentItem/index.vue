<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <!-- <input type="checkbox" :checked="item.isChecked" /> -->
      <!-- <input type="checkbox" v-model="item.isChecked" /> -->
      <input type="checkbox" v-model="isComputed" />
      <span>{{ item.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleDel">
      Delete
    </button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  name: 'Item',
  props: {
    item: Object,
    delComments: Function,
    reviseOneState: Function,
  },
  methods: {
    handleDel() {
      if (window.confirm(`你确定要删除${this.item.content}吗?`)) {
        this.delComments(this.item.id);
      }
    },
  },
  computed: {
    // 目的:props数据应该是只读不能直接修改
    isComputed: {
      get() {
        return this.item.isChecked;
      },
      set() {
        this.reviseOneState(this.item.id);
      },
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
