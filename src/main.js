import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/assets/styles/index.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faGithub } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faGithub);

const app = createApp(App);

app.use(createPinia());
app.use(router);

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
