import { useState } from 'react';
import * as S from './styles';

function SignIn() {

    const [form,setForm] = useState({
        email: {
          hasChanged: false,
          value: ""
        },
        password: {
          hasChanged: false,
          value: ""
        }
      })

      const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
      return (
        <S.Container className='centralize'>
          <S.Form>
            <S.Input type="email" placeholder="Digite seu email" value={form.email.value}
              onChange={e => setForm({...form, email: {
                hasChanged: true, value: e.target.value}})}
                data-testeid='email'
            />
            {
              form.email.hasChanged && !form.email.value
              && <div data-testeid='email-required'> Email é obrigatório</div>
            }
            {
              form.email.hasChanged && !isEmailValid(form.email.value)
              && <div data-testeid='email-invalid'> Este email é inválido</div>
            }
    
            <S.Input type="password" placeholder="Digite sua senha" value={form.password.value}
              onChange={e => setForm({...form, password: {
                hasChanged: true, value: e.target.value}})} data-test-id="password"
            />
            {
              form.password.hasChanged && !form.password.value
              && <div data-testeid='password-required'> Senha é obrigatório</div>
            }
    
            <S.Button  type="button" className='clear'>Recuperar senha</S.Button >
            <S.Button  type="button" className='solid'>Entrar</S.Button >
            <S.Button  type="button" className='outline'>Registrar</S.Button >
          </S.Form>
        </S.Container>
      );
    }
    

export default SignIn;
