import { Logo } from "@/components/logo";
import { GridContainer } from "../layout";

export default async function Course() {
  return (
    <div className="dark relative grid min-h-dvh grid-cols-1 place-items-center px-4 py-8 sm:px-0">
      <div>
        <GridContainer>
          <div className="flex justify-center p-2">
            <Logo className="h-7" />
          </div>
        </GridContainer>
        <div className="mt-6 space-y-4">
          <GridContainer>
            <h1 className="text-center text-5xl tracking-tighter text-balance text-white lg:text-8xl">You’re in!</h1>
          </GridContainer>
          <GridContainer>
            <p className="mx-auto max-w-xl text-center text-lg/7 font-medium text-pretty text-gray-400">
              Look for the first video in your inbox any minute, and check again every morning for the next one in the
              series.
            </p>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
