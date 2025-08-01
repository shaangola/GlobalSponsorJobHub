import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAuth } from 'firebase/auth';

function MyProfile() {
  const user = getAuth().currentUser;
  if (!user) return null;
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-indigo-50 to-blue-100 font-poppins">
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12 w-full flex flex-col items-center max-w-none">
          <img src={user.photoURL ?? undefined} alt={user.displayName ?? undefined} className="w-24 h-24 rounded-full mb-4 shadow" />
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">Welcome, {user.displayName}!</h1>
          <p className="text-gray-600 mb-2">Email: {user.email}</p>
          {user.phoneNumber && <p className="text-gray-600 mb-2">Phone: {user.phoneNumber}</p>}
          {user.providerData && user.providerData[0]?.providerId && (
            <p className="text-gray-600 mb-2">Provider: {user.providerData[0].providerId}</p>
          )}
          <p className="text-gray-600 mb-2">UID: {user.uid}</p>
          {user.metadata && (
            <p className="text-gray-600 mb-2">Last Login: {user.metadata.lastSignInTime}</p>
          )}
        </div>
      </main>
    </>
  );
}

export default MyProfile;
