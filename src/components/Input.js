import { useState } from "react";
import styled from "styled-components";

export default function Input() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("0");

    const priceInputHandler = (e) => {
        const priceStr = e.target.value;
        const priceNum = Number(priceStr.replaceAll(",", ""));
        setPrice(priceNum.toLocaleString());
    };

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
