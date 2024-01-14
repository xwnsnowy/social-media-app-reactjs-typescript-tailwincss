import routes from "./routes";

interface AppConfig {
  routes: typeof routes;
}

const config: AppConfig = {
  routes,
};

export default config;
