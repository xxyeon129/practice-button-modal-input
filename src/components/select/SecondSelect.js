import * as Style from "./SelectStyle";
import { useState } from "react";

export default function SecondSelect({ options, optionClickHandler }) {
    const [secondOpen, setSecondOpen] = useState(false);
    const [selectSecondOption, setSelectSecondOption] = useState(null);

    return (
        <Style.ShowSelectWrapper>
            <Style.DropdownMain onClick={() => setSecondOpen(!secondOpen)}>
                {selectSecondOption || "React"}
                <i class="fa-solid fa-chevron-down" />
            </Style.DropdownMain>
            {secondOpen && (
                <Style.DropdownListContainer>
                    <Style.DropdownList>
                        {options.map((option) => (
                            <Style.ListItem
                                onClick={() =>
                                    optionClickHandler(
                                        option,
                                        setSelectSecondOption,
                                        setSecondOpen
                                    )
                                }
                            >
                                {option}
                            </Style.ListItem>
                        ))}
                    </Style.DropdownList>
                </Style.DropdownListContainer>
            )}
        </Style.ShowSelectWrapper>
    );
}
