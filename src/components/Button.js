import styled from "styled-components";
import PrimaryIcon from "../icon/PrimaryIcon";
import NegativeIcon from "../icon/NegativeIcon";

export default function Button() {
  return (
    <div>
      <ButtonAreaWrapper>
        <ButtonText>Button</ButtonText>
        <PrimaryButtons>
          {primary.map((item, index) => (
            <ButtonComponent
              onClick={() =>
                item === "Large Primary Button" && alert("버튼을 만들어보세요")
              }
              key={index}
              size={item}
              type="primary"
            >
              <ButtonInnerDiv>
                {item}
                <ButtonInnerIconDiv>
                  {item === "Large Primary Button" ? (
                    <PrimaryIcon></PrimaryIcon>
                  ) : null}
                </ButtonInnerIconDiv>
              </ButtonInnerDiv>
            </ButtonComponent>
          ))}
        </PrimaryButtons>
        <NegativeButtons>
          {negative.map((item, index) => (
            <ButtonComponent
              onClick={() =>
                item === "Large Negative Button" && prompt("어렵나요?")
              }
              key={index}
              size={item}
              type="negative"
            >
              <ButtonInnerDiv>
                {item}
                <ButtonInnerIconDiv size={item} type="negative">
                  {item === "Large Negative Button" ? (
                    <NegativeIcon></NegativeIcon>
                  ) : null}
                </ButtonInnerIconDiv>
              </ButtonInnerDiv>
            </ButtonComponent>
          ))}
        </NegativeButtons>
      </ButtonAreaWrapper>
    </div>
  );
}

const primary = ["Large Primary Button", "Medium", "Small"];
const negative = ["Large Negative Button", "Medium", "Small"];

const ButtonText = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const ButtonComponent = styled.button`
  padding: 1px 6px;
  ${(props) =>
    props.size === "Large Primary Button" ||
    props.size === "Large Negative Button"
      ? "cursor: pointer; color: rgb(0, 0, 0); height: 50px; width: 200px; background-color: rgb(255, 255, 255); font-weight: 600;"
      : props.size === "Medium"
      ? "cursor: pointer; background-color: rgb(85, 239, 196); color: rgb(0, 0, 0); height: 45px; width: 130px;"
      : "cursor: pointer; background-color: rgb(85, 239, 196); color: rgb(0, 0, 0); height: 40px; width: 100px;"}
  border: ${(props) =>
    props.size === "Large Primary Button" ||
    props.size === "Large Negative Button"
      ? props.type === "primary"
        ? "3px solid rgb(85, 239, 196);"
        : "3px solid rgb(250, 177, 160);"
      : "none;"};
  background-color: ${(props) =>
    props.size === "Large Primary Button" ||
    props.size === "Large Negative Button"
      ? "rgb(255,255,255)"
      : props.type === "primary"
      ? "rgb(85, 239, 196);"
      : "rgb(250, 177, 160);"};
  color: ${(props) =>
    props.type === "primary" ? "rgb(0,0,0)" : "rgb(214, 48, 49)"};

  :active {
    filter: brightness(80%);
  }
`;

const ButtonInnerDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 7px;
`;

const ButtonInnerIconDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const ButtonAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PrimaryButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const NegativeButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
