import { styled } from 'styled-components';

const Auth = () => {
  return (
    <Container>
      <section>
        <form>
          <Control>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </Control>

          <Control>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </Control>
        </form>
      </section>
    </Container>
  );
};

export default Auth;

const Container = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`

const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    color: #616161;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
  }
`;