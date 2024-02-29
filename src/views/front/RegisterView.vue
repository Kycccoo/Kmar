<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h2>註冊。</h2>
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
            label="信箱"
            type="email"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
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
          <VTextField
            label="確認密碼"
            type="password"
            minlength="4"
            maxlength="20"
            counter
            v-model="passwordConfirm.value.value"
            :error-messages="passwordConfirm.errorMessage.value"
          >
          </VTextField>
          <VBtn
            type="reset"
            color="grey-lighten-3"
            class="text-color-black ml-3 float-end"
            >清除</VBtn
          >
          <VBtn type="submit" color="primary" class="float-end">註冊</VBtn>
        </VForm>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import validator from "validator";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { useSnackbar } from "vuetify-use-dialog";
import { useApi } from "@/composables/axios";

const { api } = useApi();

const router = useRouter();
const createSnackbar = useSnackbar();

const schema = yup.object({
  account: yup
    .string()
    .required("帳號必填")
    .min(4, "帳號長度不足 4 碼")
    .max(20, "帳號最多 20 碼"),
  email: yup
    .string()
    .required("信箱必填")
    .test("isEmail", "信箱格式錯誤", (value) => {
      return validator.isEmail(value);
    }),
  password: yup
    .string()
    .required("密碼必填")
    .min(4, "密碼長度不足 4 碼")
    .max(20, "密碼最多 20 碼"),
  passwordConfirm: yup
    .string()
    .required("密碼必填")
    .min(4, "密碼長度不足 4 碼")
    .max(20, "密碼最多 20 碼")
    .oneOf([yup.ref("password")], "密碼不一致"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const account = useField("account");
const email = useField("email");
const password = useField("password");
const passwordConfirm = useField("passwordConfirm");
const submit = handleSubmit(async (values) => {
  try {
    await api.post("/users", {
      account: values.account,
      email: values.email,
      password: values.password,
    });
    createSnackbar({
      text: "註冊成功",
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: "primary",
        location: "bottom",
      },
    });
    router.push("/login");
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
