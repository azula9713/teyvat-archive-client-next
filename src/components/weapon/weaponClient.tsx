"use client";

import WeaponDesktopView from "./weaponDesktopView";
import WeaponMobileView from "./weaponMobileView";

type Props = {
  weapon: IWeapon;
};

export default function WeaponClient({ weapon }: Readonly<Props>) {
  return (
    <>
      <WeaponMobileView weapon={weapon} />
      <WeaponDesktopView weapon={weapon} />
    </>
  );
}
