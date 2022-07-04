import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AutoresView from "../views/AutoresView.vue";
import EditorasView from "../views/EditorasView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import LivrosView from "../views/LivrosView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/editoras",
      name: "ediroras",
      component: EditorasView,
    },

    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
  ],
});

export default router;
