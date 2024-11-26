export type Component = () => string | undefined;

type Plugin = (app: App) => void;

export interface App {
  component?: Component;
  plugins: Plugin[];
  use(plugin: Plugin): this;
  mount(selector: string): void;
  renderComponent(component: Component): string;
}
