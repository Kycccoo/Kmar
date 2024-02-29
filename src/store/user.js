// Utilities
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import UserRole from "@/enums/UserRole";
import { useApi } from "@/composables/axios";

export const useUserStore = defineStore(
  "user",
  () => {
    const { apiAuth } = useApi();
    const token = ref("");
    const account = ref("");
    const email = ref("");
    const url = ref(0);
    const role = ref(UserRole.USER);

    const login = (data) => {
      console.log(data);
      if (data.token) {
        token.value = data.token;
      }
      account.value = data.account;
      email.value = data.email;
      url.value = data.url;
      role.value = data.role;
    };

    const isLogin = computed(() => {
      return token.value.length > 0;
    });

    const isAdmin = computed(() => {
      return role.value === UserRole.ADMIN;
    });

    const getProFile = async () => {
      if (token.value.length === 0) return;

      try {
        const { data } = await apiAuth.get("/users/me");
        login(data.result);
      } catch {
        logout();
      }
    };

    const logout = () => {
      token.value = "";
      account.value = "";
      email.value = "";
      url.value = 0;
      role.value = UserRole.USER;
    };

    return {
      token,
      account,
      email,
      url,
      role,
      login,
      logout,
      isLogin,
      isAdmin,
      getProFile,
    };
  },
  {
    persist: {
      key: "kmar",
      paths: ["token"],
    },
  }
);
