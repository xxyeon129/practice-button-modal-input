import * as Style from "./SelectStyle";
import { useState } from "react";

export default function FirstSelect({ options, optionClickHandler }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(null);

    return (
        <Style.SelectWrapper>
            <Style.DropdownMain onClick={() => setIsOpen(!isOpen)}>
                {selectOption || "React"}
                <i class="fa-solid fa-chevron-down"></i>
            </Style.DropdownMain>
            {isOpen && (
                <Style.DropdownListContainer>
                    <Style.DropdownList>
                        {options.map((option) => (
                            <Style.ListItem
                                onClick={() =>
                                    optionClickHandler(
                                        option,
                                        setSelectOption,
                                        setIsOpen
                                    )
                                }
                            >
                                {option}
                            </Style.ListItem>
                        ))}
                    </Style.DropdownList>
                </Style.DropdownListContainer>
            )}
        </Style.SelectWrapper>
    );
}
