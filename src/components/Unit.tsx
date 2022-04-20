import React from "react";
import att from "./img/att.png";
import def from "./img/def.png";
import {
  Container,
  Wrapper,
  Num,
  Info,
  Profession,
  Stats,
  Armor,
  Attack,
  HowMany,
  Ico,
} from "./Unit.styles";

type Props = {
  name: string;
  id: number;
  armor: number;
  attack: number;
  avaliable: number;
};

const Unit: React.FC<Props> = ({ name, id, armor, attack, avaliable }) => {
  return (
    <Container>
      <Wrapper>
        <Num>{id}</Num>
        <Info>
          <Profession>{name}</Profession>
          <Stats>
            <Armor>
              <Ico src={def} />
              {armor}
            </Armor>
            <Attack>
              <Ico src={att} />
              {attack}
            </Attack>
          </Stats>
        </Info>
      </Wrapper>

      <HowMany>{avaliable}</HowMany>
    </Container>
  );
};

export default Unit;
