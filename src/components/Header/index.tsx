import logoImg from "../../assets/logo.svg"

import { Container, Content } from "./styles"

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="header__logo">
          <img src={logoImg} alt="dt money logo" />
        </div>

        <button 
          type="button" 
          className="header__button" 
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}