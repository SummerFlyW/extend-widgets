import * as appPlugins from './Plugins';

(() => {
    "use strict";
    Object.keys(appPlugins).forEach((value) => appPlugins[value]());
})();
