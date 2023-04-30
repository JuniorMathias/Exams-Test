import { useState, useContext } from 'react';
import * as S from './styles';
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/auth';
import { toast } from "react-toastify";
import NavBar from '../../components/NavBar';

import firebase from '../../services/firebaseConnection';


import { FiUpload } from 'react-icons/fi';


export default function Profile(){
  const { user,loadingAuth } = useContext(AuthContext);

  const [name, setName] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [birth, setBirth] = useState(user && user.nascimento);
  const [phone, setPhone] = useState(user.telefone);
  const [imageAvatar, setImageAvatar] = useState(null);
  const [errors, setErrors] = useState('');

//  preview before upload it
function handleFile(e){
  //console.log(e.target.files[0]);
  if(e.target.files[0]){
    const image = e.target.files[0];
    if(image.type === 'image/jpeg' || image.type === 'image/png'){
      setImageAvatar(image);
      //creating a URl from the main target
      setAvatarUrl(URL.createObjectURL(e.target.files[0]))
    }else {
      toast.error("Only PNG and JPEG images are supported");
      setImageAvatar(null);
      return null;
    }
  }
}

// uploading a new photo 
async function handleUpload(){


}

  async function handleSave(e){
   
  }

  return(
      <>
      <NavBar />
        <S.Container>
            <S.Content className='content'>  
              <S.Form onSubmit={handleSave}>
              <S.LabelAvatar>
                  <S.Span>
                    <FiUpload color='#fff' size={25} />
                  </S.Span>
                  <S.FormInputFile
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                  />
                  <S.AvatarImage>
                  { avatarUrl == null ? 
                    <img src={avatar} width={250} height={250} alt="profile pic" />
                     :
                     <img src={avatarUrl} width="250" height="250" alt="profile pic" />
                  }
                  </S.AvatarImage>
                </S.LabelAvatar>
            <S.Row>
                <S.Label>Name</S.Label>
            <S.Input
                type="text"
                value={name}
                onChange={ (e) => setName(e.target.value)} 
                />
            </S.Row>
          <S.Row>
          <S.Label style={{width:'50%'}}>Data de Nascimento<i style={{color:'red'}}>*</i></S.Label>
            <S.Input
              type="date"
              label="Data de Nascimento"
              value={birth}
              onChange={ (e) => setBirth(e.target.value)}
              style={{marginRight:'10px'}}
            />
            </S.Row>
            <S.Row>
            <S.Label>Telefone</S.Label>
            <S.Input
              type="number"
              placeholder="Telefone"
              value={phone}
              onChange={ (e) => setPhone(e.target.value)} 
            />
          </S.Row>
         
          <S.Row>
          <S.Label>Email<i style={{color:'red'}}>*</i></S.Label>
            <S.Input
                type="text"
                value={email}
                disabled={true}
                style={{ cursor: 'not-allowed'}}
                />
          </S.Row>
          
          <S.labelError>{errors}</S.labelError>
          <S.Button
            type="submit"
          >
            {loadingAuth ? 'Carregando...' : 'Salvar'}
          </S.Button>
        </S.Form>
            </S.Content>
            <S.Row>
          <S.Link to="/atualizarsenha">Clique aqui para atualizar sua senha</S.Link>
          </S.Row>
        </S.Container>
      </>
  )
}
