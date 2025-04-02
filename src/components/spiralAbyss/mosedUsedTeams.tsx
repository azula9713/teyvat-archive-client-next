import { IAbyssPartyData } from "~/types/enka/enka.types";

import TitleHeading from "../common/typography/titleHeading";

import AbyssTeam from "./abyssTeam";

type Props = {
  firstHalf: IAbyssPartyData[];
  secondHalf: IAbyssPartyData[];
};

export default function MostUsedTeams({
  firstHalf,
  secondHalf
}: Readonly<Props>) {
  console.log("firstHalf", firstHalf);
  return (
    <div className="flex w-full max-w-[1000px] flex-col items-center justify-center">
      <TitleHeading
        text="Top 4 Team Comps"
        customClass="text-xl text-center w-full"
      />
      <div className="my-4 grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
        <div className="flex w-full flex-col items-center justify-center">
          <label htmlFor="firstHalf" className="font-enka">
            {" "}
            12-3 First Half
          </label>
          {firstHalf.map((team) => (
            <AbyssTeam key={team.value} {...{ team }} />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <label htmlFor="secondHalf" className="font-enka">
            12-3 Second Half
          </label>
          {secondHalf.map((team) => (
            <AbyssTeam key={team.value} {...{ team }} />
          ))}
        </div>
      </div>
    </div>
  );
}
