import { useState, useContext } from 'react';
import * as S from './styles';
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/auth';
import { toast } from "react-toastify";
import NavBar from '../../components/NavBar';

import { db, storage } from '../../services/firebaseConnection'
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';


import { FiUpload } from 'react-icons/fi';


export default function Profile(){
  const { user, storageUser, setUser} = useContext(AuthContext);

  const [name, setName] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [birth, setBirth] = useState(user && user.nascimento);
  const [phone, setPhone] = useState(user.telefone);
  const [imageAvatar, setImageAvatar] = useState(null);
  const [errors, setErrors] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(false);

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
      toast.error("A imagem deve ser em formato JPEG!");
      setImageAvatar(null);
      return null;
    }
  }
}

// uploading a new photo 
async function handleUpload(){
  setLoadingAuth(true);
  const currentUid = user.uid;

  const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar.name}`)

  const uploadTask = uploadBytes(uploadRef, imageAvatar)
  .then((snapshot) =>{
    
    getDownloadURL(snapshot.ref).then( async (downloadURL) => {
      let urlFoto = downloadURL;

      const docRef = doc(db, "users", user.uid)
      await updateDoc(docRef, {
        avatarUrl: urlFoto,
        nome: name,
        nascimento: birth,
        telefone: phone
      })
      .then(() => {
        let data = {
          ...user,
          nome: name,
          avatarUrl: urlFoto,
          nascimento: birth,
          telefone: phone
        }
        setLoadingAuth(false);
        setUser(data);
        storageUser(data);
        toast.success("Atualizado com sucesso!")
        
      })

    })

  })

}

//updating the name
  async function handleSave(e){
   setLoadingAuth(true);
   e.preventDefault();

   if(imageAvatar === null && name !== '' && birth !== ''){
    const docRef = doc(db,"users", user.uid);
    await updateDoc(docRef, {
      nome: name,
      nascimento: birth
    })
    .then(()=> {
      let data = {
        ...user,
        nome: name
      };
      setLoadingAuth(false);
      setUser(data);
      storageUser(data);
      toast.success("Atualizado com sucesso!")
    })
   }else if(name !== '' && imageAvatar !== null && birth !== ''){
     handleUpload();
   }else{
      toast.error("Preencha todos os dados obrigatórios")
      setLoadingAuth(false);
  }

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
                    <img src={avatar} width={250} height={250} alt="profile pic" className='profilePic'/>
                     :
                     <img src={avatarUrl} width="250" height="250" alt="profile pic" className='profilePic'/>
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
          <S.Button
            type="submit"
            style={{ width: '105%'}}
          >
            {loadingAuth ? 'Atualizando...' : 'Salvar'}
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
