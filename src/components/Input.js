import { useState } from "react";
import styled from "styled-components";

export default function Input() {
    // 이름, 가격 Input 상태
    const [name, setName] = useState("");
    const [price, setPrice] = useState("0");

    // 입력한 숫자 3자리 수마다 콤마가 찍히는 로직
    const priceInputHandler = (e) => {
        const priceStr = e.target.value;
        const priceNum = Number(priceStr.replaceAll(",", ""));
        setPrice(priceNum.toLocaleString());
    };

    // 저장 버튼 클릭 시 이벤트
    const btnClickHandler = () => {
        if (name === "") {
            alert("이름과 가격을 입력해주세요.");
        } else {
            alert(`{ name: ${name}, price: ${price} }`);
        }
    };

    return (
        <>
            <h1>Input</h1>
            <InputContainerStyle>
                <label>이름</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <label id="price">가격</label>
                <input
                    type="text"
                    value={price}
                    onChange={priceInputHandler}
                ></input>
                <button onClick={btnClickHandler}>저장</button>
            </InputContainerStyle>
        </>
    );
}

const InputContainerStyle = styled.div`
    #price {
        /* 이름 - 가격 input 간 간격 설정 */
        margin-left: 1.5rem;
    }

    input {
        margin-left: 0.5rem;
        padding: 1rem;
        border: 1px solid;
        border-radius: 0.5rem;
        width: 13rem;
    }

    button {
        margin-left: 2rem;
    }
`;
