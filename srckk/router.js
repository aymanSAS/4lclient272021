import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/home",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: () => import("./views/Profile.vue")
    },
    {
      path: "/admin",
      name: "admin",
      // lazy-loaded
      component: () => import("./views/BoardAdmin.vue")
    },
    {
      path: "/mod",
      name: "moderator",
      // lazy-loaded
      component: () => import("./views/BoardModerator.vue")
    },
    {
      path: "/messages",
      name: "messages",
      // lazy-loaded
      component: () => import("./views/Opmessages.vue")
    },
    //
    {
      path: "/cats",
      name: "cats",
      // lazy-loaded
      component: () => import("./views/Cats.vue")
    },
    {
      path: "/subcats",
      name: "subcats",
      // lazy-loaded
      component: () => import("./views/Subcats.vue")
    },
    {
      path: "/failures",
      name: "failures",
      // lazy-loaded
      component: () => import("./views/Failures.vue")
    },
    {
      path: "/chart",
      name: "chart",
      component: () => import("./views/Chartm.vue")
    },
    //
    {
      path: "/ppd",
      name: "ppd",
      component: () => import("./views/Ppd.vue")
    },
    ///
    {
      path: "/maintmessages",
      name: "maintmessages",
      // lazy-loaded
      component: () => import("./views/Maintmessages.vue")
    },
    {
      path: "/managermessages",
      name: "managermessages",
      // lazy-loaded
      component: () => import("./views/Managermessages.vue")
    },

    ////////////////////////////////
    {
      path: "/assets",
      name: "assets",
      // lazy-loaded
      component: () => import("./views/Assets.vue")
    },
    {
      path: "/sites",
      name: "sites",
      // lazy-loaded
      component: () => import("./views/Sites.vue")
    },
    {
      path: "/departments",
      name: "departments",
      // lazy-loaded
      component: () => import("./views/Departments.vue")
    },
    {
      path: "/safety",
      name: "safety",
      // lazy-loaded
      component: () => import("./views/Safety.vue")
    },
    {
      path: "/safetyinstructions",
      name: "safetyinstructions",
      // lazy-loaded
      component: () => import("./views/SafetyInstructions.vue")
    },
    {
      path: "/failiurecodes",
      name: "failiurecodes",
      // lazy-loaded
      component: () => import("./views/FailiureCodes.vue")
    },
    {
      path: "/suppliers",
      name: "suppliers",
      // lazy-loaded
      component: () => import("./views/Suppliers.vue")
    },
    {
      path: "/emp",
      name: "employees",
      // lazy-loaded
      component: () => import("./views/Employees.vue")
    },
    {
      path: "/locations",
      name: "locations",
      // lazy-loaded
      component: () => import("./views/Locations.vue")
    },
    {
      path: "/mes2",
      name: "mes2",
      // lazy-loaded
      component: () => import("./views/Mes2.vue")
    },
    {
      path: "/user",
      name: "user",
      // lazy-loaded
      component: () => import("./views/BoardUser.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/home"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
