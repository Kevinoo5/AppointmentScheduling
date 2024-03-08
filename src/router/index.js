import { createRouter, createWebHistory } from 'vue-router'

import loginRouter from "./routes/loginRouter.js";
import homeRouter from "./routes/homeRouter.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [...loginRouter, ...homeRouter]
})

export default router