import { createTheme, ThemeProvider } from "@mui/material"
import { lazy, Suspense } from "react"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { store, persistor } from "./redux/store"
import { AppWrapper } from "./styled-components"
import { AuthGuard, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./utilities"

const Home = lazy(() => import('./pages/Home/Home'));
const Faqs = lazy(() => import('./pages/Faqs/Faqs'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));

const OrionApp = lazy(() => import('./pages/OrionApp/OrionApp'));
const Chat = lazy(() => import('./pages/OrionApp/components/Chat/Chat'));
const Integrations = lazy(() => import('./pages/OrionApp/components/Integrations/Integrations'));
const AssistantSettings = lazy(() => import('./pages/OrionApp/components/AssistantSettings/AssistantSettings'));

const theme = createTheme({
  palette: {
    secondary: {
      main: '#6821E3'
    },
    primary: {
      main: '#f8f8f8'
    }
  }
});

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<>Cargando...</>}>

              <BrowserRouter>
                <Routes>
                  <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />

                  <Route path={PUBLIC_ROUTES.FAQS} element={<Faqs />} />

                  <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

                  <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />

                  <Route element={<AuthGuard />}>

                    <Route path={PRIVATE_ROUTES.APP} element={<OrionApp />}>

                      <Route path={PRIVATE_ROUTES.TEST_ORION} element={<Chat />} />

                      <Route path={PRIVATE_ROUTES.INTEGRATIONS} element={<Integrations />} />

                      <Route path={PRIVATE_ROUTES.ORION_SETTINGS} element={<AssistantSettings />} />

                    </Route>

                  </Route>

                  <Route path="*" element={<>NOT FOUND 404</>} />
                </Routes>
              </BrowserRouter>

            </Suspense>
          </ThemeProvider>
        </AppWrapper>
      </PersistGate>
    </Provider>
  )
}

export default App
