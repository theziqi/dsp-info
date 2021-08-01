//引入vue
import Vue from "vue";
//引入vue-router
import VueRouter from "vue-router";
//第三方库需要use一下才能用
Vue.use(VueRouter);
import Index from "./components/Index";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Courseware from "./components/Courseware";
import Introduction from "./components/Introduction";
import Outline from "./components/Outline";
import Practice from "./components/Practice";
import Resource from "./components/Resource";
import Teachers from "./components/Teachers";
import Testpaper from "./components/Testpaper";
import Designmethods from "./components/Designmethods";
import Evaluation from "./components/Evaluation";
import Record from "./components/Record";
import Exercises from "./components/Exercises";
import Plan from "./components/Plan";
import Teacher from "./components/Teacher";
import Video from "./components/Video";
import Read from "./components/Read";
//定义routes路由的集合，数组类型
const routes = [
  //单个路由均为对象类型，path代表的是路径，component代表组件
  { path: "/", name: "index", component: Index },
  { path: "/books", name: "books", component: Books },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/courseware", name: "courseware", component: Courseware },
  { path: "/introduction", name: "introduction", component: Introduction },
  { path: "/outline", name: "outline", component: Outline },
  { path: "/practice", name: "practice", component: Practice },
  { path: "/resource", name: "resource", component: Resource },
  { path: "/teachers", name: "teachers", component: Teachers },
  { path: "/testpaper", name: "testpaper", component: Testpaper },
  { path: "/designmethods", name: "designmethods", component: Designmethods },
  { path: "/evaluation", name: "evaluation", component: Evaluation },
  { path: "/record", name: "record", component: Record },
  { path: "/exercises", name: "exercises", component: Exercises },
  { path: "/plan", name: "plan", component: Plan },
  { path: "/teacher/:name", name: "teacher", component: Teacher },
  { path: "/video/:vid", name: "video", component: Video },
  { path: "/read/:rid", name: "read", component: Read },
];

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
  //ES6简写，等于routes：routes
  routes,
  base: process.env.NODE_ENV === "production" ? "/dspinfo" : "/",
});

//抛出这个这个实例对象方便外部读取以及访问
export default router;
