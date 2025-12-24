import styled from "styled-components";

export const Conteiner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 730px;
  width: 100%;
  max-height: 283px;
  height: auto;

  border-radius: 10px;

  @media (max-width: 763px) {
    flex-direction: column;
  }
`;

export const ImgArticlePreview = styled.figure`
  width: auto;
  height: 283px;
  object-fit: cover;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  img {
    width: 355px;
    height: 283px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  @media (max-width: 763px) {
    height: 202px;
    img {
      width: 328px;
      height: 202px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0;
    }
  }
`;
export const ColonaArticle = styled.article`
  background-color: hsla(0, 0%, 100%, 1);
  width: 446px;
  height: 283px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 40px;
  padding: 32px 40px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 763px) {
    width: 328px;

    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const TitleArticle = styled.h2`
  font-size: 18px;
  text-align: left;
  color: #313131ff;

  @media (max-width: 763px) {
    font-size: 15px;
  }
`;
export const DescriptionArticle = styled.p`
  font-size: 13px;
  text-align: left;
  color: #474747ff;

  @media (max-width: 763px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const ConteinerInfor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  position: relative;

  @media (max-width: 763px) {
  }
`;

export const GrupoInfor = styled.address`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-style: normal;
`;

export const ImgAutor = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
`;

export const ConteinerNomeDatAutor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0px;
`;
export const NomeAutor = styled.h4`
  font-size: 14px;
  color: #313131ff;
`;

export const DatArticle = styled.p`
  font-size: 14px;
  color: #474747ff;
`;
