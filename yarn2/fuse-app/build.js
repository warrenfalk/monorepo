const {config} = require("./fuse-config.js");
const {fusebox} = require('fuse-box')

const fb = fusebox({
    ...config,
})

fb.runProd();
