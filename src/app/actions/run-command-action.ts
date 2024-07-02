"use server";

import { execAsync } from "@/utils/execAsync";
import { getConfig } from "@/utils/getConfig";

export const runCommandAction = async (name: string) => {
  try {
    const config = await getConfig();
    const command = config.buttons.filter((button) => button.name === name)[0]
      .command;
    const result = await execAsync(command);
    if (result.stderr) {
      throw `Command failed with error: ${result.stderr}`;
    } else {
      console.log(`Command output: ${result.stdout}`);
    }
    return { success: true };
  } catch (e) {
    console.error(`Error in running action! Error: ${e}`);
    return { success: false };
  }
};
