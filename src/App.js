import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import LandingPage from "./components/pages/LandingPage";
import CellphoneImage from "./components/layout/CellphoneImage";

function App() {
  return (
    <>
      <Header></Header>
      <Container> 
        <LandingPage/>
        <CellphoneImage></CellphoneImage>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
