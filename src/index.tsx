import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import App from 'components/App';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Jobs from 'pages/Jobs';
import MyAccount from 'pages/MyAccount';
import { getAuth } from 'firebase/auth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

// Lazy load MyProfile and MyResume for nested routes
const MyProfileLazy = React.lazy(() => import('pages/MyProfile'));
const MyResumeLazy = React.lazy(() => import('pages/MyResume'));

// ErrorBoundary for catching errors in the app
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // Log error if needed
  }
  render() {
    if (this.state.hasError) {
      return <div className="flex flex-col items-center justify-center min-h-screen"><h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong.</h1><p className="text-gray-600">Please refresh the page or contact support.</p></div>;
    }
    return this.props.children;
  }
}

// ProtectedRoute for authenticated access
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    window.location.href = '/GlobalSponsorJobHub/login';
    return null;
  }
  return children;
}

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

function Main() {
  const [authChecked, setAuthChecked] = React.useState(false);
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(u => {
      setUser(u);
      setAuthChecked(true);
    });
    return unsubscribe;
  }, []);

  if (!authChecked) return <div>Loading...</div>; // Show spinner until Firebase is ready

  return (
    <BrowserRouter basename="/GlobalSponsorJobHub/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/my-account" element={
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        }>
          <Route path="profile" element={
            <ProtectedRoute>
              <React.Suspense fallback={<div>Loading...</div>}>
                <MyProfileLazy />
              </React.Suspense>
            </ProtectedRoute>
          } />
          <Route path="resume" element={
            <ProtectedRoute>
              <React.Suspense fallback={<div>Loading...</div>}>
                <MyResumeLazy />
              </React.Suspense>
            </ProtectedRoute>
          } />
          {/* Default to profile if no subroute */}
          <Route path="*" element={<Navigate to="profile" replace />} />
        </Route>
        {/* Catch-all route for 404s: redirect to home */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <ErrorBoundary>
    <Main />
  </ErrorBoundary>
);
