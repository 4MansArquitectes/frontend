import Layout from "../Layout/Layout";
import Router from "../Router/Router";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <Layout>
        <Router />
      </Layout>
    </AppStyled>
  );
};

export default App;
