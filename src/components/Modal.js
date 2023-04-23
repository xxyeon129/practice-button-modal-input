import styled from "styled-components";
import { ButtonComponent } from "./Button";
import { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState({ onoff: false, which: "first" });

  const modalClose = () => {
    if (modal.which === "second") {
      setModal({ onoff: false, which: modal.which });
    }
  };
  return (
    <>
      <ModalText>Modal</ModalText>
      <OpenModalButtons>
        <div>
          <ButtonComponent
            onClick={() => setModal({ onoff: true, which: "first" })}
            size="Small"
            type="primary"
          >
            open modal
          </ButtonComponent>
        </div>
        <div>
          <ButtonComponent
            onClick={() => setModal({ onoff: true, which: "second" })}
            size="Large Negative Button"
          >
            open modal
          </ButtonComponent>
        </div>
      </OpenModalButtons>
      {modal.onoff === true ? (
        <ModalWrapper>
          <Translucent onClick={modalClose}></Translucent>
          {modal.which === "first" ? (
            <ModalWindow1>
              <div>
                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요.
              </div>
              <Buttons>
                <div>
                  <ButtonComponent
                    onClick={() =>
                      setModal({ onoff: false, which: modal.which })
                    }
                  >
                    닫기
                  </ButtonComponent>
                </div>
                <div>
                  <ButtonComponent
                    onClick={() =>
                      setModal({ onoff: false, which: modal.which })
                    }
                    type="primary"
                    size="Small"
                  >
                    확인
                  </ButtonComponent>
                </div>
              </Buttons>
            </ModalWindow1>
          ) : (
            <ModalWindow2>
              <div>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</div>
              <IconOfModalDiv>
                <ModalCloseButton
                  onClick={() => setModal({ onoff: false, which: modal.which })}
                >
                  X
                </ModalCloseButton>
              </IconOfModalDiv>
            </ModalWindow2>
          )}
        </ModalWrapper>
      ) : null}
    </>
  );
}

const ModalWrapper = styled.div``;

const ModalText = styled.div`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const OpenModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Translucent = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

const ModalWindow1 = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(20%, -70%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

const ModalWindow2 = styled.div`
  transform: translate(50%, -80%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 200px;
`;

const IconOfModalDiv = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const ModalCloseButton = styled.button`
  background-color: rgb(221, 221, 221);
  border: 1px solid rgb(221, 221, 221);
  padding: 0;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
`;
