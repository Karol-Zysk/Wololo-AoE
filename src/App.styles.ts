import styled from "styled-components";

export const Container = styled.div`
  padding-top: 35px;
  height: 90vh;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  background-color: white;
  /* padding: 20px; */
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100vw;
  }
`;

export const Left = styled.div`
  flex: 0.7;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 95%;

    padding-bottom: 25px;
    text-align: center;
    order: 2;
    flex: 1;
  }
`;

type Props = {
  enoughResources: boolean;
};

export const UnitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  justify-content: center;
  justify-items: center;
  grid-gap: 15px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0.7em;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.8);
    outline: 1px solid slategrey;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow: visible;
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 0.3;
  margin-left: 10px;
  justify-content: center;
  border-left: 1px solid grey;
  justify-items: center;
  @media screen and (max-width: 768px) {
    order: 1;
    flex: 1;
    width: 95%;
    border-left: none;
    padding-bottom: 25px;
    border-bottom: 1px solid grey;
    margin-left: 0;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  color: grey;
  justify-self: center;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
export const GridText = styled.p<Props>`
  font-size: 22px;
  font-weight: bold;
  width: 90%;
  text-align: ${({ enoughResources }) =>
    !enoughResources ? "left" : "center"};
  grid-column: ${({ enoughResources }) =>
    !enoughResources ? "1 / 2" : "1 / 3"};
  @media screen and (max-width: 768px) {
    grid-column: 1/-1;
  }
`;
export const EmptyCell = styled.div`
  grid-column: 2 / 3;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AoeH1 = styled.h1`
  font-size: 24px;
  justify-self: left;
  align-self: left;
  display: block;
  text-align: left;
  width: 70%;
  grid-column: 1 / -1;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  color: black;
  margin: 0 0 2px 4px;
`;
export const Input = styled.input`
  height: 25px;
  padding: 5px;
  font-size: 12px;
  border-radius: 10px;
  width: 90%;
  align-self: center;
  @media screen and (max-width: 768px) {
    padding: 3px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 10px;
  grid-column: 1 / -1;
  text-transform: uppercase;
`;

export const ResourcesTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  place-self: center;
  grid-gap: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Resources = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    width: 110px;
    height: 110px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #f25a41;
    border-radius: 100%;
    will-change: transform;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
