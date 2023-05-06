import { useContext } from "react";
import * as S from './styles';


const Welcome = () => {

  return (
    <S.Welcome>
      <S.H2>Análise e desenvolvimento de sistemas</S.H2>
      <S.P>Clique no botão abaixo para começar:</S.P>
      <S.Button>
        Iniciar
      </S.Button>
    </S.Welcome>
  );
};

export default Welcome;