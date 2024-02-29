<template>
  <VContainer>
    <VRow class="mb-3 d-flex align-end">
      <VCol cols="12" md="8" v-if="urls.length > 0" :value="urls[0]._id">
        <h3 class="text-left mt-2 ml-3">書籤管理 ID：{{ urls[0].user }}</h3>
      </VCol>
      <VCol cols="12" md="4" class="d-flex flex-row-reverse mt-2 pr-2">
        <VBtn
          color="primary"
          class="px-3 mr-5 mt-1 p-2"
          @click="openDialog('', '', '')"
          >新增書籤 ＋</VBtn
        >
        <VBtn class="px-3 mt-1 mr-2" @click="openBooklog" color="green">
          新增分類 ＋
        </VBtn>
      </VCol>
    </VRow>
    <VRow class="mt-0 d-flex">
      <VCol cols="12" class="mb-1">
        <v-tabs v-model="tab" bg-color="#d2d2d7">
          <v-tab v-for="url of urls" :key="url._id" :value="url._id">
            {{ url.title }}
            <VBtn @click="deleteCategory(url._id)" class="custom-btn">x</VBtn>
          </v-tab>
        </v-tabs>
        <VCol cols="12">
          <v-window v-model="tab">
            <v-window-item v-for="url of urls" :key="url._id" :value="url._id">
              <!-- 使用 v-row 和 v-col 將每兩個元素放在同一行 -->
              <VRow class="d-flex">
                <VCol
                  v-for="(u, index) of url.urls"
                  :key="index"
                  cols="12"
                  md="6"
                >
                  <div>
                    <VRow justify="space-evenly">
                      <VCol cols="12" md="8">
                        <VBtn
                          :href="u.url"
                          target="_blank"
                          class="elevation-1 justify-start pl-2 my-1 custom-width"
                        >
                          <v-img
                            v-if="u.url"
                            :src="`https://www.google.com/s2/favicons?domain=${u.url}`"
                            alt="Favicon"
                            :class="{ 'custom-image-class': true }"
                          ></v-img>
                          <!-- {{ getTitleForUrl(u.url) }} -->
                          {{ u.title }} || {{ u.description }}
                        </VBtn>
                      </VCol>
                      <VCol cols="3" md="1">
                        <VBtn
                          class="elevation-1 my-1"
                          @click="openDialog(u, url.title, url._id)"
                          prepend-icon="mdi-book-edit"
                        >
                        </VBtn>
                      </VCol>
                      <VCol cols="3" md="1">
                        <VBtn
                          class="elevation-1 my-1"
                          @click="deleteBookmark(u._id, url._id)"
                          prepend-icon="mdi-delete"
                        ></VBtn>
                      </VCol>
                      <VCol cols="3" md="1">
                        <VBtn
                          class="elevation-1 my-1"
                          @click="moveToTop(u._id, url._id)"
                          prepend-icon="mdi-star-check"
                        ></VBtn>
                      </VCol>
                      <VCol cols="3" md="1">
                        <VBtn
                          class="elevation-1 my-1"
                          @click="toggleButtonColor(u._id, url._id)"
                          :color="buttonStates[u._id] ? 'yellow' : '#6e6e73'"
                          prepend-icon="mdi-post-lamp"
                        >
                        </VBtn>
                      </VCol>
                    </VRow>
                  </div>
                </VCol>
              </VRow>
            </v-window-item>
          </v-window>
        </VCol>
      </VCol>
    </VRow>
  </VContainer>
  <VDialog v-model="dialog" persistent width="800px">
    <VForm :disabled="form2.isSubmitting.value" @submit.prevent="submit2">
      <VCard>
        <VCardTitle>{{ dialogId === "" ? "新增書籤" : "編輯書籤" }}</VCardTitle>
        <VCardText>
          <VRow>
            <VCol cols="12" md="2">
              <VTextField
                label="網頁名稱"
                v-model="form2Title.value.value"
                :error-messages="form2Title.errorMessage.value"
                dense
                outlined
              >
              </VTextField>
            </VCol>
            <VCol cols="12" md="2">
              <VSelect
                v-if="dialogId === ''"
                label="分類"
                :items="categories"
                v-model="form2Category.value.value"
                :error-messages="form2Category.errorMessage.value"
                dense
                outlined
              >
              </VSelect>
            </VCol>
            <VCol cols="12" md="3">
              <VTextField
                label="說明"
                v-model="form2Description.value.value"
                :error-messages="form2Description.errorMessage.value"
                dense
                outlined
              ></VTextField>
            </VCol>
            <VCol cols="12" md="5">
              <VTextField
                label="url"
                v-model="form2Url.value.value"
                :error-messages="form2Url.errorMessage.value"
                dense
                outlined
              >
              </VTextField>
            </VCol>
          </VRow>
        </VCardText>
        <VCardActions>
          <VSpacer></VSpacer>
          <VBtn
            color="gray"
            :disabled="form2.isSubmitting.value"
            @click="closeDialog"
            >取消</VBtn
          >
          <VBtn
            color="primary"
            type="submit"
            :loading="form2.isSubmitting.value"
            >送出</VBtn
          >
        </VCardActions>
      </VCard>
    </VForm>
  </VDialog>
  <VDialog v-model="booklog" persistent width="800px">
    <VForm :disabled="form1.isSubmitting.value" @submit.prevent="submit">
      <VCard>
        <VCardTitle>{{
          booklogId === "" ? "新增分類" : "增加分類"
        }}</VCardTitle>
        <VCardText>
          <VRow>
            <VCol cols="12">
              <VTextField
                label="新增分類・"
                v-model="form1Title.value.value"
                :error-messages="form1Title.errorMessage.value"
                dense
                outlined
              >
              </VTextField>
            </VCol>
          </VRow>
        </VCardText>
        <VCardActions>
          <VSpacer></VSpacer>
          <VBtn
            color="gray"
            :disabled="form1.isSubmitting.value"
            @click="closeBooklog"
            >取消</VBtn
          >
          <VBtn
            color="primary"
            type="submit2"
            :loading="form1.isSubmitting.value"
            @click="closeBooklog"
            >送出</VBtn
          >
        </VCardActions>
      </VCard>
    </VForm>
  </VDialog>
