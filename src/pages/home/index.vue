<template>
  <div id="home">
    <div class="header">
      <img height="100%" src="logo.png" alt="" />
    </div>
    <div class="title">
      <p>欢迎来到SIPC</p>
      <p>产品门户</p>
    </div>
    <div class="slide">
      <swiper
        class="swiper"
        style="height: 100%; width: 100%"
        :options="swiperOption"
      >
        <swiper-slide v-for="(item, index) in swiper" :key="index"
          ><img width="100%" height="100%" :src="item" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="notice">
      <div
        @touchstart="handleTouchStart($event)"
        @touchend="handleTouchEnd($event)"
        @touchmove.prevent="handleTouchMove($event)"
        @scroll="handleScroll"
        ref="box"
        class="box"
      >
        <div class="content" v-for="(notice, index) in notices" :key="index">
          <router-link :to="notice.url">
            {{ notice.text }}
          </router-link>
        </div>
      </div>
      <div v-show="scroll.visible" ref="scroll-bar" class="scroll-bar">
        <div
          @touchstart.prevent="handleDotTouchStart($event)"
          @touchmove.prevent="handleDotTouchMove($event)"
          @touchend.prevent="handleDotTouchEnd"
          ref="dot"
          class="dot"
        ></div>
      </div>
    </div>
    <div class="service">
      <div class="operate">
        <router-link :to="{ name: 'login' }">
          <button class="button">登陆</button>
        </router-link>
        <router-link :to="{ name: 'register' }">
          <button class="button">注册</button>
        </router-link>
      </div>
      <div class="find-back">
        <router-link :to="{ name: 'forget-password' }"
          >忘记密码了点这里！</router-link
        >
      </div>
    </div>
    <div class="footer">
      <img src="notice.png" alt="" />
      <router-link class="question" to="#">问题反馈</router-link>
    </div>
  </div>
</template>

<script>
import timer from '../../utils/timer';

