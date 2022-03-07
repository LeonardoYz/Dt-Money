import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /*==== Colors =======================*/
    --purple-color: hsl(256, 67%, 48%);
    --purple-light-color: hsl(256, 100%, 60%);
    --green-color: hsl(158, 60%, 50%);
    --red-color: hsl(350, 79%, 54%);

    --title-color: hsl(227, 28%, 29%);
    --text-color: hsl(228, 16%, 65%);

    --input-bg-color:	hsl(223, 17%, 92%);
    --input-border-color: hsl(0, 0%, 84%);

    --bg-color: hsl(216, 20%, 95%);
    --neutral-color: hsl(0, 0%, 100%);

    /*==== Font Size =======================*/
    --bigger-font-size: 2.25rem;
    --big-font-size: 1.5rem;
    --normal-font-size: 1rem;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 720px) {
      font-size: 87.5%; 
    }

    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }
  }

  body {
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  img { 
    width: 100%;
    height: auto
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: hsla(0, 0%, 0%, 0.5);
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms ease-out, transform 300ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    transform: translateY(0);
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    transform: translateY(-20px);
    opacity: 0;
  }

  .react-modal-content {
    position: relative;
    padding: 4rem 3rem;
    background-color: var(--bg-color);
    width: 36rem;
    border-radius: 0.313rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1.313rem;
    right: 1.313rem;
    border: none;
    background-color: transparent;
    transition: filter 280ms ease-out;

    &:hover {
      filter: brightness(0.8);
    }

    img {
      width: 1rem;
    }
  }
`