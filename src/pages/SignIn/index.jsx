import * as S from './styles';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

export default function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // navegate to /admin
        navigate('/home', { replace: true } )
        setEmail('')
        setPassword('')
      })
      .catch(() => {
        toast.error("error ao fazer login")
      })

    }else{
      toast.warn("Por favor preencha todos os campos")
    }


  }


  return(
  <>
  <S.Container>
    <S.Title>Login</S.Title>
    <S.Span>faça seu login</S.Span>

    <S.Form onSubmit={handleLogin}>
      <S.Input
        type="text"
        placeholder="Type your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.Button type="submit">Login</S.Button>

    </S.Form>
    
    <S.Link to="/register">
      Não tem conta ainda? Crie agora.
    </S.Link>


  </S.Container>
  </>
  )
}