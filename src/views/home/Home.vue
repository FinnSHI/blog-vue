<template>
  <div>
    <!-- banner -->
    <div class="home-banner" :style="cover">
      <div class="banner-container">
        <!-- 联系方式 -->
        <h1 class="blog-title animated zoomIn">
            {{ blogInfo.websiteConfig.websiteName }}
        </h1>
        <!-- 打印 -->
        <div class="blog-intro">
          {{ obj.output }} <span class="typed-cursor">|</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EasyTyper from 'easy-typer-js'

export default {
  name: "Home",
  components:{},
  created() {
    this.init();
    // this.listHomeTalks();
    this.timer = setInterval(this.runTime, 1000);
  },
  data: function() {
    return {
      tip: false,
      time: "",
      obj: {
        output: "",
        isEnd: false,
        speed: 300,
        singleBack: false,
        sleep: 0,
        type: "rollback",
        backSpeed: 40,
        sentencePause: true
      },
      articleList: [],
      // talkList: [],
      current: 1
    };
  },
  methods: {
    // 初始化
    init() {
      // this.$store.commit("isHome", true);
      // console.log(this.$store.state.isHome);
      document.title = this.blogInfo.websiteConfig.websiteName;
      // 一言Api进行打字机循环输出效果
      fetch("https://v1.hitokoto.cn?c=i&c=l")
          .then(res => {
            return res.json();
          })
          .then(({ hitokoto }) => {
            this.initTyped(hitokoto);
          });
    },
    initTyped(input, fn, hooks) {
      const obj = this.obj;
      // eslint-disable-next-line no-unused-vars
      const typed = new EasyTyper(obj, input, fn, hooks);
    },
  },
  computed: {
    blogInfo() {
      return this.$store.state.blogInfo;
    },
    // isShowSocial() {
    //   return function(social) {
    //     return this.blogInfo.websiteConfig.socialUrlList.indexOf(social) != -1;
    //   };
    // },
    cover() {
      let cover = '';
      this.$store.state.blogInfo.pageList.forEach(item => {
        if (item.pageName == "home") {
          cover = item.pageCover;
        }
      });
      return "background: url(" + cover + ") center center / cover no-repeat";
    }
  }
}
</script>

<style lang="stylus">
.typed-cursor
  opacity: 1
  animation: blink 0.7s infinite
@keyframes blink
  0%
    opacity: 1
  50%
    opacity: 0
  100%
    opacity: 1
</style>

<style scoped>
.home-banner {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 90vh;
  background-attachment: fixed;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s;
}
.banner-container {
  margin-top: 28vh;
  line-height: 1.5;
  color: #eee;
}
.blog-contact a {
  color: #fff !important;
}
.card-info-social a {
  font-size: 1.5rem;
}

@media (min-width: 760px) {
  .blog-title {
    font-size: 2.5rem;
  }
  .blog-intro {
    font-size: 1.5rem;
  }
@media (max-width: 759px) {
  .blog-title {
    font-size: 26px;
  }
  .article-cover div {
    border-radius: 8px 8px 0 0 !important;
  }
  .article-wrapper a {
    font-size: 1.25rem;
    transition: all 0.3s;
  }
}
.scroll-down i {
  font-size: 2rem;
}
.article-wrapper a:hover {
  color: #8e8cd8;
}
.article-info a {
  font-size: 95%;
  color: #858585 !important;
}
.blog-info-data a {
  text-decoration: none;
}
@keyframes scroll-down-effect {
  0% {
    top: 0;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
  50% {
    top: -16px;
    opacity: 1;
    filter: none;
  }
  100% {
    top: 0;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
}
.big i {
  color: #f00;
  animation: big 0.8s linear infinite;
}
@keyframes big {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}}
</style>