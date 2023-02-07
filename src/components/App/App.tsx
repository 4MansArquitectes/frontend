import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import Router from "../Router/Router";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <Layout>
        <Header />
        <Router />
      </Layout>
      <Footer />
    </AppStyled>
  );
};

export default App;
