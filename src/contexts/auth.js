import { useState, createContext} from 'react';
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function signIn(email, password,error){
    setLoadingAuth(true);
    setError("deu erro aqui");
  }


  // Cadastrar um novo user
  async function signUp(email, password, name, birth,phone){
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password)
    .then( async (value) => {
        let uid = value.user.uid

        await setDoc(doc(db, "users", uid), {
          nome: name,
          avatarUrl: null,
          nascimento: birth,
          telefone: phone
        })
        .then( () => {

          let data = {
            uid: uid,
            nome: name,
            email: value.user.email,
            avatarUrl: null,
            nascimento: birth,
            telefone: phone
          };

          setUser(data);

          setLoadingAuth(false);
          navigate('/home', { replace: true })
          setError("");
          
        })

    })
    .catch((error) => {
      setError("Email já está em uso");
      setLoadingAuth(false);
    })

  }


  return(
    <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        loadingAuth,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;