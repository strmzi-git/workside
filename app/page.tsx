import ToasterProvider from "./ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import Container from "./components/Container";
import Header from "./components/Header";
import LoginModal from "./components/modals/LoginModal";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <ToasterProvider />
      <LoginModal />
      <Container>
        <Header currentUser={currentUser} />
      </Container>
    </div>
  );
}
