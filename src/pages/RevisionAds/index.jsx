
import redes from '../../assets/logo.png';
import NavBar from '../../components/NavBar';
import * as S from './styles';


const RevisionAds = () => {

  return (
      <>
      <NavBar />
    <S.Container>
        <S.Para>
           A seguir, vamos revisar as respostas corretas para as perguntas apresentadas na prova.
        </S.Para>
        <S.LoginArea>
            <S.MyIcon src={redes} alt="Logo System" />
        </S.LoginArea>
        <S.Content className='content'>
        <S.Texto>
        No desenvolvimento web, Html utilizada para estruturar o conteúdo das páginas é uma combinação de marcações e tags. 
        Identifique qual linguagem é frequentemente empregada nesse contexto.
        
        Durante a fase de análise de um projeto de software, é essencial compreender as necessidades dos usuários e identificar os problemas que o sistema deve resolver. 
        E o termo técnico usado para descrever esse processo é o Análise de requisitos.

        Nos sistemas de computador, existe uma tecnologia crucial responsável por armazenar, organizar e recuperar dados. chamado Sistema de Gerenciamento de Banco de Dados (SGBD)

        Quando você está depurando um programa, está realizando uma atividade específica relacionada à identificação e correção de erros. 
        E o  termo técnico é usado para descrever essa atividade é Debugging

        Para o desenvolvimento de aplicativos móveis destinados ao sistema operacional iOS,
        uma linguagem de programação é amplamente adotada ela é Swift

        A Engenharia de Software é uma disciplina que envolve o desenvolvimento de sistemas de software complexos, tendo como objetivo central dessa disciplina  Desenvolver sistemas seguros

        Durante a fase de projeto de um sistema de software, é essencial representar de forma formal os requisitos dos usuários.
         atividade é realizada para transformar esses requisitos em uma representação adequada conhecida como Modelagem de software.

         Ao verificar se um sistema atende aos requisitos e especificações estabelecidos, você está realizando uma etapa importante no processo de desenvolvimento de software é a Validação
         
         A Programação Orientada a Objetos (POO) é um paradigma de programação amplamente adotado tendo principal objetivo desse paradigma a Reutilização de código
        O protocolo DNS(Domain Name System) é utilizado para resolver nomes de domínio em endereços IP. Ele permite que os usuários utilizem nomes amigáveis.

        </S.Texto>
      </S.Content>
    </S.Container>
    </>
  );
};

export default RevisionAds;
