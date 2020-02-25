import {internallyExportedFunc} from "./module";
import {exportedFunc} from "node-lib";
import { direct } from "node-lib/dist/direct"

function printShit(): void {
    console.log(msg());
    console.log(direct());
}

printShit();

export function msg(): string {
    const target = internallyExportedFunc();
    const greeting = exportedFunc();
    return `${greeting} ${target}!`;
}