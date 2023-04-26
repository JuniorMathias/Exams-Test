import { useState, createContext, useEffect} from 'react';
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser(){
      const storageUser = localStorage.getItem('@ticketsPro')

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false);
      }
      setLoading(false);
    }
    loadUser();
  }, [])

  async function signIn(email, password){
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
    setError("");
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

  //convertendo para string 
  function storageUser(data){
    localStorage.setItem('@ticketsPRO', JSON.stringify(data))
  }


// função de logout
  async function logout(){
    await signOut(auth);
    localStorage.removeItem('@ticketsPRO');
    setUser(null);

  }

  //recuperar senha

  async function recoverPassword(email){
    setLoadingAuth(true);
    await sendPasswordResetEmail(auth, email)
    .then(async (value) => {
      setLoadingAuth(false)
      toast.success("email enviado")
    })
    .catch((err) => {
      setError("Email não encontrado");
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
        logout,
        recoverPassword,
        loadingAuth,
        loading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;