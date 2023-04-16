import { useState } from 'react';
import * as S from './styles';

function App() {

  const [form,setForm] = useState({
    email: {
      hasChanged: false,
      value: ""
    }
  })



  return (
    <S.Container className='centralize'>
      <S.Form>
        <S.Input type="email" placeholder="Digite seu email" value={form.email.value}
          onChange={e => setForm({...form, email: {
            hasChanged: true, value: e.target.value}})}
            data-testeid='email' />
        {
          form.email.hasChanged && !form.email.value
          && <div data-testeid='email-required'> Email é obrigatório</div>
        }

        <S.Input type="password" placeholder="Digite sua senha" />

        <S.Button  type="button" className='clear'>Recuperar senha</S.Button >
        <S.Button  type="button" className='solid'>Entrar</S.Button >
        <S.Button  type="button" className='outline'>Registrar</S.Button >
      </S.Form>
    </S.Container>
  );
}

export default App;
