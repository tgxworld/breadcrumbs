import { apiInitializer } from "discourse/lib/api";
import BreadCrumbs from "../components/breadcrumbs";

export default apiInitializer("1.9.0", (api) => {
  [
    "above-category-navigation",
    "above-default-navigation",
    "above-topic-container",
  ].forEach((outletName) => {
    api.renderInPluginOutlet(outletName, BreadCrumbs);
  });
});
