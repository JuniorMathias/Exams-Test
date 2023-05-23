
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
        O protocolo FTP(File Transfer Protocol) é amplamente utilizado para a transferência de arquivos entre sistemas. 
        Ele permite a comunicação cliente-servidor, possibilitando a cópia de arquivos de um computador para outro por meio de uma rede.
        
        O modem é o dispositivo responsável pela conversão dos sinais digitais do computador em sinais analógicos para transmissão 
        através de linhas telefônicas ou cabos. Ele atua na camada física do modelo OSI, garantindo a transmissão dos dados pela rede.

        O padrão de rede sem fio mais comum é o Wi-Fi, que utiliza ondas de rádio para permitir a comunicação entre dispositivos em uma rede local sem a necessidade de cabos físicos.

        O protocolo DHCP(Dynamic Host Configuration Protocol) é utilizado para atribuir endereços IP de forma automática aos dispositivos em uma rede.
        Ele facilita a configuração e gerenciamento dos endereços IP, evitando conflitos de endereçamento.

        O bit é a unidade básica de transmissão de dados em uma rede.
        Ele representa um dígito binário, podendo assumir o valor 0 ou 1. Os bits são combinados para formar informações mais complexas, como bytes, pacotes e quadros.

        O protocolo SMTP (Simple Mail Transfer Protocol) é utilizado para enviar e-mails. Ele define as regras de comunicação entre os servidores de e-mail, garantindo a entrega adequada das mensagens.

        O switch é o dispositivo de rede responsável por conectar diferentes redes em um único segmento de rede.
        Ele opera na camada de enlace de dados do modelo OSI, permitindo a comunicação eficiente entre os dispositivos conectados.

        O protocolo TLS(Transport Layer Security) é amplamente utilizado para criptografar a comunicação em redes.
        Ele estabelece uma conexão segura entre dois sistemas, garantindo a confidencialidade e a integridade dos dados transmitidos.

        O protocolo DNS(Domain Name System) é utilizado para resolver nomes de domínio em endereços IP. Ele permite que os usuários utilizem nomes amigáveis.

        </S.Texto>
      </S.Content>
    </S.Container>
    </>
  );
};

export default RevisionAds;
