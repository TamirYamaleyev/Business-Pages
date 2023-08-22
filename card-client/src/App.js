import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import ThemeProvider from "./providers/ThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import UserProvider from "./users/providers/UserProvider";
import {SearchbarProvider} from "./providers/SearchbarContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SearchbarProvider>
          <SnackbarProvider>
            <ThemeProvider>
              <UserProvider>
                <Layout>
                  <Router />
                </Layout>
              </UserProvider>
            </ThemeProvider>
          </SnackbarProvider>
        </SearchbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
