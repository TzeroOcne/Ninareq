import "./app.css";
import App from "./App.svelte";

import { init } from "@neutralinojs/lib";

const app = new App({
  target: document.getElementById("app"),
});

// import(`../../.tmp/${fileName}`).then((val) => {
//   console.error({val});
// });
init();

export default app;
