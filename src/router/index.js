// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from "vue-router";
import { useUserStore } from "@/store/user";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/FrontLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/front/HomeView.vue"),
        meta: {
          title: "Kmar",
          login: false,
          admin: false,
        },
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/views/front/RegisterView.vue"),
        meta: {
          title: "Kmar | 註冊",
          login: false,
          admin: false,
        },
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/front/LoginView.vue"),
        meta: {
          title: "Kmar | 登入",
          login: false,
          admin: false,
        },
      },
      {
        path: "im",
        name: "Im",
        component: () => import("@/views/front/ImView.vue"),
        meta: {
          title: "Kmar | 關於我們",
          login: false,
          admin: false,
        },
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("@/layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "adminHome",
        component: () => import("@/views/admin/HomeView.vue"),
        meta: {
          title: "Kmar | 書籤說明",
          login: true,
          admin: false,
        },
      },
      {
        path: "url",
        name: "AdminUrl",
        component: () => import("@/views/admin/UrlView.vue"),
        meta: {
          title: "Kmar | 書籤管理",
          login: true,
          admin: false,
        },
      },
      {
        path: "orders",
        name: "AdminOrders",
        component: () => import("@/views/admin/OrdersView.vue"),
        meta: {
          title: "Kmar | 用戶搜尋",
          login: true,
          admin: false,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  document.title = to.meta.title;
});

router.beforeEach(async (to, from, next) => {
  const user = useUserStore();

  if (from === START_LOCATION) {
    await user.getProFile();
  }

  if (user.isLogin && ["/register", "/login"].includes(to.path)) {
    // 如果有登入，要去註冊或登入頁，重新導向回首頁
    next("/");
  } else if (to.meta.login && !user.isLogin) {
    // 如果要去的頁面要登入，但是沒登入，重新導向回登入頁
    next("/login");
  } else if (to.meta.admin && !user.isAdmin) {
    // 如果要去的頁面要管理員，但是不是管理員，重新導向回首頁
    next("/");
  } else {
    // 不重新導向
    next();
  }
});

export default router;
