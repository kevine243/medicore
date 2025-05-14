import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Patients.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Patients.vue"),
    },
    {
      path: "/patient/:id",
      name: "PatientDetail",
      component: () => import("../views/PatientDetail.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/appointments",
      name: "appointments",
      component: () => import("../views/Appointments.vue"),
    },
    {
      path: "/analytics",
      name: "analytics",
      component: () => import("../views/Stats.vue"),
    },
    {
      path: "/notifications",
      name: "notifications",
      component: () => import("../views/Notifications.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/Settings.vue"),
    }
  ],
});

export default router;
