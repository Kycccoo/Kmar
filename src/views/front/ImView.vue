<template>
  <v-container>
    <!-- 關於我們部分 -->
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="headline">關於我們</v-card-title>
          <v-card-text>
            歡迎來到我們的網站！我們是一個致力於提供優質服務的團隊，始終努力為您提供最好的使用體驗。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 使命與願景部分 -->
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="headline">我們的使命與願景</v-card-title>
          <v-card-text>
            <strong>我們的使命：</strong>
            我們致力於提供一個優質的書籤管理平台，讓每個使用者都能方便快捷地整理和存取他們的書籤，提升網頁瀏覽的便利性。
          </v-card-text>
          <v-card-text>
            <strong>我們的願景：</strong>
            我們期許成為全球最受歡迎的書籤管理工具，為全人類提供一個直觀、高效且個性化的瀏覽體驗，讓每個使用者都能更輕鬆地管理他們的線上內容，讓網路資訊的管理變得更加智慧與便利。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 聯絡我們部分 -->
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="headline">聯絡我們</v-card-title>
          <v-card-text>
            如果您有任何問題、建議或意見，請隨時與我們聯繫。您可以通過電子郵件或以下方式聯絡我們：
          </v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  ><a href="mailto:y07565656@gmail.com"
                    >y07565656@gmail.com</a
                  ></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <!-- 添加其他聯絡方式，如社交媒體連結等 -->
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- 意見回饋部分 -->
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="headline">意見回饋</v-card-title>
          <v-card-text>
            我們非常重視您的意見，請告訴我們您的想法，以便我們能夠不斷改進。
          </v-card-text>
          <v-form>
            <v-textarea label="您的意見" v-model="feedback"></v-textarea>
            <v-btn @click="submitFeedback">提交意見</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      feedback: "",
    };
  },
  methods: {
    submitFeedback() {
      // 在這裡處理提交意見的邏輯
      console.log("提交意見:", this.feedback);
    },
  },
};
</script>
