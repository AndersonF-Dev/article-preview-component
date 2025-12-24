import { useState } from "react";
import IconShareDark from "../../assets/icon-share-dark.svg";
import IconShareLight from "../../assets/icon-share-light.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import {
  ButtonConpartilha,
  ConteinerGeral,
  CaixaRedes,
  SetaBaixo,
} from "./styleSocialModal";

function SocialModal() {
  const [aberto, setAberto] = useState<boolean>(false);

  return (
    <ConteinerGeral>
      <CaixaRedes
        data-open={aberto}
        id="social-modal"
        role="dialog"
        aria-hidden={!aberto}
      >
        <p>Share</p>
        <div className="links">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
        <SetaBaixo />
      </CaixaRedes>

      <ButtonConpartilha
        onClick={(e) => {
          e.stopPropagation();
          setAberto((prev) => !prev);
        }}
        data-open={aberto}
        aria-haspopup="dialog"
        aria-expanded={aberto}
        aria-controls="social-modal"
      >
        <img src={aberto ? IconShareLight : IconShareDark} alt="Share" />
      </ButtonConpartilha>
    </ConteinerGeral>
  );
}

export default SocialModal;
