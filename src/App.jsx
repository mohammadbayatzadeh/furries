import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routers />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
