<template>
  <v-app>
    <v-container fluid>
      <v-row align="start" justify="center" style="height: 100vh">
        <v-col class="text-center">
          <v-divider class="my-4"></v-divider>

          <v-card-text>
            <p class="text-h5 font-weight-bold mb-2">歡迎使用 Kmar 書籤</p>
            <p class="mb-4">
              Kmar
              書籤是一個簡單卻強大的書籤管理應用，讓你輕鬆組織、查找和訪問你的最愛網頁。
            </p>

            <p>
              <strong>為何選擇 Kmar 書籤？</strong>
            </p>
            <ul>
              <li>組織你的書籤，輕鬆找到所需的內容</li>
              <li>即時預覽網頁，省去開新分頁的麻煩</li>
              <li>快速新增、編輯和刪除書籤</li>
              <li>支援跨裝置同步，隨時隨地都能訪問</li>
            </ul>

            <v-divider></v-divider>

            <p>
              <strong>如何開始使用？</strong>
            </p>
            <ol>
              <li>點擊下方的「開始使用」按鈕</li>
              <li>登入你的帳號或註冊一個新帳號</li>
              <li>開始新增並組織你的第一個書籤</li>
            </ol>

            <v-divider></v-divider>

            <p>
              <strong>應用特點：</strong>
            </p>
            <ul>
              <li>
                <span class="accent-text">簡潔界面：</span
                >清爽的介面設計，讓你專注於內容
              </li>
              <li>
                <span class="accent-text">即時預覽：</span
                >不需開新分頁，即可預覽網頁內容
              </li>
              <li>
                <span class="accent-text">同步功能：</span
                >支援雲端同步，保持跨裝置一致性
              </li>
              <li>
                <span class="accent-text">快速操作：</span
                >輕鬆新增、編輯和刪除書籤
              </li>
            </ul>
          </v-card-text>
          <v-divider></v-divider>
          <v-btn color="primary" @click="exploreApp" class="mt-5"
            >開始使用</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    exploreApp() {
      // 導向到應用的首頁或相應頁面
      this.$router.push("admin/url"); // 假設使用 Vue Router
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background-color: #f5f5f7; /* 輕淺色系背景色 */
}

.v-img {
  border-radius: 12px;
  overflow: hidden;
}

.v-divider {
  background-color: #bdbdbd; /* 中灰色 */
}

.v-card-text {
  color: #263238; /* 深色系文字 */
}

.v-btn {
  color: #ffffff;
}

.accent-text {
  color: #4caf50; /* 強調色 - 綠色 */
  font-weight: bold;
}
.v-card-text ul {
  list-style: none; /* 將 ul 下的所有 li 的 list-style 設為 none */
  padding: 0; /* 清除 ul 的內部 padding */
  margin: 0; /* 清除 ul 的外部 margin */
}
.v-card-text ol {
  list-style: none; /* 將 ul 下的所有 li 的 list-style 設為 none */
  padding: 0; /* 清除 ul 的內部 padding */
  margin: 0; /* 清除 ul 的外部 margin */
}

.v-card-text li {
  margin-bottom: 8px; /* 如果需要間隔，可以添加 margin-bottom */
}
</style>