export default {
  name: 'Home',
  data() {
    return {
      allowScroll: true,
      notices: [
        {
          text: '本次科技立项已经于2020年3月完成',
          url: '#',
        },
        {
          text: '本次科技立项已经于2020年3月完成',
          url: '#',
        },
        {
          text: '本次科技立项已经于2020年3月完成',
          url: '#',
        },
        {
          text: '本次科技立项已经于2020年3月完成',
          url: '#',
        },
        {
          text: '本次科技立项已经于2020年3月完成',
          url: '#',
        },
        {
          text: '本次科技立项已经于2020年3月完成',
          url: '#',
        },
        {
          text: '本次科技立项已经于2020年3月完成',
          url: '#',
        },
        {
          text: '本次科技立项已经于2020年3月完成',
          url: '#',
        },
      ],
      swiper: [
        'https://www.tsdy.club/git/anqi00000001/static/raw/master/WeStudy/images/index/advertising/2.png',
        'https://www.tsdy.club/git/anqi00000001/static/raw/master/WeStudy/images/index/advertising/2.png',
        'https://www.tsdy.club/git/anqi00000001/static/raw/master/WeStudy/images/index/advertising/2.png',
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
      scroll: {
        dy: undefined,
        y: 0,
        allowScrollHeight: 0,
        visible: true,
      },
      allowTouch: false,
      contentScroll: {
        dy: undefined,
        y: 0,
      },
      timer: undefined,
    };
  },
  methods: {
    handleTouchStart(e) {
      this.allowScroll = false;
      this.scroll.visible = true;
      this.contentScroll.dy = e.touches[0].clientY + this.scroll.y;
      this.$refs.box.style.scrollBehavior = 'auto';
    },
    handleTouchMove(e) {
      this.diplayScroll();
      const boxHeight = parseInt(getComputedStyle(this.$refs.box).height, 0);
      this.scroll.y = -(e.touches[0].clientY - this.contentScroll.dy);
      if (this.scroll.y >= this.scroll.allowScrollHeight) {
        this.scroll.y = this.scroll.allowScrollHeight;
      } else if (this.scroll.y <= 0) {
        this.scroll.y = 0;
      }
      this.$refs.box.scrollTop = (this.scroll.y * (this.$refs.box.scrollHeight - boxHeight))
        / this.scroll.allowScrollHeight;
    },
    handleTouchEnd() {
      this.allowScroll = true;
      this.$refs.box.style.scrollBehavior = 'smooth';
    },
    handleScroll() {
      const boxHeight = parseInt(getComputedStyle(this.$refs.box).height, 0);
      // smooth下scrollTop不能瞬间增加
      this.scroll.y = (this.$refs.box.scrollTop * this.scroll.allowScrollHeight)
        / (this.$refs.box.scrollHeight - boxHeight);

      if (
        Math.ceil(this.$refs.box.scrollTop) + boxHeight + 1
        >= this.$refs.box.scrollHeight
      ) {
        this.$refs.box.style.scrollBehavior = 'auto';
        this.$refs.box.scrollTop = 0;
        this.scroll.dy = 0;
        this.scroll.y = 0;
        this.$refs.dot.style.transform = 'translateY(0)';
        this.allowTouch = false;
        this.$refs.box.style.scrollBehavior = 'smooth';
      }

      this.$refs.dot.style.transform = `translateY(${this.scroll.y}px)`;
    },
    handleDotTouchStart(e) {
      this.$refs.box.style.scrollBehavior = 'auto';
      this.allowScroll = false;
      this.scroll.dy = e.touches[0].clientY - this.scroll.y;
      this.allowTouch = true;
    },
    handleDotTouchMove(e) {
      this.diplayScroll();
      if (!this.allowTouch) {
        return;
      }
      const boxHeight = parseInt(getComputedStyle(this.$refs.box).height, 0);
      this.scroll.y = e.touches[0].clientY - this.scroll.dy;
      if (this.scroll.y >= this.scroll.allowScrollHeight) {
        this.scroll.y = this.scroll.allowScrollHeight;
      } else if (this.scroll.y <= 0) {
        this.scroll.y = 0;
      }
      this.$refs.box.scrollTop = (this.scroll.y * (this.$refs.box.scrollHeight - boxHeight))
        / this.scroll.allowScrollHeight;
      console.log(this.$refs.box.scrollTop);
      e.target.style.transform = `translateY(${this.scroll.y}px)`;
    },
    handleDotTouchEnd() {
      this.allowScroll = true;
      this.$refs.box.style.scrollBehavior = 'smooth';
    },
    diplayScroll() {
      this.scroll.visible = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.scroll.visible = false;
      }, 2000);
    },
  },
  mounted() {
    const contentHeight = parseFloat(
      getComputedStyle(this.$refs.box.children[0]).height,
      0,
    );
    timer(() => {
      if (this.allowScroll) {
        this.$refs.box.scrollTop += contentHeight;
      }
    }, 4000);

    const { box } = this.$refs;
    const boxHeight = parseInt(getComputedStyle(this.$refs.box).height, 0);
    const scroll = this.$refs['scroll-bar'];
    const scrollHeight = parseInt(getComputedStyle(scroll).height, 0);
    const { dot } = this.$refs;
    const dotHeight = (boxHeight * scrollHeight) / box.scrollHeight;
    dot.style.height = `${dotHeight}px`;
    this.scroll.allowScrollHeight = scrollHeight - dotHeight;
    this.scroll.visible = false;
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  height: 0.34rem;
  background: rgb(59, 109, 188);
  border-radius: 1vh;
  color: white;
  font-size: 16px;
  line-height: 0.34rem;
  width: 21.4vw;
  text-align: center;
  border: none;
}
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
#home > .header {
  height: 0.5rem;
  width: 100%;
  flex-shrink: 0;
}
#home > .title {
  text-align: center;
  font-size: 0.32rem;
  height: 0.92rem;
  color: transparent;
  text-shadow: 0 0 1px rgba(65, 114, 190, 0.99);
}
#home > .slide {
  margin-top: 0.2rem;
  width: 88vw;
  height: 2rem;
  flex-shrink: 0;
}
#home > .notice {
  box-sizing: border-box;
  width: 88vw;
  height: 1.6rem;
  margin-top: 0.4rem;
  flex-shrink: 0;
  border-radius: 12px;
  border: 2px solid rgb(179, 179, 179);
  padding: 2.8vw;
  font-size: 13px;
  display: flex;
  flex-direction: row;
}
#home > .notice > .box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
#home > .notice > .box > .content {
  white-space: nowrap;
  height: 0.3rem;
  line-height: 0.3rem;
  border-bottom: 1px solid rgb(179, 179, 179);
  color: black;
}
#home > .notice > .box > .content > a {
  color: black;
}
#home > .notice > .box > .content > a:visited {
  color: black;
}
#home > .notice::before {
  content: "公告";
  display: inline-block;
  height: 0.3rem;
  position: absolute;
  margin-top: -0.3rem;
  line-height: 0.3rem;
  margin-left: 18px;
  position: absolute;
  padding: 0 8px;
  background: white;
}
#home > .notice > .scroll-bar {
  width: 16px;
  height: 100%;
}
#home > .notice .scroll-bar > .dot {
  width: 100%;
  height: 10px;
  background: gainsboro;
}
#home > .service {
  width: 54.43vw;
  margin-top: 0.4rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}
#home > .service > .operate {
  display: flex;
  justify-content: space-between;
}
#home > .service > .find-back {
  margin-top: 0.22rem;
  display: flex;
  justify-content: center;
}
#home > .service > .find-back a {
  color: rgb(98, 181, 222);
  font-size: 0.145rem;
  font-weight: 500;
}
#home > .service > .find-back a:visited {
  color: rgb(98, 181, 222);
}
#home > .footer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
#home > .footer a {
  color: rgb(98, 181, 222);
}
#home > .footer a:visited {
  color: rgb(98, 181, 222);
}
#home > .footer > .question {
  margin-right: 5.7vw;
}
</style>
