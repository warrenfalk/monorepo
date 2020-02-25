const {config} = require('./fuse-config');
const {fusebox} = require('fuse-box');

const fuse = fusebox({
    ...config,
    watcher: {
        include: [
            "src",
            "../node-trans-lib/src",
            "../node-lib/src",
        ],
    },
    devServer: true,
    cache: false,
    hmr: true,
});

fuse.runDev();