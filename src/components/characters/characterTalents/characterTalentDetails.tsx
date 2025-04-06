import { IAllTalent } from "~/types/enka/character.types";
import parseText from "~/utils/parsers/parseEnkaText";

import TalentStats from "./talentStats";

type Props = {
  selectedTalent?: IAllTalent;
};

export default function CharacterTalentDetails({
  selectedTalent
}: Readonly<Props>) {
  if (selectedTalent) {
    console.log("selectedTalent", selectedTalent);
    return (
      <div className="flex w-full flex-col items-start justify-start rounded-lg bg-slate-700 px-8 py-4 text-xl text-white">
        <h2 className="font-algoindeEnka mb-4 text-3xl">
          {selectedTalent.name} {selectedTalent.isPassive ? "(Passive)" : ""}
        </h2>
        <div>
          <div
            className="w-full"
            dangerouslySetInnerHTML={{
              __html: parseText(selectedTalent.description || "")
            }}
          />
        </div>
        {selectedTalent.stats && <TalentStats {...{ selectedTalent }} />}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-start justify-start rounded-lg bg-slate-700 px-8 py-4 text-xl text-white">
      <h2 className="font-algoindeEnka mb-4 text-3xl">Select a talent</h2>
    </div>
  );
}
