import React from "react";
import config from "../config";
import Home from "../pages/Home";

interface Route {
  path: string;
  component: React.FC;
}

const publicRoutes: Route[] = [{ path: config.routes.home, component: Home }];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
