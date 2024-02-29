<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h2>登入。</h2>
      </VCol>
      <VCol cols="6">
        <VForm :disabled="isSubmitting" @submit.prevent="submit">
          <VTextField
            label="帳號"
            maxlength="20"
            minlength="4"
            counter
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
          ></VTextField>
          <VTextField
            label="密碼"
            type="password"
            minlength="4"
            maxlength="20"
            counter
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
          >
          </VTextField>
          <VBtn
            type="reset"
            color="grey-lighten-3"
            class="text-color-black ml-3 float-end"
            >清除</VBtn
          >
          <VBtn type="submit" color="primary" class="float-end">登入</VBtn>
        </VForm>
      </VCol>
    </VRow>
  </VContainer>
  <!-- <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h6">Google 登入</v-card-title>
          <v-card-text>
            <v-btn @click="loginWithGoogle" color="red" dark
              >使用 Google 帳號登入</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { useSnackbar } from "vuetify-use-dialog";
import { useApi } from "@/composables/axios";
import { useUserStore } from "@/store/user";

const { api } = useApi();

const router = useRouter();
const createSnackbar = useSnackbar();

const user = useUserStore();

const schema = yup.object({
  account: yup
    .string()
    .required("帳號必填")
    .min(4, "帳號長度不足 4 碼")
    .max(20, "帳號最多 20 碼"),

  password: yup
    .string()
    .required("密碼必填")
    .min(4, "密碼長度不足 4 碼")
    .max(20, "密碼最多 20 碼"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const account = useField("account");

const password = useField("password");

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post("/users/login", {
      account: values.account,
      password: values.password,
    });
    user.login(data.result);
    createSnackbar({
      text: "登入成功",
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: "primary",
        location: "bottom",
      },
    });
    router.push("/");
  } catch (error) {
    console.log("AxiosError:", error);

    if (error.response) {
      // 请求已发出，服务器返回状态码不在 2xx 范围内
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
      console.log("Response headers:", error.response.headers);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.log("Request:", error.request);
    } else {
      // 设置请求时触发错误
      console.log("Error message:", error.message);
    }
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

const loginWithGoogle = () => {
  window.location.href = "http://localhost:4000/auth/google";
};
</script>

<style lang="scss" scoped>
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
}

:deep(.v-field__outline) {
  position: static;
}
</style>
