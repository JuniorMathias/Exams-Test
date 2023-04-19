import * as S from './styles';


function Register() {


      return (
        <S.Container>
          <S.Content>
            <S.Form >
              <S.Row>
                <S.Input name="name" placeholder="Digite seu primeiro nome" required/>
                <S.Input name="surName" placeholder="Digite seu sobrenome" required/>
              </S.Row>
              <S.Row>
                <S.Input 
                  name="birthDate"
                  type="date"
                  label="Data de Nascimento"
                  required
                />
                <S.Input name="cellphone" placeholder="Digite seu número" type="number" required />
              </S.Row>
              <S.Row>
                <S.Input name="addressUser" placeholder="Digite seu endereço" />
                <S.Input name="city" placeholder="Digite sua cidade" />
              </S.Row>
              <S.Row>
                <S.Input name="email" type="email" placeholder="Digite seu email" required />
              </S.Row>
              <S.Footer>
                <S.Button type="submit">
                    Salvar
                  </S.Button>
              </S.Footer>
              
            </S.Form>
          </S.Content>
        </S.Container>
      );
    }

export default Register;
