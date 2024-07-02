import { getConfig } from "@/utils/getConfig";
import { RenderButton } from "./components/RenderButton";
import { ThemeSwitch } from "./components/ThemeSwitch";

export default async function Home() {
  const config = await getConfig();
  return (
    <>
      <div className="bg-neutral-100 dark:bg-neutral-900 min-h-screen">
        <div className="flex justify-between w-screen p-5">
          <p className="text-lg font-medium">ButtonBox</p>
          <ThemeSwitch />
        </div>
        <div className="flex flex-col flex-wrap md:flex-row gap-2 p-5">
          {config?.buttons.length !== 0 ? (
            config?.buttons.map((button) => (
              <RenderButton
                key={button.name.replace(" ", "-").toLowerCase()}
                name={button.name}
                description={button.description}
                icon={button.icon}
              ></RenderButton>
            ))
          ) : (
            <p className="text-lg font-medium m-auto">
              No buttons configured, maybe you made a typo in the configuration?
            </p>
          )}
        </div>
      </div>
    </>
  );
}
