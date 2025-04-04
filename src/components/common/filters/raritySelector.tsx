import { StarIcon } from "lucide-react";

import { RARITIES_ARRAY, RARITY_TYPES } from "~/data/teyvatData";
import { IRarityType } from "~/types/enka/enka.types";

type Props = {
  selectedRarity: IRarityType | null;
  setSelectedRarity: (rarity: IRarityType | null) => void;
  rarityIndex: number;
};

export default function RaritySelector({
  selectedRarity,
  setSelectedRarity,
  rarityIndex
}: Readonly<Props>) {
  return (
    <div className="flex w-full items-center justify-center">
      <button
        className="mx-2 flex cursor-pointer items-center text-sm"
        onClick={() => {
          if (selectedRarity === RARITIES_ARRAY[rarityIndex]) {
            setSelectedRarity(null);
          } else {
            setSelectedRarity(RARITIES_ARRAY[rarityIndex]);
          }
        }}
      >
        {rarityIndex + 1 > 5 ? RARITY_TYPES.QUALITY_ORANGE_SP : rarityIndex + 1}
        {selectedRarity === RARITIES_ARRAY[rarityIndex] || !selectedRarity ? (
          <StarIcon
            className={`size-3 text-[gold] lg:size-4 xl:size-5`}
            fill="currentColor"
            strokeWidth={1}
          />
        ) : (
          <StarIcon className="size-3 text-[gold] lg:size-4 xl:size-5" />
        )}
      </button>
    </div>
  );
}
