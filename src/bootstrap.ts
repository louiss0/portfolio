import type { App } from "vue";

import { Icon } from '@iconify/vue';

const components = Object.freeze({
    Icon
})





export default (app: App) => {


    Object.entries(components).forEach(([key, value]) => app.component(key, value))


}