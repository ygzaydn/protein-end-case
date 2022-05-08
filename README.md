# İkinci El Project

![logo](./src/assets/images/logo.png)

İkinci El Project is a platform to help people to sell & buy products for better prices. Users can upload their products and wait for possible offers, or a direct buyer.

In order to run project, you should run:

`npm run start`

Project is powered by React and additional libraries. In this file, those libraries and properties of project will be explained.

## Library Stack

Used Libraries:

- eslint: To have more controllable code while developing the project
- formik: To handle forms
- axios: To handle fetch requests
- lodash: To use some array functions to ease the operations
- redux: To have a global state management
  - redux-saga: To handle side-effects on redux
  - redux-logger: To make development process easier.
  - redux-persist: To have a persisted redux state
- yup: To have variable validations
- reselect: To create selectors for redux
- saas: To write & operate CSS in more efficient way
- toastify: To have popup windows in nasty way
- react-router: To implement routing easily on React
- universal-cookie: To implement cookies on React in easier way
- prop-types: To be able to do typecheck without Typescript

## File Structure

```
.
└── src/
    ├── assets/
    │   ├── images
    │   └── svgs
    ├── components/
    ├── contexts/
    ├── constants/
    │   ├── schemas
    │   └── texts
    ├── icons/
    ├── pages/
    │   ├── account
    │   ├── addProduct
    │   ├── index
    │   ├── productDetail
    │   └── sign
    ├── redux/
    │   ├── categories
    │   ├── products
    │   └── user
    ├── router/
    ├── styles/
    │   ├── abstract
    │   ├── base
    │   ├── components
    │   ├── layout
    │   ├── pages
    │   ├── toastify
    │   └── utils
    └── utils/
```

- Assets -> Necessary image & svg files are stored here.
- Components -> Components are stored here.
- Contexts -> Contexts are stored here. (There are 2 contexts that is used on this project, you can check them out)
- Constants -> Yup schemas and texts are stored here. (All texts that have been used on pages are stored in JSON objects, which we can change them easily)
- Icons -> SVG Icon components are stored here.
- Pages -> Pages are stored here. (There are 5 different pages on this project)
- Redux -> Redux related files are stored here. (I've used 3 different reducers to handle all cases)
- Router -> React router file is stored here.
- Styles -> SCSS files are stored here.
- Utils -> Axios configuration is stored here. You can change urls here without dealing with other files.

## Development Process

During the development, I've tried to follow some architectures. On this part the file, I'll mention them.

- CSS class names are named by following BEM phenomenon.
- SASS file are organized by using the idea of SASS 7-1 pattern, I have used necessary layers here, and added a _toastify_ folder to handle CSS of toastify popup.
- I tried to create variables for CSS to handle code repetitions. Also wrote some mixins to deal with media queries etc. You can reach them [here](./src/styles/abstract/_mixins.scss)
- I have used Redux-Saga middleware to handle side effets of redux. Redux-saga uses [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).
- I have created small pieces of components to avoid code repetitions. You can check components [here](./src/components/index.js). Generic components are used on different cases, and I wanted to simulate some components (e.g Button Component, Text Component) like on React libraries (like Material UI).
- I haven't used any additional React library to have ready-to-use components. I have tried to create them all by writing CSS.
- I have created an [axios](./src/utils/axios.js) file to have control on axios calls. On this file you can easily change base URL or paths without have additional concern.
- I have used some _role_ HTML attribute to make project is readable for people who has disabilities.
- I have compressed files on [images](/src/assets/images/). By doing this operation file size is minimized(~70%) thus we have better performance. You can check old & new versions of images.
- I have created `index.js` files for all subfolders to control import & export action in one place.

## Things to do

I believe I have completed the checklist that is shared with us. But there are some elements that I could add.

- I haven't find time to write tests. Tests are essentials on software development and must be added.
- I have worked more on optimizing fetch requests to avoid unnecessary fetches. I might have better performance on it if I had more time.
- There might some CSS errors, and by having some feedback they are easy to change.
- I might miss some egde cases even if I have worked on them.
- I haven't worked on Next.js, so couldn't find to implement SSR. On my learning path, next step is to learn SSR and Next.js.

### Before closing the project

I'd like to thank [Patika](https://www.patika.dev) and [Protel](https://www.protel.com.tr) for this bootcamp. I really enjoyed the whole process. I wish we had more time and dive into deeper topics.

---

> - API: https://bootcampapi.techcs.io/api/fe/v1/
> - Yeni API: https://bootcamp.akbolat.net/documentation/v1.0.0
> - Tasarım: https://xd.adobe.com/view/d2d90aae-3e30-4062-64db-8e998a010c1a-a4e8/grid
> - Şifre: Çiçeksepeti1

---
