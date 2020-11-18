<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addComments="addComments" />
        <Main
          :commentData="commentData"
          :delComments="delComments"
          :reviseOneState="reviseOneState"
        />
        <Foot
          :allNum="allNum"
          :doneNum="doneNum"
          :allChecked="allChecked"
          :delDoneContent="delDoneContent"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Header from './views/ComponentHeader/index.vue';
import Main from './views/ComponentMain/index.vue';
import Foot from './views/ComponentFoot/index.vue';

export default {
  name: 'App',
  // 数据
  data() {
    const commentData = JSON.parse(window.localStorage.getItem('toskData'));
    return {
      commentData,
      // commentData: [
      //   { id: 1, content: '劳斯幻影V12', isChecked: false },
      //   { id: 2, content: '宾利飞驰V8', isChecked: false },
      //   { id: 3, content: '法拉利V12', isChecked: false },
      // ],
    };
  },
  // 引入组件
  components: {
    Header,
    Main,
    Foot,
  },
  // 方法
  methods: {
    addComments(content) {
      this.commentData.unshift({
        id: Date.now(),
        isChecked: false,
        content,
      });
    },
    delComments(id) {
      this.commentData = this.commentData.filter((item) => item.id !== id);
    },
    reviseOneState(id) {
      const res = this.commentData.find((item) => item.id === id);
      res.isChecked = !res.isChecked;
    },
    allChecked(boolea) {
      /*
        error  Assignment to property of function parameter 'item'  no-param-reassign
          this.commentData.forEach((item) => {
          item.isChecked = boolea;
        }); */

      this.commentData = this.commentData.map((item) => ({
        ...item,
        isChecked: boolea,
      }));
    },
    delDoneContent() {
      this.commentData = this.commentData.filter((item) => !item.isChecked);
    },
  },
  // 计算
  computed: {
    allNum() {
      return this.commentData.length;
    },
    doneNum() {
      return this.commentData.filter((item) => item.isChecked === true).length;
    },
  },
  //  监视,设置缓存
  watch: {
    // 浅度监视：只监视一层属性,添加删除会改变,但是修改状态等内部操作不会
    // commentData() {
    //   // console.log(newData);
    //   window.localStorage.setItem('toskData', JSON.stringify(this.commentData));
    // },

    // 深度监视:会监视所有属性
    commentData: {
      handler(val) {
        // val 就是新变化的值
        window.localStorage.setItem('toskData', JSON.stringify(val));
      },
      deep: true,
    },
  },
  // 关闭浏览器，不会触发卸载等生命周期函数的
  // beforeDestroy() {
  //   window.localStorage.setItem("aaa", "bbb");
  // },
};
</script>
<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
