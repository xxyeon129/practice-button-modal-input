import styled from "styled-components";
import FirstSelect from "./select/FirstSelect";
import SecondSelect from "./select/SecondSelect";

export default function Select() {
    const options = ["React", "JAVA", "Spring", "React Native"];

    const optionClickHandler = (option, setSelect, setOpen) => {
        setSelect(option);
        setOpen(false);
    };

    return (
        <SelectContainer>
            <h1>Select</h1>
            <SelectContentBox>
                <FirstSelect
                    options={options}
                    optionClickHandler={optionClickHandler}
                />
                <SecondSelect
                    options={options}
                    optionClickHandler={optionClickHandler}
                />
            </SelectContentBox>
        </SelectContainer>
    );
}

const SelectContainer = styled.div`
    margin-top: 2.5rem;
    height: 15rem;
    border: 3px solid rgb(221, 221, 221);
    border-radius: 1rem;
    padding: 0 2rem;

    overflow: hidden;
    position: static;
`;

const SelectContentBox = styled.div`
    display: flex;
    gap: 1rem;
`;
