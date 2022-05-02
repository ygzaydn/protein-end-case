import axios from "axios";
import Cookies from "universal-cookie";

const instance = axios.create({
  baseURL: "https://bootcamp.akbolat.net/",
});

export const urls = {
  login: "/auth/local",
  register: "/auth/local/register",
  userProducts: "/products?users_permissions_user=",
  userOffers: "/offers?users_permissions_user=",
  userInfo: "/users/me",
  categories: "/categories",
  products: "/products",
  upload: "/upload",
  brands: "/brands",
  colors: "/colors",
  usage: "/using-statuses",
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
  const res = await instance.post(urls.login, {
    identifier: email,
    password,
  });
  return res;
};

export const user = async () => {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");
  const res = await instance.get(urls.userInfo, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
  console.log(res);
  return res;
};

export const getOffersAndProducts = async (id) => {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");
  const products = await instance.get(urls.userProducts + id.id, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
  const offers = await instance.get(urls.userOffers + id.id, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });

  return { products: products.data, offers: offers.data };
};

export const products = async () => {
  const res = await instance.get(urls.products);
  return res;
};

export const categories = async () => {
  const res = await instance.get(urls.categories);
  return res;
};

export const addCategories = async (category) => {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");
  const res = await instance.post(
    urls.categories,
    {
      name: category,
    },
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );
  return res;
};

export const productInfo = async (id) => {
  const res = await instance.get(urls.categories + "/" + id);
  return res;
};

export const brands = async () => {
  const res = await instance.get(urls.brands);
  return res;
};

export const addBrand = async (brand) => {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");
  const res = await instance.post(
    urls.brands,
    {
      name: brand,
      published_at: new Date(),
      created_by: new Date(),
      updated_by: new Date(),
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  return res;
};

export const colors = async () => {
  const res = await instance.get(urls.colors);
  return res;
};

export const addColor = async (color) => {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");
  const res = await instance.post(
    urls.colors,
    { name: color },
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );
  return res;
};

export const usages = async () => {
  const res = await instance.get(urls.usage);
  return res;
};

export const addUsage = async (usage) => {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");
  const res = await instance.post(
    urls.usages,
    { name: usage },
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );
  return res;
};

export const uploadProduct = async (formData) => {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");

  const res = await instance.post(urls.products, formData, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
  return res;
};

export default instance;
