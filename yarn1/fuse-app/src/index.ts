import {jsfile} from "node-lib/dist/jsfile"
import { internalMessage } from "./internalModule";
import { exportedFunc } from "node-lib"
import { direct } from "node-lib/dist/direct"
import * as uuid from "uuid"
import * as json from "node-lib/dist/jsonfile.json"

const message = `
${internalMessage()}<br>
${uuid()}<br>
${direct()}<br>
${jsfile()}<br>
${json}<br>
${exportedFunc()}<br>
(refresh to update)
`;

let global: any;

console.log(message);
if (global?.document) {
    global.document.getElementById('root')!.innerHTML = message;
}
