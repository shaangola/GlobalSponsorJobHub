import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import App from 'components/App';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Jobs from 'pages/Jobs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <BrowserRouter basename="/GlobalSponsorJobHub/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  </BrowserRouter>
);
