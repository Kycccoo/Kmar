<template>
  <div>
    <particles></particles>
  </div>
  <VContainer>
    <VRow class="d-flex justify-end text-right font">
      <VCol class="font2">
        歡迎使用 Kmar
        書籤管理！快速註冊、輕鬆登入，開始享受您的書籤之旅吧！</VCol
      >
    </VRow>
  </VContainer>
  <VContainer>
    <VRow class="d-flex justify-center align-center">
      <VCol cols="12" class="box non-clickable-text">Kmar</VCol>
    </VRow>
  </VContainer>
  <VContainer class="box3 pa-0 ma-0" fluid>
    <VRow class="d-flex justify-center align-center w-100">
      <VCol cols="12" class="box2">
        <p style="font-size: 50px">K</p>
        <VSpacer></VSpacer>
        版權所有 © Kai-wang
        <VList
          class="d-flex no-wrap justify-center list padd"
          style="background-color: transparent !important"
        >
          <a
            v-for="item in navItems"
            :key="item.to"
            :href="item.to"
            class="touch"
            target="_blank"
          >
            <v-list-item
              :prepend-icon="item.icon"
              class="pa-0 ma-0 d-flex justify-center"
            ></v-list-item>
          </a>
        </VList>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.non-clickable-text {
  pointer-events: none;
}
.particles-js-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

#particles-js {
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.box {
  font-size: 65vh;
  color: #6e6e73;
  margin-top: -100px;
  height: 90vh;
  text-align: center;
  display: inline;
  z-index: 2;
}
.font {
  font-weight: bolder;
  color: #6e6e73;
  height: 10vh;
}
.font2 {
  z-index: 2;
}
.box3 {
  width: 100vw;
}
.box2 {
  text-align: center;
  height: 30vh;
  padding-top: 5vh;
  color: #6e6e73;
  z-index: 2;
}

.padd {
  margin-left: 28px;
}

.touch,
.touch:active {
  color: #6e6e73;
  text-decoration: none;
}
</style>

<script setup>
import Particles from "/com/index.vue";

const navItems = [
  {
    to: "https://www.instagram.com/",
    text: "書籤管理",
    icon: "mdi-instagram",
  },
  {
    to: "https://www.facebook.com/?locale=zh_TW",
    text: "設定",
    icon: "mdi-facebook",
  },
  { to: "https://twitter.com/", text: "回首頁", icon: "mdi-twitter" },
];
</script>
