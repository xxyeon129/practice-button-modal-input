import styled from "styled-components";

export const SelectContainer = styled.div`
    margin-top: 2.5rem;
    height: 15rem;
    border: 3px solid rgb(221, 221, 221);
    border-radius: 1rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;

    overflow: hidden;
    position: static;
`;

export const SelectContentBox = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`;

export const ShowSelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    position: absolute;
    margin-left: 23.5rem;
`;

export const DropdownMain = styled.div`
    width: 20rem;
    padding: 0.8rem 1rem;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 0.5rem;

    cursor: pointer;

    display: flex;
    justify-content: space-between;
`;

export const DropdownListContainer = styled.div`
    border: 1px solid rgb(221, 221, 221);
    border-radius: 0.5rem;
    padding: 0;
    background-color: white;

    cursor: pointer;
`;

export const DropdownList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
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
