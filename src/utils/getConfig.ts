import { configSchema } from "@/schemas/configSchema";
import { promises } from "fs";
import YAML from "yaml";

export const getConfig = async () => {
  try {
    const configRaw = await promises.readFile("config.yml", "utf-8");
    const configParsed = await configSchema.safeParseAsync(
      YAML.parse(configRaw),
    );
    if (configParsed.success) {
      return configParsed.data;
    }
    return { buttons: [] };
  } catch (e) {
    console.error(`Error in getting config! Error: ${e}`);
    return { buttons: [] };
  }
};
