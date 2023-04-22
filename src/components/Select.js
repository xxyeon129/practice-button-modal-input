import { useState } from "react";
import styled from "styled-components";

export default function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(null);

    const options = ["React", "JAVA", "Spring", "React Native"];

    const optionClickHandler = (option) => {
        setSelectOption(option);
        setIsOpen(false);
    };

    return (
        <SelectContainer>
            <h1>Select</h1>
            <SelectContentBox>
                <SelectWrapperStyle>
                    <DropdownMain onClick={() => setIsOpen(!isOpen)}>
                        {selectOption || "React"}
                        <i class="fa-solid fa-chevron-down"></i>
                    </DropdownMain>
                    {isOpen && (
                        <DropdownListContainer>
                            <DropdownList>
                                {options.map((option) => (
                                    <ListItem
                                        onClick={() =>
                                            optionClickHandler(option)
                                        }
                                    >
                                        {option}
                                    </ListItem>
                                ))}
                            </DropdownList>
                        </DropdownListContainer>
                    )}
                </SelectWrapperStyle>
                <SelectWrapperStyle>
                    {/* <select>
                        <option value="" selected>
                            리액트
                        </option>
                        <option>리액트</option>
                        <option>자바</option>
                        <option>스프링</option>
                        <option>리액트 네이티브</option>
                    </select> */}
                </SelectWrapperStyle>
            </SelectContentBox>
        </SelectContainer>
    );
}

const SelectContainer = styled.div`
    margin-top: 2.5rem;
    height: 13rem;
    border: 3px solid rgb(221, 221, 221);
    border-radius: 1rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
`;

const SelectContentBox = styled.div`
    display: flex;
`;

const SelectWrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    select {
        /* css 설정 초기화 */
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;

        width: 20rem;
        padding: 0.8rem 1rem;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 0.5rem;
    }
`;

const DropdownMain = styled.div`
    width: 20rem;
    padding: 0.8rem 1rem;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`;

const DropdownListContainer = styled.div`
    border: 1px solid rgb(221, 221, 221);
    border-radius: 0.5rem;
    padding: 0;
    background-color: white;
    cursor: pointer;
`;

const DropdownList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    padding: 1rem 0.9rem;

    :first-child {
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
    }

    :last-child {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }

    :hover {
        background-color: rgb(221, 221, 221);
    }
`;
