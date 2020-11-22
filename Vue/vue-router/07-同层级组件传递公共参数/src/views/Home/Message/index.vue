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
