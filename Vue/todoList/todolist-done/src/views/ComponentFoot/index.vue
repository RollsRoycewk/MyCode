<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isChecked" />
    </label>
    <span>
      <span>已完成{{ doneNum }}</span> / 全部{{ allNum }}
    </span>
    <button class="btn btn-danger" @click="delDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  props: {
    allNum: Number,
    doneNum: Number,
    allChecked: Function,
    delDoneContent: Function,
  },
  methods: {
    delDone() {
      if (window.confirm(`确定以要删除已经完成的任务吗?`)) {
        this.delDoneContent();
      }
    },
  },
  computed: {
    isChecked: {
      get() {
        return this.allNum === this.doneNum && this.doneNum !== 0;
      },
      set(boo) {
        // console.log(boolean);   参数boolean 结果ture或者false

        this.allChecked(boo);
      },
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
