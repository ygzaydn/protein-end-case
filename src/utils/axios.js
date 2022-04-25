import axios from "axios";

const instance = axios.create({
    baseURL: "https://bootcamp.akbolat.net/",
});

export const urls = {
    login: "/auth/local",
    register: "/auth/local/register",
    userInfo: "/users/me",
    categories: "/categories",
    products: "/products",
    upload: "/upload",
};

export const register = async ({ email, password, username }) => {
    const res = await instance.post(urls.register, {
        email,
        password,
        username,
    });
    return res;
};

export default instance;
