import { useAtom } from "jotai";

import {
  useFilterTravelersAtom,
  useSelectedTravelerAtom
} from "~/atoms/feature.atoms";

import SettingsDropdownItem from "../../common/settings/settingsDropDownItem";
import SettingsToggleItem from "../../common/settings/settingsToggleItem";

export default function GeneralSettings() {
  const [useFilterTravelers, setUseFilterTravelers] = useAtom(
    useFilterTravelersAtom
  );
  const [useSelectedTraveler, setUseSelectedTraveler] = useAtom(
    useSelectedTravelerAtom
  );

  return (
    <div className="flex flex-col space-y-3">
      <SettingsToggleItem
        value={useFilterTravelers}
        setValue={setUseFilterTravelers}
        id="filterTravelers"
        label="Filter Travelers"
      />
      <SettingsDropdownItem
        value={useSelectedTraveler}
        setValue={setUseSelectedTraveler}
        id="traveler"
        isDisabled={!useFilterTravelers}
        label="Traveler"
        options={[
          { value: "PlayerBoy", label: "Aether" },
          { value: "PlayerGirl", label: "Lumine" }
        ]}
        description={
          !useFilterTravelers
            ? "Enable 'Filter Travelers' to use this feature."
            : ""
        }
      />
    </div>
  );
}
