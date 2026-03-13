import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // Adding placeholder routes that we will implement later
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/cases",
      name: "cases",
      component: () => import("../views/CasesView.vue"),
    },
    {
      path: "/cases/andertons",
      name: "andertons-case",
      component: () => import("../views/cases/AndertonsCase.vue"),
    },
    {
      path: "/cases/david-sobey",
      name: "david-sobey-case",
      component: () => import("../views/cases/DavidSobeyCase.vue"),
    },
    {
      path: "/cases/hultprize",
      name: "hultprize-case",
      component: () => import("../views/cases/HultPrizeCase.vue"),
    },
    {
      path: "/cases/zarastus",
      name: "zarastus-case",
      component: () => import("../views/cases/ZarastusCase.vue"),
    },
    {
      path: "/projects/pacific-climate",
      name: "pacific-climate",
      component: () => import("../views/projects/PacificClimateProject.vue"),
    },
    {
      path: "/projects/golden-eagle",
      name: "golden-eagle",
      component: () => import("../views/projects/GoldenEagleProject.vue"),
    },
    {
      path: "/projects/modular-agency",
      name: "modular-agency",
      component: () => import("../views/projects/ModularAgencyProject.vue"),
    },
    {
      path: "/projects/game-modular",
      name: "game-modular",
      component: () => import("../views/projects/GameModularProject.vue"),
    },
    {
      path: "/projects/gigadevice",
      name: "gigadevice",
      component: () => import("../views/projects/GigaDeviceProject.vue"),
    },
    {
      path: "/projects/ai-track",
      name: "ai-track",
      component: () => import("../views/projects/AITrackProject.vue"),
    },
    {
      path: "/projects/master-thesis",
      name: "master-thesis",
      component: () => import("../views/projects/MasterThesisProject.vue"),
    },
  ],
});

export default router;
