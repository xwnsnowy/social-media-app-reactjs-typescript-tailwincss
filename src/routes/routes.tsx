import React from "react";
import config from "../config";
import Home from "../pages/Home";
import DefaultLayout from "../layouts/DefaultLayout";

interface Route {
  path: string;
  Component: React.FC;
  Layout: React.FC | null;
}

const publicRoutes: Route[] = [
  { path: config.routes.home, Component: Home, Layout: null },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
