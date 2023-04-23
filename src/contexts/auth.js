import { useState, createContext} from 'react';
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function signIn(email, password,error){
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      let uid = value.user.uid

      //acessar o documento
      const docRef = doc(db, "users", uid);
      //pegar os dados, retorno
      const docSnap = await getDoc(docRef)
      //pegando valores do banco
      let data = {
        uid: uid,
        nome: docSnap.data().nome,
        email: value.user.email,
        avatarUrl: docSnap.data().avatarUrl,
        nascimento: docSnap.data().nascimento,
        telefone: docSnap.data().telefone
      }
      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
      toast.success("Bem-vindo(a) de volta!")
      navigate('/home', { replace: true })
      setError("");
      
    })
    .catch((err) => {
      setError("Login ou senha incorreto!");
      setLoadingAuth(false);
    })
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
  function storageUser(data){
    localStorage.setItem('@ticketsPRO', JSON.stringify(data))
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