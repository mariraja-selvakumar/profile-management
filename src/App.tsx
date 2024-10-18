import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./context/ProfileContext";
import { lazy, Suspense } from "react";
import CustomLoader from "./components/CustomLoader";

const PrivateRoutes = lazy(() => import("./routes/PrivateRoutes"));
const Login = lazy(() => import("./pages/login/Login"));
const ProfileForm = lazy(() => import("./pages/profile/ProfileForm"));
const ProfileDisplay = lazy(() => import("./pages/profile/ProfileDisplay"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

const App = () => (
  <ProfileProvider>
    <Suspense fallback={<CustomLoader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<ProfileForm />} path="/profile-form" />
            <Route element={<ProfileDisplay />} path="/profile-display" />
          </Route>
          <Route element={<Login />} path="/" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </ProfileProvider>
);

export default App;
