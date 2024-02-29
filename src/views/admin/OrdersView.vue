<template>
  <v-container>
    <!-- 输入用户 ID，点击按钮触发搜索 -->
    <v-row align="center">
      <v-col>
        <v-text-field v-model="userId" label="輸入用戶 ID"></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="searchBookmarks" color="primary">搜尋</v-btn>
      </v-col>
    </v-row>

    <v-row v-if="urls.length > 0" justify="start">
      <v-col v-for="url in urls" :key="url._id" cols="3">
        <v-row>
          <v-col>
            <h3>{{ url.title }}</h3>
          </v-col>
        </v-row>
        <v-row v-if="url.urls.length > 0" justify="center">
          <v-col v-for="bookmark in url.urls" :key="bookmark._id" cols="12">
            <VBtn :href="bookmark.url" target="_blank" width="35vh">
              {{ bookmark.title }} || {{ bookmark.description }}
            </VBtn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <p v-else>沒有找到用戶 {{ userId }} 的書籤和分類。</p>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSnackbar } from "vuetify-use-dialog";
import {
  getOtherUserBookmarks,
  getTitleForUrl,
  useApi,
} from "@/composables/axios";

const createSnackbar = useSnackbar();
const userId = ref("");
const urls = ref([]);
const loading = ref(true); // 添加 loading 狀態

const { apiAuth } = useApi();

const searchBookmarks = async () => {
  try {
    userId.value.trim(); // 移除前後空格

    const response = await apiAuth.get(`/url/getUserBookmarks/${userId.value}`);
    if (Array.isArray(response.data.bookmarks)) {
      urls.value = response.data.bookmarks;

      if (urls.value.length > 0) {
        for (const user of urls.value) {
          const categories = user.categories || [];

          console.log(`用戶 ${user.userId} 的分類和書籤:`);

          for (const category of categories) {
            console.log(`分類名: ${category.title}`);

            if (Array.isArray(category.urls)) {
              for (const bookmark of category.urls) {
                console.log(`書籤名: ${bookmark.title}`);
                console.log(`鏈接: ${bookmark.url}`);
                console.log(`描述: ${bookmark.description}`);
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
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
  } finally {
    // 請確保在 finally 塊中設置 loading 為 false
    loading.value = false;
  }
};

onMounted(async () => {
  await searchBookmarks();
});
</script>
