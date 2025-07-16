import { createRouter, createWebHistory } from "vue-router";
import ProjectList from "@/views/ProjectList.vue";
import TaskList from "@/views/TaskList.vue";

const routes = [
  { path: "/", component: ProjectList },
  { path: "/proyecto/:id", component: TaskList, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
