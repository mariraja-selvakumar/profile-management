import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/login/Login";
import ProfileForm from "./pages/profile/ProfileForm";
import { ProfileProvider } from "./context/ProfileContext";
import ProfileDisplay from "./pages/profile/ProfileDisplay";

const App = () => {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<ProfileForm />} path="/profile-form" />
            <Route element={<ProfileDisplay />} path="/profile-display" />
          </Route>
          <Route element={<Login />} path="/" />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  );
};

export default App;
