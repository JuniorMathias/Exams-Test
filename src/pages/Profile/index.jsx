import { useState, useContext } from 'react';
import * as S from './styles';
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/auth';
import { toast } from "react-toastify";

import firebase from '../../services/firebaseConnection';


import { FiUpload } from 'react-icons/fi';


export default function Profile(){
  const { user,signOut, setUser, storageUser } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

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
        <S.Content className='content'>  
            <S.Container>
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
                <S.Label>Name</S.Label>
                <S.FormInput
                    type="text"
                    value={name}
                    onChange={ (e) => setName(e.target.value)} 
                  />
                <S.Label>Email</S.Label>
                <S.FormInput
                    type="text"
                    value={email}
                    disabled={true}
                    style={{ cursor: 'not-allowed'}}
                  />
                  <S.Button type='submit'>Save</S.Button>
              </S.Form>
            </S.Container>
            <S.Container>
                <S.ButtonSignout onClick={ () => signOut() }>Sign Out </S.ButtonSignout>
            </S.Container>
        </S.Content>
      </>
  )
}
