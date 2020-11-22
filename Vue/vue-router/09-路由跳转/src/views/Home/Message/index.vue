<template>
  <div>
    <h2>Message</h2>
    <ul>
      <li v-for="item in messageData" :key="item.id">
        <!-- 是个对象,有个name属性 -->
        <router-link
          :to="{
            name: 'Detail',
            params: {
              id: item.id,
            },
            query: {
              brand: 'rolls',
              engine: 6.75,
            },
          }"
          >{{ item.content }}</router-link
        >
        <!-- 增加按钮,可以回退 -->
        <button @click="push(item.id)">push</button>
        <!-- 替换,不可以回退 -->
        <button @click="replace(item.id)">replace</button>
      </li>
    </ul>
    <!-- 后退,简写 -->
    <button @click="$router.back()">goBack</button>
    <!-- 前进,简写 -->
    <button @click="$router.forward()">goForward</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageData: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.messageData = [
        { id: 1, content: 'message01' },
        { id: 2, content: 'message02' },
        { id: 3, content: 'message03' },
      ];
    }, 1000);
  },
  methods: {
    // 编程式导航
    // 添加
    push(id) {
      // console.log(this);
      this.$router.push(`/home/message/detail/${id}?brand=rolls&engine=675`);
    },
    // 替换
    replace(id) {
      this.$router.replace(`/home/message/detail/${id}?brand=rolls&engine=675`);
    },
  },
};
</script>

<style>
</style>
