import React from "react";
import config from "../config";
import Home from "../pages/Home";
import SigninForm from "../pages/forms/SigninForm";
import AuthLayout from "../layouts/AuthLayout";
import SignupForm from "../pages/forms/SignupForm";

const publicRoutes: Route[] = [
  { path: config.routes.home, component: Home, layout: null },
  {
    path: config.routes.signin,
    component: SigninForm,
    layout: AuthLayout,
  },
  {
    path: config.routes.signup,
    component: SignupForm,
    layout: AuthLayout,
  },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
