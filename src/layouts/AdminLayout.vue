<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="toggleRail"
    >
      <v-list-item :prepend-avatar="prependAvatar" :title="user.account" nav>
        <template v-slot:append>
          <v-btn variant="text" icon @click.stop="toggleRail">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :title="item.text"
          :prepend-icon="item.icon"
          :active="false"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <VMain>
    <RouterView></RouterView>
  </VMain>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { computed, ref } from "vue";

const user = useUserStore();
const drawer = ref(true);
const rail = ref(true);

const navItems = [
  { to: "/admin", text: "書籤說明", icon: "mdi-bookmark" },
  { to: "/admin/url", text: "書籤管理", icon: "mdi-bookmark-box-multiple" },
  { to: "/admin/orders", text: "用戶搜尋", icon: "mdi-face-man" },
  { to: "/", text: "回首頁", icon: "mdi-home" },
];

const toggleRail = () => {
  rail.value = !rail.value;
};

const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`;
});
</script>

<style scoped>
.template {
  background-color: var(--global-background-color);
}
:deep(.v-navigation-drawer__content) {
  background-color: #f5f5f7;
}
</style>
