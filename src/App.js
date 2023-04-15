import * as S from './styles';

function App() {
  return (
    <S.Container className='centralize'>
      <S.Form>
        <S.Input type="email" placeholder="Digite seu email"  data-testeid='email' />
        <S.Input type="password" placeholder="Digite sua senha" />

        <S.Button  type="button" className='clear'>Recuperar senha</S.Button >
        <S.Button  type="button" className='solid'>Entrar</S.Button >
        <S.Button  type="button" className='outline'>Registrar</S.Button >
      </S.Form>
    </S.Container>
  );
}

export default App;
