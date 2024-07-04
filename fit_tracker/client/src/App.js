import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SideBar from "./components/SideBar";
import UserDashboard from "./pages/DashboardPage";
import DiaryPage from "./pages/DiaryPage";
import FoodsPage from "./pages/FoodsPage";
import TrendsPage from "./pages/TrendsPage";
import CalculatorPage from "./pages/CalculatorPage";
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
        <Route path="foods" element={<FoodsPage />} />
        <Route path="trends" element={<TrendsPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
