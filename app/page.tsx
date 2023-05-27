import ToasterProvider from "./ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import Container from "./components/Container";
import Header from "./components/Header";
import BodyContent from "./components/body/BodyContent";
import LoginModal from "./components/modals/LoginModal";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="min-h-screen">
      <ToasterProvider />
      <LoginModal />
      <Container>
        <Header currentUser={currentUser} />
        <BodyContent />
      </Container>
    </div>
  );
}
