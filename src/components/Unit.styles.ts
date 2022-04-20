import styled from "styled-components";

export const Container = styled.div`
  height: 25px;
  padding: 10px 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  justify-items: center;
  align-items: center;
  color: white;
  border-radius: 15px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Num = styled.div`
  height: 30px;
  width: 30px;
  background-color: #f2d9e5;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  color: black;
  font-size: 1.1rem;
  margin: 10px;
  margin-left: 15px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Profession = styled.div`
  display: flex;
`;
export const Stats = styled.div`
  display: flex;
  margin-top: 2px;
  font-size: 14px;
`;

export const HowMany = styled.p`
  display: block;
  font-size: 25px;
  color: white;
  margin-right: 15px;
`;

export const Attack = styled.div`
  display: flex;
  align-items: center;
`;
export const Armor = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const Ico = styled.img`
  width: 17px;
  height: 17px;
`;
