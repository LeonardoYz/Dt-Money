import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div className="card">
        <header className="card__header">
          <p className="card__title">Entradas</p>
          <img className="card__icon" src={incomeImg} alt="Entradas" />
        </header>

        <strong className="card__value">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.deposits)}
        </strong>
      </div>

      <div className="card">
        <header className="card__header">
          <p className="card__title">Saídas</p>
          <img className="card__icon" src={outcomeImg} alt="Saídas" />
        </header>

        <strong className="card__value"> 
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="card">
        <header className="card__header">
          <p className="card__title">Total</p>
          <img className="card__icon" src={totalImg} alt="Entradas" />
        </header>

        <strong className="card__value">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}