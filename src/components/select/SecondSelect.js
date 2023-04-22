import * as Style from "./SelectStyle";
import { useState } from "react";

export default function SecondSelect({ options, optionClickHandler }) {
    // 두 번째 Select dropdown, option 선택 상태
    const [secondOpen, setSecondOpen] = useState(false);
    const [selectSecondOption, setSelectSecondOption] = useState(null);

    return (
        <Style.ShowSelectWrapper>
            {/* default select */}
            <Style.DropdownMain onClick={() => setSecondOpen(!secondOpen)}>
                {selectSecondOption || "React"}

                {/* 우측 화살표 아이콘 */}
                <i class="fa-solid fa-chevron-down" />
            </Style.DropdownMain>

            {/* select 클릭 시 나오는 dropdown list */}
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
