import {createApp} from "vue";
import App from "./App.vue";
import components from "./components/ui/";
const app = createApp(App);

components.forEach((item) =>
    app.component(item.name, item)
);

app.mount("#app");
