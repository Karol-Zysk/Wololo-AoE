import React from "react";
import { useState, useEffect } from "react";
import { fetchUnitsData, UnitData } from "./components/API";
import { useForm } from "react-hook-form";
import {
  Container,
  UnitsGrid,
  Left,
  Right,
  Text,
  AoeH1,
  Label,
  Input,
  Button,
  Form,
  ResourcesTable,
  Resources,
  GridText,
  EmptyCell,
  Spinner,
} from "./App.styles";
import Unit from "./components/Unit";

export type UnitObject = {
  id: number;
  name: string;
  attack: number;
  armor: number;
  avaliable: number;
};

const calculateAvailableUnits = (ourResources: any, cost: object) => {
  const numberOfCostTypes = Object.keys(cost).length;
  const unitsPerCost = Object.entries(cost)
    .map(([key, value]) => {
      const ourCurrentResource = ourResources[key];
      return Math.floor(ourCurrentResource / value);
    })
    .filter((unit) => unit >= 0);

  if (numberOfCostTypes !== unitsPerCost.length) {
    return 0;
  }

  return Math.min(...unitsPerCost);
};

const App: React.FC = () => {
  type FormInputs = {
    Wood: number;
    Food: number;
    Stone: number;
    Gold: number;
  };

  const [aoeData, setAoeData] = useState<UnitObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [EnoughResources, setEnoughResources] = useState<boolean>(false);
  const [showUnits, setShowUnits] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: { Gold: 0, Wood: 0, Stone: 0, Food: 0 },
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
  });

  const onSubmit = async (FormData: object) => {
    setLoading(true);
    const units = await fetchUnitsData();
    const availableUnits = units.map((unit: UnitData) => ({
      ...unit,
      avaliable: calculateAvailableUnits(FormData, unit.cost),
    }));

    setAoeData(availableUnits);
    setLoading(false);
    setShowUnits(true);
  };

  let myArr: number[] = [];

  useEffect(() => {
    aoeData.map((aoeUnit) => {
      myArr.push(aoeUnit.avaliable);
      let max = Math.max(...myArr);
      if (max === 0) {
        setEnoughResources(true);
      } else {
        setEnoughResources(false);
      }
      return null;
    });
  }, [aoeData]);

  return (
    <Container>
      <Left>
        {!showUnits &&
          (!loading ? (
            <Text>Uzupełnij Surowce żeby zobaczyć jednostki</Text>
          ) : (
            <Spinner />
          ))}
        {showUnits && (
          <>
            {loading ? (
              <Spinner />
            ) : (
              <UnitsGrid>
                <GridText enoughResources={EnoughResources}>
                  {EnoughResources
                    ? "Nie masz wystarczającej ilości surowców"
                    : "Liczba jednostek, które możesz kupić za posiadane surowce:"}
                </GridText>
                <EmptyCell />

                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    {aoeData.length !== 0 &&
                      aoeData.map((aoeUnit) => {
                        return aoeUnit.avaliable === 0 ? null : (
                          <Unit
                            key={aoeUnit.id}
                            armor={aoeUnit.armor}
                            id={aoeUnit.id}
                            attack={aoeUnit.attack}
                            name={aoeUnit.name}
                            avaliable={aoeUnit.avaliable}
                          />
                        );
                      })}
                  </>
                )}
              </UnitsGrid>
            )}
          </>
        )}
      </Left>
      <Right>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ResourcesTable className="grid">
            <AoeH1>Uzupełnij posiadane surowce</AoeH1>
            <Resources>
              {" "}
              <Label htmlFor="Wood">Drewno</Label>
              <Input
                id="Wood"
                type="number"
                {...register("Wood", {
                  required: false,
                  valueAsNumber: true,
                })}
              />
            </Resources>
            <Resources>
              <Label htmlFor="Food">Żywność</Label>
              <Input
                type="number"
                id="Food"
                {...register("Food", {
                  required: false,
                  valueAsNumber: true,
                })}
              />
            </Resources>
            <Resources>
              <Label htmlFor="Stone">Kamień</Label>
              <Input
                type="number"
                id="Stone"
                {...register("Stone", {
                  required: false,
                  valueAsNumber: true,
                })}
              />
            </Resources>
            <Resources>
              <Label htmlFor="Gold">Złoto</Label>
              <Input
                type="number"
                id="Gold"
                {...register("Gold", {
                  required: false,
                  valueAsNumber: true,
                })}
              />
            </Resources>
            <Button type="submit">oblicz</Button>
          </ResourcesTable>
        </Form>
      </Right>
    </Container>
  );
};

export default App;
