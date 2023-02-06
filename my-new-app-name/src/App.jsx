import { Container } from "./Component/Style/container.style";
import { GlobalStyle } from "./Component/Style/Global.style";
import { Header } from "./Component/partials/header";
import { NavBar } from "./Component/partials/navbar";

function App() {
  return (
    <>
    <GlobalStyle />
      <Container maxwidth="1024px" >
        <Header />
        <NavBar />
      </Container>
      </>
  );
}

export default App;
