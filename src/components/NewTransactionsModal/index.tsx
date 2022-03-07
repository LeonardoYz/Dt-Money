import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";

import closeIcon from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionsModal({ isOpen, onRequestClose}: NewTransactionsModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("")
  const [type, setType] = useState("deposit")

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle("")
    setAmount(0)
    setCategory("")
    setType("deposit")
    onRequestClose()
  }
  
  return (
    <Modal 
      closeTimeoutMS={300}
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        className="react-modal-close" 
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeIcon} alt="Fechar modal" />  
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2 className="form__title">Cadastrar transação</h2>

        <div className="form__inputs">
          <input
            className="form__input" 
            type="text" 
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input
            className="form__input" 
            type="number" 
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              className="transaction-type-button"
              onClick={() => { setType("deposit")}}
              isActive={type === "deposit"}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              className="transaction-type-button"
              onClick={() => { setType("withdraw")}}
              isActive={type === "withdraw"}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            className="form__input" 
            type="text" 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
        </div>

        <button className="form__button" type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}