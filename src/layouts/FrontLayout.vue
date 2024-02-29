<template>
  <VNavigationDrawer
    class="my-text-color"
    v-model="drawer"
    temporary
    location="left"
    v-if="isMobile"
  >
    <VList nav>
      <template v-for="item in navItems" :key="item.to">
        <VListItem :to="item.to" v-if="item.show">
          <template #prepend>
            <VIcon :icon="item.icon"></VIcon>
          </template>
          <VListItemTitle>{{ item.text }}</VListItemTitle>
        </VListItem>
      </template>
      <VListItem v-if="user.isLogin" @click="logout">
        <template #prepend>
          <VIcon icon="mdi-logout"></VIcon>
        </template>
        <VListItemTitle>登出</VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
  <VAppBar color="#f5f5f7" class="box" :elevation="0">
    <VContainer class="d-flex align-center my-text-color">
      <VBtn to="/" :active="false">
        <VAppBarTitle>Kmar</VAppBarTitle>
      </VBtn>
      <VSpacer></VSpacer>
      <!-- 手機版 -->
      <template v-if="isMobile">
        <VAppBarNavIcon @click="drawer = true"> </VAppBarNavIcon>
      </template>
      <template v-else>
        <template v-for="item in navItems" :key="item.to">
          <VBtn :to="item.to" :prepend-icon="item.icon" v-if="item.show"></VBtn>
        </template>
        <VBtn prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout"
          >登出</VBtn
        >
      </template>
    </VContainer>
  </VAppBar>
  <VMain>
    <RouterView></RouterView>
  </VMain>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { ref, computed } from "vue";
import { useUserStore } from "@/store/user";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";
import { useRouter } from "vue-router";

const { apiAuth } = useApi();
const router = useRouter();
const createSnackbar = useSnackbar();
const user = useUserStore();

// 手機版判斷
const { mobile } = useDisplay();
const isMobile = computed(() => mobile.value);

// 手機版惻欄開關
const drawer = ref(false);

const navItems = computed(() => {
  return [
    {
      to: "/im",
      text: "關於我們",
      icon: "mdi-information",
      show: true,
    },
    {
      to: "/register",
      text: "註冊",
      icon: "mdi-account-plus",
      show: !user.isLogin,
    },
    { to: "/login", text: "登入", icon: "mdi-login", show: !user.isLogin },

    // {
    //   to: "/like",
    //   text: "儲存書籤",
    //   icon: "mdi-bookmark-check",
    //   show: user.isLogin,
    // },
    {
      to: "/admin",
      text: "書籤",
      icon: "mdi-bookmark-multiple",
      show: user.isLogin,
    },
  ];
});

const logout = async () => {
  try {
    await apiAuth.delete("/users/logout");
    user.logout();
    createSnackbar({
      text: "登出成功",
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: "green",
        location: "bottom",
      },
    });
    router.push("/");
  } catch (error) {
    console.log(error);
    const text = error?.response?.data?.message || "發生錯誤，請稍後再試";
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: "red",
        location: "bottom",
      },
    });
  }
};
</script>

<style scoped>
.my-text-color {
  color: #3f3f3f;
}
</style>