</template>

<style scoped>
/* :deep(.v-col) {
  margin-bottom: 0;
} */
* {
  margin: 0;
  padding: 0;
  color: #6e6e73;
}
body {
  background-color: #f5f5f7;
}

:deep(.v-field__input:focus, .v-field__input:active) {
  background-color: white;
  border: 1.5px solid #1976d2;
  border-radius: 12px;
}
:deep(
    .v-field,
    .v-field--center-affix,
    .v-field--variant-filled,
    .v-theme--light,
    .v-locale--is-ltr
  ) {
  border-radius: 12px;
  border: 0.5px solid #d2d2d7;
  margin-right: 15px;
}

:deep(.v-field__outline) {
  position: static;
}
:deep(.v-btn__prepend) {
  margin: 0;
}

:deep(.v-btn--size-default) {
  text-align: center;
  min-width: 40px;
}

.custom-btn {
  min-width: 16px;
  color: #565656;
  height: 16px;
  margin-left: 10px;
  /* border-radius: 16px; */
  font-size: 12px;
}
.custom-image-class {
  width: 20px; /* 自訂義寬度 */
  height: 20px; /* 自訂義高度 */
  margin-right: 10px;
}
.custom-width {
  width: 95%;
  margin-left: 2%;
}
</style>

<script setup>
import { onMounted, ref, computed } from "vue";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";
import { useRtl } from "vuetify/lib/framework.mjs";
import axios from "axios";

const { apiAuth } = useApi();
const createSnackbar = useSnackbar();

const urls = ref([]);
const tab = ref("");

// const fileAgent = ref(null);

const dialog = ref(false);
const dialogId = ref("");
const dialogBookId = ref("");
const booklog = ref(false);
const booklogId = ref("");

const buttonStates = ref({});
const moveToTopStates = ref({});
const { emit } = defineEmits();

