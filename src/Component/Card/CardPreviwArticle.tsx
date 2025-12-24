import ImagArticle from "../../assets/drawers.jpg";
import Autor from "../../assets/avatar-michelle.jpg";
import SocialModal from "../SocialModal/SocialModal";


import {
  Conteiner,
  ImgArticlePreview,
  ColonaArticle,
  TitleArticle,
  DescriptionArticle,
  ConteinerInfor,
  GrupoInfor,
  ImgAutor,
  ConteinerNomeDatAutor,
  NomeAutor,
  DatArticle,
} from "./StyleCardPreviwArticle";


function CardPreviwArticle() {
  return (
    <>
      <Conteiner>
        <ImgArticlePreview>
          <img src={ImagArticle} alt="Ilustração de móveis e decoração de interior" />
        </ImgArticlePreview>
        <ColonaArticle>
          <TitleArticle>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </TitleArticle>
          <DescriptionArticle>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </DescriptionArticle>
          <ConteinerInfor>
            <GrupoInfor>
              <ImgAutor src={Autor} alt="Foto do autor Michelle Appleton" />
              <ConteinerNomeDatAutor>
                <NomeAutor> Michelle Appleton</NomeAutor>
                <DatArticle as="time" dateTime="2020-06-28">28 Jun 2020 </DatArticle>
              </ConteinerNomeDatAutor>
            </GrupoInfor>

            <SocialModal />
          </ConteinerInfor>
        </ColonaArticle>
      </Conteiner>
    </>
  );
}

export default CardPreviwArticle;
