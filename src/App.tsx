import { BrowserRouter as Routers } from "react-router-dom"
import { Router } from './routes/routes';
import GlobalStyle from "./assets/style/global";
export function App() {
  return (
    <Routers>
      <GlobalStyle/>
      <Router/>
    </Routers>
  );
}
