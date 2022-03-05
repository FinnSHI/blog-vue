<template>
  <div>
    <!-- banner -->
    <div class="home-banner" :style="cover">
      <div class="banner-container">
        <!-- 联系方式 -->
        <h1 class="blog-title animated zoomIn">
          {{ blogInfo.websiteConfig.websiteName }}
        </h1>
        <!-- 一言 -->
        <div class="blog-intro">
          {{ obj.output }} <span class="typed-cursor">|</span>
        </div>
      <!-- 向下滚动 -->
      <div class="scroll-down" @click="scrollDown">
        <v-icon color="#fff" class="scroll-down-effects">
          mdi-chevron-down
        </v-icon>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

}
</script>

<style scoped>
.home-banner {
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  height: 100vh;
  background-attachment: fixed;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s;
}
.banner-container {
  margin-top: 43vh;
  line-height: 1.5;
  color: #eee;
}
.blog-contact a {
  color: #fff !important;
}
</style>