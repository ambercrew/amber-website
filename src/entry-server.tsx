import { renderToString } from "react-dom/server";
import { Root } from "./Root";

export function render() {
  return renderToString(<Root />);
}

export { SITE_URL } from "./constants";
