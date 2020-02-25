const path = require('path');
const tsConfig = path.join(__dirname, "./tsconfig.json");

module.exports = {
    config: {
        target: 'browser',
        entry: 'src/index.ts',
        webIndex: { template: 'src/index.html' },
        tsConfig,
    }
};

