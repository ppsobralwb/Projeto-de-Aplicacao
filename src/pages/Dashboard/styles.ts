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

            &:last-child{
                text-align: center;
            }
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: #333;
            color: white;
            border-radius: 0.25rem;

            button {
                margin-left: 0.25rem;
                padding: 0.5rem;
                width: 5rem;
            
                font-weight: 700;
                border: none;
                border-radius: 6px;
                margin-top: 0.5rem;
                text-transform: uppercase;
                transition: 0.4s;
                
                cursor: pointer;

                &:hover{
                    opacity: 0.8;
                }
            }
        }

        tbody {
            tr {
                :last-child{
                    text-align: center;
                }
            }
        }
    }
`

export const ContentContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
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