const path = require('path');
const CURRENT_PATH = process.cwd();
const {serve} = require('@ym/bot-engine');
if (process.env.NODE_ENV==='docker'){
    serve(require(path.join(CURRENT_PATH, '/dist/functions/index')), {bot: process.env.botId});

} else{
    serve(require(path.join(CURRENT_PATH, './functions/index')), {bot: process.env.botId, uid: process.env.uid});
}
