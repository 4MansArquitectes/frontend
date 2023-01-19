import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import Router from "../Router/Router";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <Header />
      <Layout>
        <Router />
      </Layout>
    </AppStyled>
  );
};

export default App;
