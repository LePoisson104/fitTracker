import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/DashboardPage";
import DiaryPage from "./pages/DiaryPage";
import ExercisePage from "./pages/ExercisePage";
import WeightPage from "./pages/WeightPage";
import TrendsPage from "./pages/TrendsPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./layouts/DashLayout";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserDashboard />} />
        <Route path="diary" element={<DiaryPage />} />
        <Route path="exercise" element={<ExercisePage />} />
        <Route path="trends" element={<TrendsPage />} />
        <Route path="weight" element={<WeightPage />} />
        <Route path="settings" element={<ProfilePage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
