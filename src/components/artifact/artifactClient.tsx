"use client";

import React, { useEffect } from "react";
import ArtifactMobileView from "./artifactMobileView";
import ArtifactDesktopView from "./artifactDesktopView";
import {
  selectedArtifactRarityAtom,
  selectedRarityFullSetAtom,
} from "~/atoms/teyvat/artifact.atom";
import { useAtom } from "jotai";

type Props = {
  artifactSet: IArtifactSet;
};

export default function ArtifactClient({ artifactSet }: Readonly<Props>) {
  const { highestRarity } = artifactSet;
  const [artifactRarity, setArtifactRarity] = useAtom(
    selectedArtifactRarityAtom
  );

  const [_, setSelectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);

  useEffect(() => {
    setArtifactRarity(highestRarity);
  }, [highestRarity]);

  useEffect(() => {
    if (typeof artifactRarity === "number") {
      const selectedRaritySet = artifactSet.collection.filter(
        (set) => set.stars === artifactRarity
      );

      setSelectedRarityFullSet(selectedRaritySet);
    }
  }, [artifactRarity]);

  return (
    <>
      <ArtifactMobileView
        {...{
          artifactSet,
        }}
      />
      <ArtifactDesktopView
        {...{
          artifactSet,
        }}
      />
    </>
  );
}
