import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: calc(-4.25rem - 2.5rem);

  .card {
    padding: 1.5rem 1.25rem 1.133rem 2rem;
    background-color: var(--neutral-color);
    border-radius: 0.313rem;
    color: var(--title-color);

    &:last-child {
      background-color: var(--green-color);
      color: var(--neutral-color);
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.881rem;
    }

    &__icon {
      width: 2rem;
    }

    &__value {
      display: block;
      font-weight: 500;
      font-size: var(--bigger-font-size);
    }
  }
`