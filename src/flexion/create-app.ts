import { type App, type Component } from "./type";

export function createApp(rootComponent?: Component): App {
  const app: App = {
    component: rootComponent,
    plugins: [],

    use(plugin) {
      this.plugins.push(plugin);
      return this;
    },

    mount(selector: string) {
      const mountPoint = document.getElementById(selector);
      if (!mountPoint) {
        throw new Error(`Element with selector "${selector}" not found.`);
      }

      this.plugins.forEach((plugin) => plugin(this));

      mountPoint.innerHTML = this.renderComponent(this.component);
    },

    renderComponent(component: Component) {
      return `test`;
      // return `<div>${component()}</div>`;
    },
  };

  return app;
}
