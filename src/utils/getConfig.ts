import { logger } from "@/lib/logger";
import { configSchema } from "@/schemas/configSchema";
import { promises } from "fs";
import YAML from "yaml";

export const getConfig = async () => {
  try {
    logger.info("Getting configuration...");
    const configRaw = await promises.readFile("config.yml", "utf-8");
    const configParsed = await configSchema.safeParseAsync(
      YAML.parse(configRaw),
    );
    if (configParsed.success) {
      logger.info("Successfully parsed config!");
      return configParsed.data;
    }
    logger.info("Invalid config format!");
    return { buttons: [] };
  } catch (e) {
    logger.error(`Error in getting config! Error: ${e}`);
    return { buttons: [] };
  }
};