const toggleButtonColor = async (bookmarkId, categoryId) => {
  console.log(bookmarkId, categoryId);
  try {
    if (!categoryId) {
      console.error("categoryId is undefined");
      return;
    }

    const response = await apiAuth.patch(
      `/url/${categoryId}/button/${bookmarkId}`,
      { newButtonState: !buttonStates.value[bookmarkId] }
    );

    if (response.status === 200) {
      // 直接切换按钮状态
      buttonStates.value[bookmarkId] = !buttonStates.value[bookmarkId];

      // 将更新后的状态保存在本地存储中，这样在重新加载页面时可以从本地存储中获取
      localStorage.setItem("buttonStates", JSON.stringify(buttonStates.value));
    } else {
      console.error("按鈕狀態更改失敗");
    }
  } catch (error) {
    console.error("發生錯誤", error.message);
  }
};

const savedButtonStates = localStorage.getItem("buttonStates");
if (savedButtonStates) {
  buttonStates.value = JSON.parse(savedButtonStates);
}

const openDialog = (selectedBookmark, categoryName, bookid) => {
  console.log(form1Title.value.value);
  console.log(selectedBookmark);
  console.log(dialogId);
  console.log(dialog);
  if (selectedBookmark) {
    dialogId.value = selectedBookmark._id;
    dialogBookId.value = bookid;
    //   category.value.value = form1Title.value.value;
    form2Title.value.value = selectedBookmark.title;
    form2Category.value.value = categoryName;
    form2Description.value.value = selectedBookmark.description;
    form2Url.value.value = selectedBookmark.url;
    // form2Category.value.value = selectedBookmark.category;
  } else {
    dialogId.value = "";
    dialogBookId.value = "";
    form2.resetForm();
  }
  dialog.value = true;
};

const openBooklog = () => {
  booklogId.value = "";
  booklog.value = true;
  form1.resetForm();
};

const closeDialog = () => {
  dialog.value = false;
  form1.resetForm();
  //   fileAgent.value.deleteFileRecord();
};

const closeBooklog = () => {
  booklog.value = false;
  form2.resetForm();
  //   fileAgent.value.deleteFileRecord();
};

const schema = yup.object({
  title: yup.string().required("缺少網頁名稱"),
});
const schema2 = yup.object({
  url: yup.string().required("缺少網址名稱"),
  description: yup.string(),
  category: yup.string().required("缺少商品分類"),
});

const form1 = useForm({
  validationSchema: schema,
  initialValues: {
    title: "",
  },
});
const form2 = useForm({
  validationSchema: schema2,
  initialValues: {
    url: "",
    description: "",
    category: "",
  },
});

const form1Title = useField("title", undefined, {
  form: form1,
});
const form2Url = useField("url", undefined, {
  form: form2,
});
const form2Title = useField("title", undefined, {
  form: form2,
});
const form2Description = useField("description", undefined, {
  form: form2,
});
const form2Category = useField("category", undefined, {
  form: form2,
});

const categories = computed(() => {
  return urls.value.map((url) => {
    return {
      title: url.title,
      value: url._id,
    };
  });
});

// const fileRecords = ref([]);
// const rawFileRecords = ref([]);

const submit = form1.handleSubmit(async (values) => {
  //   if (fileRecords.value[0]?.error) return;
  //   if (dialogId.value === "") return;
  try {
    console.log(values);

    if (dialogId.value === "") {
      await apiAuth.post("/url", { title: values.title });
    } else {
      await apiAuth.patch("/url/" + dialogId.value, {
        title: values.title,
        url: values.url, // 將原本的 values.url 改為 values.url
        description: values.description,
        category: values.category,
        icon: values.icon,
      });
    }

    createSnackbar({
      text: dialogId.value === "" ? "新增成功" : "編輯成功",
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: "green",
        location: "bottom",
      },
    });
    closeBooklog();
    get();
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
});
// 書籤
const submit2 = form2.handleSubmit(async (values) => {
  try {
    console.log(values);
    console.log(dialogId);
    console.log(dialogId.value);

    if (dialogId.value === "") {
      await apiAuth.post("/url/" + values.category + "/urls", values);
    } else {
      console.log(dialogId);
      await apiAuth.patch("/url/" + dialogBookId.value + "/" + dialogId.value, {
        title: values.title,
        url: values.url, // 將原本的 values.url 改為 values.url
        description: values.description,
        category: values.category,
      });
    }

    createSnackbar({
      text: dialogId.value === "" ? "新增成功" : "編輯成功",
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: "green",
        location: "bottom",
      },
    });
    get();
    closeDialog();
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
});

