import { styled } from 'styled-components';

const UserProfile = () => {
  return (
    <Container>
      <h2>My User Profile</h2>
    </Container>
  );
};

export default UserProfile;

const Container = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;