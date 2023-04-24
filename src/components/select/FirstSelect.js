import * as Style from "./SelectStyle";
import { useState } from "react";

export default function FirstSelect({ options, optionClickHandler }) {
    // 첫 번째 Select dropdown, option 선택 상태
    const [isOpen, setIsOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(null);

    return (
        <Style.SelectWrapper>
            {/* default select */}
            <Style.DropdownMain onClick={() => setIsOpen(!isOpen)}>
                {selectOption || "React"}

                {/* 우측 화살표 아이콘 */}
                <i class="fa-solid fa-chevron-down"></i>
            </Style.DropdownMain>

            {/* select 클릭 시 나오는 dropdown list */}
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
