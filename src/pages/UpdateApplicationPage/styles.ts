import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin-top: 2rem;
`

export const ApplicationFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 2rem;
    margin: 2rem 0 1rem 0;
    width: 40rem;
`

export const ParameterContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr auto;
    align-items: center;
    margin: 0.5rem;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid gray;
    border-radius: 5px;
`
export const IconButton = styled.button`
    border: none;
    cursor: pointer;
`
export const Label = styled.label`
    font-weight: 600;
    font-size: medium;
`

export const Input = styled.input`
    width: 100%;
    padding: .5rem;
    border-radius: 5px;
    outline: none;
    border: none;
    margin: 0.5rem 0 0.5rem 0;
`

export const ParameterSelect = styled.select`
    width: 100%;
    padding: .5rem;
    border-radius: 5px;
    outline: none;
    margin: 0.5rem 0 0.5rem 0;
`