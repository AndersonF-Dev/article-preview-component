import styled from "styled-components";

export const ConteinerGeral = styled.div`
  position: relative;
  display: inline-block;
`;

export const ButtonConpartilha = styled.button`
  all: unset;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-color: hsl(210, 46%, 95%);

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  position: relative;

  transition: background-color 0.25s ease, transform 0.15s ease;

  img {
    margin-bottom: 3px;
    transition: filter 0.3s ease;
  }

  &:focus-visible {
    outline: 2px solid #cf5050ff;
    outline-offset: 2px;
  }

  &[data-open="true"] {
    background-color: hsl(214, 17%, 51%); /* aberto */

    .dark {
      opacity: 0;
    }

    .light {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 763px) {
    z-index: 10;
  }
`;

export const CaixaRedes = styled.div`
  position: absolute;
  bottom: 200%;
  left: 50%;
  transform: translateX(-50%);

  width: 250px;
  background-color: hsl(217, 19%, 35%);
  color: white;
  padding: 14px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;

  z-index: 200;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;

  p {
    color: hsl(212, 23%, 69%);
    font-size: 16px;
    letter-spacing: 2px;
    padding-bottom: 4px;
    text-align: center;
    text-transform: uppercase;
  }

  &[data-open="true"] {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    gap: 25px;
  }

  @media (max-width: 763px) {
    position: absolute;
    bottom: -82%;
    left: -312%;

    width: 328px;
    background-color: hsl(217, 19%, 35%);
    color: white;
    padding: 25px 50px;
    border-radius: 0;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 25px;

    z-index: 1;
  }
`;

export const SetaBaixo = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);

  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid hsl(217, 19%, 35%);

  @media (max-width: 763px) {
    display: none;
  }
`;
