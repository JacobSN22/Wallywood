import { Container } from "./Component/Style/container.style";
import { GlobalStyle } from "./Component/Style/Global.style";
import { Header } from "./Component/partials/header";

function App() {
  return (
    <>
    <GlobalStyle />
      <Container maxwidth="1024px" >
        <Header />
      </Container>
      </>
  );
}

export default App;
