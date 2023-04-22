import { useState } from "react";
import styled from "styled-components";

export default function Input() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const priceInputHandle = (e) => {
        const priceStr = e.target.value;
        const priceNum = Number(priceStr.replaceAll(",", ""));
        setPrice(priceNum.toLocaleString());
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
                    onChange={priceInputHandle}
                ></input>
                <button
                    onClick={() => alert(`{ name: ${name}, price: ${price} }`)}
                >
                    저장
                </button>
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
