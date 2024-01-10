import styled from "styled-components";

export const Container = styled.div `
    margin-top: 2rem;
    
    table {
        width: 100%;
        border-spacing: 0.5rem;
        padding: 0 6rem 0 6rem;

        th {
            color: black;
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: #333;
            color: white;
            border-radius: 0.25rem;
        }
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 6rem 0 6rem;
    margin-bottom: 2rem;
`
export const MenuContainer = styled.nav`
    display: grid;
    gap: 0.5rem;
    width: 20rem;
    grid-template-columns: 3fr 1fr;
`