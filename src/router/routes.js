const routes = [
  {
    path: "/",
    component: () => import("layouts/NoHeaderLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/CheckIn",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CheckIn.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
