import r2wc from "@r2wc/react-to-web-component";
import App from "./App";
import App2 from "./App2";

const HelloWC = r2wc(App, {
  props: {name: "string"},
});
const ByeWC = r2wc(App2, {
  props: {name: "string"},
});

customElements.define("hello-wc", HelloWC);
customElements.define("bye-wc", ByeWC);
