import styled from "styled-components";
import { darken, transparentize } from "polished"

export const Container = styled.form`
  .form {
    &__title {
      color: var(--title-color);
      font-size: var(--big-font-size);
      font-weight: 600;
      margin-bottom: 2rem;
    }

    &__inputs {
      display: grid;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
  
    &__input {
      width: 100%;
      padding: 1.25rem 1.5rem;
      font-size: var(--normal-font-size);
      border: 1px solid var(--input-border-color);
      border-radius: 0.313rem;
      background-color: var(--input-bg-color);
      outline: none;
      transition: border-color 280ms ease-in;

      &:focus {
        border-color: var(--green-color);
      }
  
      &::placeholder {
        color: var(--text-color);
        font-size: var(--normal-font-size);
      }
    }

    &__button {
      width: 100%;
      padding: 1.25rem 0;
      font-size: var(--normal-font-size);
      font-weight: 600;
      border: none;
      border-radius: 0.313rem;
      background-color: var(--green-color);
      color: var(--neutral-color);
      transition: background-color 280ms ease-out;

      &:hover {
        background-color: ${darken(0.05, "hsl(158, 60%, 50%)")};
      }
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "hsl(158, 60%, 50%)",
  red: "hsl(350, 79%, 54%)"
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1.5px solid var(--input-border-color);
  border-radius: 0.313rem;

  background-color: ${props => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : "transparent"
  };

  height: 4rem;
  width: 100%;
  transition: border-color 280ms ease-out;

  &:hover {
    border-color: ${darken(0.1, "hsl(0, 0%, 84%)")};
  }

  img {
    width: 1.5rem;
  }

  span {
    font-size: var(--normal-font-size);
  }
`