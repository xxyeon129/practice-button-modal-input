import styled from "styled-components";

export default function Select() {
    return (
        <SelectContainer>
            <h1>Select</h1>
            <SelectWrapperStyle>
                <select>
                    <option value="" selected>
                        리액트
                    </option>
                    <option>리액트</option>
                    <option>자바</option>
                    <option>스프링</option>
                    <option>리액트 네이티브</option>
                </select>
                <select>
                    <option value="" selected>
                        리액트
                    </option>
                    <option>리액트</option>
                    <option>자바</option>
                    <option>스프링</option>
                    <option>리액트 네이티브</option>
                </select>
            </SelectWrapperStyle>
        </SelectContainer>
    );
}

const SelectContainer = styled.div`
    margin-top: 2.5rem;
    height: 10rem;
    border: 3px solid rgb(221, 221, 221);
    border-radius: 1rem;
    padding: 0 2rem;
    overflow: hidden;
`;

const SelectWrapperStyle = styled.div`
    display: flex;
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
