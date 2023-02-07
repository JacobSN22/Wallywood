import { Container } from "./Component/Style/container.style";
import { GlobalStyle } from "./Component/Style/Global.style";
import { Header } from "./Component/partials/header";
import { NavBar } from "./Component/partials/navbar";
import { Router } from "./Component/App/Approuter/router";
import { Footer } from "./Component/partials/footer";

function App() {
  return (
    <>
    <GlobalStyle />
      <Container maxwidth="1024px">
        <Header />
        <NavBar />
        <hr color="#5C1F06"/>
        <Router />
        <hr color="#5C1F06"/>

        <Footer />
      </Container>
      </>
  );
}

export default App;
