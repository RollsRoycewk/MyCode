<template>
  <div class="row">
    <h1 v-if="isFirstView">请输入用户名进行查找</h1>
    <h1 v-else-if="isLoding">Loding..........</h1>
    <div v-else class="card" v-for="item in gitData" :key="item.id">
      <a :href="item.url" target="_blank">
        <img :src="item.img" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ComponentList',
  data() {
    return {
      isFirstView: true,
      isLoding: true,
      gitData: [],
    };
  },
  mounted() {
    this.$bus.$on('serachData', (key) => {
      // 当这个事件去触发的时候显示Loding
      this.isFirstView = false;
      this.isLoding = true;
      axios
        .get(`https://api.github.com/search/users?q=${key}`)
        .then((res) => {
          // 获取到请求以后,关闭loding,显示数据
          this.isLoding = false;
          // 只要一部分的数据,但是数据长度又不能变 用map,节省资源
          this.gitData = res.data.items.map((val) => ({
            login: val.login,
            id: val.id,
            img: val.avatar_url,
            url: val.html_url,
          }));
        })
        .catch((error) => {
          // 即使是错误,请求也发送了,所以loding关闭
          this.isLoding = false;
          console.log(error);
          alert('网络错误,请联系管理员');
        });
    });
  },
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