const deleteBookmark = async (bookmarkId, bookId) => {
  try {
    console.log(bookmarkId);
    console.log(bookId);
    // 使用 apiAuth.delete 方法删除书签
    await apiAuth.delete(`/url/${bookId}/${bookmarkId}`);

    // 顯示刪除成功的消息
    createSnackbar({
      text: "書籤刪除成功",
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: "green",
        location: "bottom",
      },
    });
    get();
  } catch (error) {
    console.error(error);
    // 处理错误
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

const deleteCategory = async (categoryId) => {
  try {
    // 发起删除请求
    await apiAuth.delete(`/url/${categoryId}`);

    // 删除成功后，重新获取分组数据
    await get();
  } catch (error) {
    // 处理错误
    console.error(error);
    const text = error?.response?.data?.message || "发生错误，请稍后再试";
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

const getTitleForUrl = async (url) => {
  console.log(url);
  try {
    const response = await axios.get(`/url/getTitle/${url}`);
    const title = response.data.title;
    console.log("Title from backend:", title);
    return title; // 返回 title
  } catch (error) {
    console.error("Error fetching title from backend:", error.message);
    return "Error fetching title";
  }
};

const moveToTop = async (bookmarkId, categoryId) => {
  console.log(bookmarkId, categoryId);
  try {
    if (!categoryId) {
      console.error("categoryId is undefined");
      return;
    }

    const response = await apiAuth.patch(
      `/url/${categoryId}/moveToTop/${bookmarkId}`
    );
    console.log("Response from server:", response);

    if (response.status === 200) {
      // Update local order immediately
      updateLocalOrder(bookmarkId, categoryId);

      // 刷新页面
      window.location.reload();

      // 這裡可以添加其他的客戶端邏輯，例如更新視圖等
      createSnackbar({
        text: "書籤移動到頂部成功",
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: "green",
          location: "bottom",
        },
      });
    } else {
      console.error("書籤移動到頂部失敗");
    }
  } catch (error) {
    console.error("發生錯誤", error.message);
    createSnackbar({
      text: "移動書籤失敗，請稍後再試",
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: "red",
        location: "bottom",
      },
    });
  }
};

// 更新本地端順序信息的函數
const updateLocalOrder = (bookmarkId, categoryId) => {
  console.log("Updating local order:", bookmarkId, categoryId);
  try {
    // 從本地存儲中獲取當前的順序信息（如果存在的話）
    const localOrder = JSON.parse(localStorage.getItem("localOrder")) || {};

    // 更新順序信息
    localOrder[categoryId] = localOrder[categoryId] || [];
    localOrder[categoryId].unshift(bookmarkId);

    // 將更新後的順序信息保存到本地存儲中
    localStorage.setItem("localOrder", JSON.stringify(localOrder));

    // 更新 component 中的 state，以實現即時排序
    moveToTopStates.value[bookmarkId] = true;
    localStorage.setItem(
      "moveToTopStates",
      JSON.stringify(moveToTopStates.value)
    );
  } catch (error) {
    console.error("更新本地順序信息時發生錯誤:", error.message);
  }
};

// 在頁面加載時從本地存儲中獲取狀態
const savedMoveToTopStates = localStorage.getItem("moveToTopStates");
if (savedMoveToTopStates) {
  // 這裡假設 savedMoveToTopStates 是一個 JSON 字符串
  // 如果不是，請根據實際情況進行解析
  moveToTopStates.value = JSON.parse(savedMoveToTopStates);
}

// 這個函數也需要是 async

const get = async () => {
  try {
    const { data } = await apiAuth.get("/url/me");
    urls.value = data.result;
  } catch (error) {
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

onMounted(async () => {
  await get();
  if (urls.value.length > 0) {
    tab.value = urls.value[0]._id;
  }
  const title = await getTitleForUrl(urls.value[0].urls[0].url);
  console.log("Title from backend:", title);
});
</script>
