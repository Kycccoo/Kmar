import axios from "axios";
import { useUserStore } from "@/store/user";

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API,
});

apiAuth.interceptors.request.use((config) => {
  const user = useUserStore();
  config.headers.Authorization = "Bearer " + user.token;
  return config;
});

apiAuth.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response) {
      if (
        err.response.data.message === "JWT過期" &&
        err.config.url !== "/users/extend"
      ) {
        const user = useUserStore();
        return apiAuth
          .patch("/users/extend")
          .then(({ data }) => {
            user.token = data.result;
            err.config.headers.Authorization = "Bearer " + user.token;
            return axios(err.config);
          })
          .catch(() => {
            user.logout();
            return Promise.reject(err);
          });
      }
    }
    return Promise.reject(err);
  }
);

export const useApi = () => {
  return { api, apiAuth };
};

export const getOtherUserBookmarks = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error in getOtherUserBookmarks:", error);
    throw new Error("Failed to fetch other user's bookmarks");
  }
};

export const getTitleForUrl = async (url) => {
  try {
    const response = await api.get(`/api/getTitle?url=${url}`);
    return response.data.title;
  } catch (error) {
    console.error("Error in getTitleForUrl:", error);
    throw new Error("Failed to fetch title for URL");
  }
};
