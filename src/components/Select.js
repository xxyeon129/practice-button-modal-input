import { useState } from "react";
import styled from "styled-components";

export default function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(null);
    const [selectSecondOption, setSelectSecondOption] = useState(null);

    const options = ["React", "JAVA", "Spring", "React Native"];

    const optionClickHandler = (option, setSelect, setOpen) => {
        setSelect(option);
        setOpen(false);
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
                                            optionClickHandler(
                                                option,
                                                setSelectOption,
                                                setIsOpen
                                            )
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
                    <DropdownMain onClick={() => setSecondOpen(!secondOpen)}>
                        {selectSecondOption || "React"}
                        <i class="fa-solid fa-chevron-down"></i>
                    </DropdownMain>
                    {secondOpen && (
                        <DropdownListContainer>
                            <DropdownList>
                                {options.map((option) => (
                                    <ListItem
                                        onClick={() =>
                                            optionClickHandler(
                                                option,
                                                setSelectSecondOption,
                                                setSecondOpen
                                            )
                                        }
                                    >
                                        {option}
                                    </ListItem>
                                ))}
                            </DropdownList>
                        </DropdownListContainer>
                    )}
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
    gap: 1rem;
`;

const SelectWrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
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
