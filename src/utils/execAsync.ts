import * as util from "util";
import { exec as execCallback } from "child_process";

export const execAsync = util.promisify(execCallback);
