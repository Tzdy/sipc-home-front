<template>
  <div id="home">
    <div class="header"></div>
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
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
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
    </div>
    <div class="service">
      <span>账号服务</span>
      <div class="operate">
        <router-link :to="{ name: 'login' }">
          <diy-button>登陆</diy-button>
        </router-link>
        <router-link :to="{ name: 'register' }">
          <diy-button>注册</diy-button>
        </router-link>
        <diy-button>找回密码</diy-button>
      </div>
    </div>
    <div class="footer">
      <div class="question">问题反馈</div>
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
      swiper: ['swiper.png', 'swiper.png', 'swiper.png'],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
    };
  },
  methods: {
    handleTouchStart() {
      this.allowScroll = false;
    },
    handleTouchEnd() {
      this.allowScroll = true;
    },
    handleScroll() {
      const boxHeight = parseInt(getComputedStyle(this.$refs.box).height, 0);
      if (
        this.$refs.box.scrollTop + boxHeight + 5
        >= this.$refs.box.scrollHeight
      ) {
        this.$refs.box.scrollTop = 0;
      }
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
    }, 2000);
  },
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
#home > .header {
  height: 10vh;
  width: 100%;
  flex-shrink: 0;
}
#home > .title {
  text-align: center;
  font-size: 4vh;
  height: 9.2vh;
  color: transparent;
  text-shadow: 0 0 1px rgba(65, 114, 190, 0.9);
}
#home > .slide {
  margin-top: 2.8vh;
  width: 88vw;
  height: 27vh;
  flex-shrink: 0;
}
#home > .notice {
  box-sizing: border-box;
  width: 88vw;
  height: 19vh;
  margin-top: 6.4vh;
  flex-shrink: 0;
  border-radius: 12px;
  border: 2px solid rgb(179, 179, 179);
  padding: 2.8vw;
}
#home > .notice > .box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
#home > .notice > .box > .content {
  white-space: nowrap;
  height: 3.9vh;
  line-height: 3.9vh;
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
  top: 53.4vh;
  height: 4vh;
  line-height: 4vh;
  margin-left: 18px;
  position: absolute;
  padding: 0 8px;
  background: white;
}
#home > .service {
  width: 88vw;
  height: 13.4vh;
  margin-top: 4.4vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}
#home > .service > .operate {
  margin-top: 2.8vh;
  display: flex;
  justify-content: space-between;
}
#home > .footer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
#home > .footer a {
    color: white;
}
#home > .footer a:visited {
  color: white;
}
#home > .footer > .question {
  margin-right: 5.7vw;
}
</style>
