"use server";

import AllArtifactsShowcase from "~/components/artifacts/allArtifactsShowcase";
import ArtifactFilterSection from "~/components/artifacts/filtering/artifactFilterSection";
import PageTitle from "~/components/common/typography/pageTitle";
import ShowcaseFilterContainer from "~/components/layout/container/showcaseFilterContainer";
import { getArtifactSets } from "~/services/teyvatServer/teyvatArchive.service";

export default async function Artifacts() {
  const artifactSets: IBaseArtifactSet[] = await getArtifactSets();

  return (
    <>
      <ShowcaseFilterContainer isSticky>
        <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
          <PageTitle title="Teyvat Artifacts" />
        </div>
        <ArtifactFilterSection />
      </ShowcaseFilterContainer>
      <AllArtifactsShowcase artifactSets={artifactSets} />
    </>
  );
}
