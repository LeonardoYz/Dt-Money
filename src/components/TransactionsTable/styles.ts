import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-color);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-weight: 400;
    }

    tbody {
      tr {
        background-color: var(--neutral-color);
      }
    }

    td {
      padding: 1.25rem 2rem;
      border: none;
      color: var(--text-color);

      &:first-child {
        color: var(--title-color);
        border-radius: 0.313rem 0 0 0.313rem;
      }

      &:last-child {
        border-radius: 0 0.313rem 0.313rem 0;
      }

      &.deposit {
        color: var(--green-color);
      }

      &.withdraw {
        color: var(--red-color);
      }
    }
  }
`