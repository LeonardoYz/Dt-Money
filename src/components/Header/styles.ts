import styled from "styled-components"

export const Container = styled.header`
  background-color: var(--purple-color);
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  padding: 2rem 1rem 8.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .header {
    &__logo {
      img {
        width: 10.8rem;
      }
    } 

    &__button {
      padding: 0.75rem 2rem;
      background-color: var(--purple-light-color);
      color: var(--neutral-color);
      border: none;
      border-radius: 0.313rem;
      font-weight: 600;
      font-size: var(--normal-font-size);

      transition: opacity 280ms ease-in-out;

      &:hover {
        opacity: 0.85;
      }
    }
  }
`