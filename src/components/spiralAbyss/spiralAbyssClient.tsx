"use client";

import { useEffect, useState } from "react";

import { useAbyssBlessings, useAbyssInfo } from "~/hooks/useAbyssData";
import { useAllCharacterData } from "~/hooks/useCharacterData";
import { ITopCharacter } from "~/types/enka/character.types";
import { IAbyssBlessing } from "~/types/enka/enka.types";
import {
  getFinalizedAbyssBlessings,
  getTopTenCharacters
} from "~/utils/parsers/abyssDataParser";

import AbyssBlessings from "./abyssBlessings";
import MostUsedTeams from "./mosedUsedTeams";
import MostPickedCharacters from "./mostPickedCharacters";

export default function SpiralAbyssClient() {
  const { data: characterData } = useAllCharacterData();
  const { data: abyssData, isLoading: isAbyssLoading } = useAbyssInfo();
  const { data: blessingData } = useAbyssBlessings();

  const [isUsedByOwn, setIsUsedByOwn] = useState(false);
  const [top10Chars, setTop10Chars] = useState<ITopCharacter[]>([]);
  const [sortedAbyssBlessings, setSortedAbyssBlessings] = useState<
    IAbyssBlessing[]
  >([]);

  useEffect(() => {
    if (abyssData && characterData) {
      const top10 = getTopTenCharacters(
        isUsedByOwn,
        abyssData.characters,
        characterData
      );
      setTop10Chars(top10);
    }
  }, [abyssData, isUsedByOwn, characterData]);

  useEffect(() => {
    if (blessingData) {
      setSortedAbyssBlessings(getFinalizedAbyssBlessings(blessingData));
    }
  }, [blessingData]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
      <MostPickedCharacters
        {...{ top10Chars, isAbyssLoading, isUsedByOwn, setIsUsedByOwn }}
      />
      <AbyssBlessings {...{ sortedAbyssBlessings }} />
      <MostUsedTeams/>
    </div>
  );
}
