import React, { useEffect } from 'react';
import { useNavigate, Link, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { FaUser, FaFileAlt } from "react-icons/fa"; // Add at the top
import Header from '../components/Header';
import Footer from '../components/Footer';

const provider = new GoogleAuthProvider();
function MyAccount() {
  const [user, setUser] = React.useState<any>(null);
  const [menuOpen, setMenuOpen] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate('/');
  };

  if (!user) return null;

  const location = useLocation();
  const menuItems = [
    { label: 'My Profile', path: '/my-account/profile', icon: <FaUser /> },
    { label: 'My Resume', path: '/my-account/resume', icon: <FaFileAlt /> },
  ];

  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <div className="flex min-h-[70vh] bg-gradient-to-br from-indigo-50 to-blue-100 font-poppins">
        {/* Collapsible Left Menu */}
        <aside className={`transition-all duration-300 bg-white shadow-lg border-r flex flex-col ${menuOpen ? 'w-64' : 'w-16'} min-h-full`}>
          <button
            className="p-2 focus:outline-none text-indigo-600 hover:text-indigo-900 self-end"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Collapse menu' : 'Expand menu'}
          >
            {menuOpen ? (
              // Left arrow for collapse
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            ) : (
              // Right arrow for expand
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
          <nav className={`flex flex-col items-center mt-8 w-full`}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`w-full flex items-center px-6 py-3 text-left rounded transition font-medium mb-2
                  ${location.pathname === item.path ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-indigo-50'}
                  ${!menuOpen ? 'justify-center px-0' : ''}
                `}
                title={item.label}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                {menuOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </aside>
        {/* Main Content: Nested Routes */}
        <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
          <Routes>
            <Route path="profile" element={
              <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl flex flex-col items-center">
                <h1 className="text-3xl font-bold text-indigo-700 mb-4">Welcome, {user.displayName}!</h1>
                <img src={user.photoURL} alt={user.displayName} className="w-24 h-24 rounded-full mb-4 shadow" />
                <div className="w-full text-left">
                  <div className="mb-2"><span className="font-semibold text-gray-700">Name:</span> {user.displayName}</div>
                  <div className="mb-2"><span className="font-semibold text-gray-700">Email:</span> {user.email}</div>
                  {user.phoneNumber && <div className="mb-2"><span className="font-semibold text-gray-700">Phone:</span> {user.phoneNumber}</div>}
                  {user.providerData && user.providerData[0]?.providerId && (
                    <div className="mb-2"><span className="font-semibold text-gray-700">Provider:</span> {user.providerData[0].providerId}</div>
                  )}
                  <div className="mb-2"><span className="font-semibold text-gray-700">UID:</span> {user.uid}</div>
                  {user.metadata && (
                    <div className="mb-2"><span className="font-semibold text-gray-700">Last Login:</span> {user.metadata.lastSignInTime}</div>
                  )}
                </div>
              </div>
            } />
            <Route path="resume" element={
              <Routes>
                <Route path="*" element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    {React.createElement(React.lazy(() => import('./MyResume')))}
                  </React.Suspense>
                } />
              </Routes>
            } />
            {/* Default to profile if no subroute */}
            <Route path="*" element={<Navigate to="profile" replace />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}


export default MyAccount;
