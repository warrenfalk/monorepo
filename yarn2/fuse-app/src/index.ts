import { internalMessage } from "./internalModule";
import { exportedFunc } from "node-lib"
import { direct } from "node-lib/dist/direct"
import * as uuid from "uuid"

const message = `
${internalMessage()}<br>
${uuid()}<br>
${direct()}<br>
${exportedFunc()}<br>
(refresh to update)
`;

let global: any;

console.log(message);
if (global?.document) {
    global.document.getElementById('root')!.innerHTML = message;
}
