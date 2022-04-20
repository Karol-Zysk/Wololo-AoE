

export type UnitData = {
  name: string;
  id: number;
  armor: number;
  attack: number;
  cost: { info: string; Cost: string; Wood: number; Gold: number; Food:number; Stone:number };
};

export const fetchUnitsData = async () => {
  const response = await fetch("http://aoe2.devops.sages.pl/api/v1/units");
  const data = await response.json();
  return data.units.filter(
    (unit: UnitData) => !unit.cost.info && unit.cost.Cost !== "No cost"
  );
};
