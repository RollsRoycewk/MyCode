<template>
  <div>
    <h2>Message</h2>
    <ul>
      <li v-for="item in messageData" :key="item.id">
        <!-- 将原先的params参数和query参数以props方式传递给组件 -->
        <router-link
          :to="`/home/message/detail/${item.id}?brand='rolls'&engine='6.75'`"
          >{{ item.content }}</router-link
        >
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
};
</script>

<style>
</style>
