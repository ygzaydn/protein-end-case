import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const jwt = cookies.get("jwt");

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

export const login = async ({ email, password }) => {
    const res = await instance.post(urls.login, { email, password });
    return res;
};

export const user = async () => {
    const res = await instance.get(urls.userInfo, {
        headers: {
            Authorization: "Bearer " + jwt,
        },
    });
    return res;
};

export const products = async () => {
    const res = await instance.get(urls.products);
    return res;
};

export const categories = async () => {
    const res = await instance.get(urls.categories);
    return res;
};

export default instance;
