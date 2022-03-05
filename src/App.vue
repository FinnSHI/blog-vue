<template>
  <v-app id="app">
    <!-- 导航栏 -->
    <TopMenuBar />
    <!-- 侧边栏 -->
    <SideNavBar></SideNavBar>
    <!-- 页脚 -->
    <Footer></Footer>
  </v-app>
</template>

<script>

import TopMenuBar from './components/layout/TopMenuBar.vue';
import SideNavBar from "@/components/layout/SideNavBar";
import Footer from "@/components/layout/Footer";

export default {
  name: 'App',
  created() {
    // 获取博客信息
    this.getBlogInfo();
    // // 上传访客信息
    // this.axios.post("/api/report");
  },
  components: {
    TopMenuBar,
    SideNavBar,
    Footer
  },
  methods: {
    getBlogInfo() {
      this.axios.get("/api").then(({ data }) => {
        this.$store.commit("checkBlogInfo", data.data.blogInfo);
      });
    }
  },
  computed: {
    blogInfo() {
      return this.$store.state.blogInfo;
    },
    isMobile() {
      const flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  data: () => ({
    //
  }),
};
</script>
