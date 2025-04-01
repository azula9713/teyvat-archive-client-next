"use client";

import { useAtom } from "jotai";
import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
  weaponSearchAtom,
} from "~/atoms/teyvat/weapon.atom";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";
import WeaponFilterStack from "./weaponFilterStack";
import FilterDropDown from "~/components/common/filters/filterDropdown";
import { RARITY_TYPES } from "~/data/teyvatData";
import { IRarityType } from "~/types/enka/enka.types";
import { IBaseWeaponSeries } from "~/types/enka/weapon.types";

type Props = {
  weaponSeries: IBaseWeaponSeries;
};

export default function WeaponFilterSection({ weaponSeries }: Readonly<Props>) {
  const [selectedWeaponType, setSelectedWeaponType] = useAtom(
    selectedWeaponTypeAtom
  );
  const [selectedWeaponRarity, setSelectedWeaponRarity] = useAtom(
    selectedWeaponRarityAtom
  );
  const [selectedSeries, setSelectedSeries] = useAtom(selectedWeaponSeriesAtom);
  const [weaponSearch, setWeaponSearch] = useAtom(weaponSearchAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getRarityLabel = (rarity: IRarityType) => {
    return RARITY_TYPES[rarity];
  };

  return (
    <div className="w-full pt-3 mx-2 px-2 flex flex-col items-center">
      <div className="relative lg:hidden w-full max-w-[320px]">
        <FilterDropDown
          {...{
            isFilterOpen,
            setIsFilterOpen,
          }}
        >
          {selectedWeaponType && (
            <Image
              src={weaponTypeIconFilter[selectedWeaponType]}
              alt={selectedWeaponType}
              className="w-[24px]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          )}
          {selectedWeaponRarity && (
            <div className="flex items-center space-x-2 justify-end">
              {getRarityLabel(selectedWeaponRarity)}
              <StarIcon className="size-4 text-[gold]" />
            </div>
          )}
        </FilterDropDown>

        {isFilterOpen && (
          <div className="absolute flex flex-col items-center justify-evenly pt-4 end-0 z-10 w-full rounded-md border border-gray-100 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <WeaponFilterStack
              {...{
                setIsFilterOpen,
                selectedWeaponType,
                setSelectedWeaponType,
                selectedRarity: selectedWeaponRarity,
                setSelectedRarity: setSelectedWeaponRarity,
                selectedSeries,
                setSelectedSeries,
                weaponSeries,
                setWeaponSearch,
                weaponSearch,
              }}
            />
          </div>
        )}
      </div>
      <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-4">
        <WeaponFilterStack
          {...{
            setIsFilterOpen,
            selectedWeaponType,
            setSelectedWeaponType,
            selectedRarity: selectedWeaponRarity,
            setSelectedRarity: setSelectedWeaponRarity,
            selectedSeries,
            setSelectedSeries,
            weaponSeries,
            setWeaponSearch,
            weaponSearch,
          }}
        />
      </div>
    </div>
  );
}
