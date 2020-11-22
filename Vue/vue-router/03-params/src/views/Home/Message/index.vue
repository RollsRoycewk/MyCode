<template>
  <div>
    <h2>Message</h2>
    <ul>
      <li v-for="item in messageData" :key="item.id">
        <!-- to后面必须跟字符串,而:绑定以后字符串才会被当做js去解析 -->
        <router-link :to="`/home/message/detail/${item.id}`">{{
          item.content
        }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      // 定义一个假数据
      messageData: [],
    };
  },
  mounted() {
    // 模拟请求数据
    setTimeout(() => {
      this.messageData = [
        { id: 1, content: 'message01' },
        { id: 2, content: 'message02' },
        { id: 3, content: 'message03' },
      ];
    }, 1000);
  },
};
</script>

<style>
</style>
