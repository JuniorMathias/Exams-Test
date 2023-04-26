import * as S from './styles';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import logo from '../../assets/logo.png';
import { IsPasswordValid } from '/home/jorgejunior/Área de Trabalho/exam-system/src/helpers/PasswordHelper.jsx';



function Register() {
  const [ name, setName ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState('');

  const { signUp, loadingAuth, errorRegister } = useContext(AuthContext);

function handleSubmit(e){
  const regExp = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
  e.preventDefault();
    if(name !== '' && email !== '' && password !== '' && confirmPassword !== ''&& birth !== ''){
        if(password ===  confirmPassword){
            if(regExp.test(password)){
              signUp(email, password, name, birth,phone);
              setErrors("")
            }else{
              setErrors("Senha deve conter letras, números e caracteres especiais")
            }
        }else{
        setErrors("Senhas estão diferentes");
        }
    }else{
      setErrors("Preencha todos os dados obrigatórios");
    }
}
function getPasswordStrength() {
  return IsPasswordValid(password);
}
function getPasswordStrength() {
  const strength = IsPasswordValid(password);
  return <span className={(strength || '').replace(/\s+/g, "")}>{strength}</span>;
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
            <S.Row>
            <S.Label style={{width:'50%'}}>Data de Nascimento<i style={{color:'red'}}>*</i></S.Label>
            <S.Label>Telefone</S.Label>
            </S.Row>
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
          <S.Row>
            <S.Label style={{width:'50%'}}>Senha<i style={{color:'red'}}>*</i></S.Label>
            <S.Label>Confirmar senha<i style={{color:'red'}}>*</i></S.Label>
            </S.Row>
          <S.Row>
            <S.Input
              type="password"
              placeholder="*******"
              value={password}
              autoComplete="new-password"
              style={{marginRight:'10px'}}
              onChange={ (e) => setPassword(e.target.value)} 
            />
            <S.Input
              type="password"
              placeholder="Confirme seu email"
              value={confirmPassword}
              onChange={ (e) => setConfirmPassword(e.target.value)} 
            />
          </S.Row>
          <span className='forcaSenha'>{password == ''  ? getPasswordStrength() == '' : getPasswordStrength()}</span>
          <S.labelError>{errors}</S.labelError>
          <S.labelError>{errorRegister}</S.labelError>
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
