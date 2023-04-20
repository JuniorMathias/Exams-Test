import * as S from './styles';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
//import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Slide } from 'react-toastify';

function Register() {
  const [ name, setName ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const { signUp, loadingAuth } = useContext(AuthContext);

function handleSubmit(e){
  e.preventDefault();

  if(name !== '' && email !== '' && password !== '' && birth !== ''){
    signUp(email, password, name, birth,phone);
  }else{
    setError("preencha todos os dados");
  }
}

  return (
    <S.Container>
      <S.Content>
        <S.LoginArea>
          <S.MyIcon src={logo} alt="Logo System" />
        </S.LoginArea>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Nova conta</S.Title>
          <S.Label>Nome Completo<i style={{color:'red'}}>*</i></S.Label>
            <S.Row>
              <S.Input
                type="text"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={ (e) => setName(e.target.value)} 
              />
            </S.Row>
            <S.Label>Data de Nascimento<i style={{color:'red'}}>*</i></S.Label>
          <S.Row>
            <S.Input
              type="date"
              label="Data de Nascimento"
              value={birth}
              onChange={ (e) => setBirth(e.target.value)}
              style={{marginRight:'10px'}}
            />
            
            <S.Input
              type="number"
              placeholder="Telefone"
              value={phone}
              onChange={ (e) => setPhone(e.target.value)} 
            />
          </S.Row>
          <S.Label>Email<i style={{color:'red'}}>*</i></S.Label>
          <S.Row>
            <S.Input
              type="text"
              placeholder="Digite seu email"
              value={email}
              onChange={ (e) => setEmail(e.target.value)} 
            />
          </S.Row>
          <S.Label>Senha<i style={{color:'red'}}>*</i></S.Label>
          <S.Row>
            <S.Input
              type="password"
              placeholder="*******"
              value={password}
              onChange={ (e) => setPassword(e.target.value)} 
            />
          </S.Row>
          <S.labelError>{error}</S.labelError>
          <S.Button
            type="submit"
          >
            {loadingAuth ? 'Carregando...' : 'Cadastrar'}
          </S.Button>
        </S.Form>
        <S.Link to="/">Já possui conta? Faça o login</S.Link>
      </S.Content>
    </S.Container>
  );
}

export default Register;
