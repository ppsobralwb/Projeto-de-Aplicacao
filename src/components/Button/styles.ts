import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 1.5rem;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  margin-top: 0.5rem;
  text-transform: uppercase;
  transition: 0.4s;

  width: 100%;
  background: #222;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: #333;
  }
`;

