import { useState } from 'react'
import * as S from './styles';
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  //configurando criação do usuário com o bd
  async function handleRegister(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/home', { replace: true })
        toast.success("tudo ok");
      })
      .catch((error) => {
        alert("Error creating" + error.message)
      })


    }else{
      toast.warn("fill in email and password");
    }


  }


  return(
  <>
  <S.Container>
    <S.Title>Faça seu login</S.Title>
    <S.Span>Vamos criar sua conta</S.Span>

    <S.Form onSubmit={handleRegister}>
      <S.Input
        type="text"
        placeholder="Digite seu email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.Button type="submit">Register</S.Button>

    </S.Form>
    
    <S.Link to="/">
      Já possui conta? Faça o login
    </S.Link>


  </S.Container>
  </>
  )
}