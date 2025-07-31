import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { registerWithFirebase } from '../utils/firebaseAuth';
import { loginWithGoogle } from '../utils/firebaseAuth';
import countryImages from '../utils/countryImages';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', phone: '', password: '', role: 'jobseeker' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await registerWithFirebase(form);
      // redirect or show success
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex">
        <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center p-8">
        <div className="grid grid-cols-2 gap-4">
          {countryImages.map((img, i) => (
            <img key={i} src={img} alt="user working" className="rounded-lg shadow-md h-32 w-32 object-cover" />
          ))}
        </div>
        <h2 className="mt-8 text-xl font-semibold text-gray-700">Work from anywhere!</h2>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-8" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-indigo-700">Register</h2>
          <div className="mb-4">
            <input name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <select name="role" value={form.role} onChange={handleChange} className="w-full px-4 py-2 border rounded">
              <option value="jobseeker">Jobseeker</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          <button
            type="button"
            className="w-full mt-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center"
            onClick={async () => {
              setLoading(true);
              setError('');
              try {
                await loginWithGoogle();
                // redirect or show success
              } catch (err: any) {
                setError(err.message);
              }
              setLoading(false);
            }}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.3-5.7 7-10.3 7-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 .9 6.9 2.4l5.6-5.6C34.1 7.6 29.3 5.5 24 5.5 13.5 5.5 5 14 5 24.5S13.5 43.5 24 43.5c10.5 0 19-8.5 19-19 0-1.3-.1-2.5-.4-3.7z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13.5 24 13.5c2.6 0 5 .9 6.9 2.4l5.6-5.6C34.1 7.6 29.3 5.5 24 5.5c-6.6 0-12.2 3.8-15.1 9.2z"/><path fill="#4CAF50" d="M24 43.5c5.3 0 10.1-2 13.7-5.3l-6.3-5.2c-2 1.5-4.4 2.4-7.4 2.4-4.6 0-8.7-2.7-10.3-7l-6.6 5.1C11.8 39.7 17.4 43.5 24 43.5z"/><path fill="#1976D2" d="M43.6 20.5h-1.9V20H24v8h11.3c-.7 2-2.1 3.7-3.9 4.8l6.3 5.2c1.8-1.7 3.2-4.1 3.2-7.5 0-1.3-.1-2.5-.4-3.7z"/></svg>
            Register with Google
          </button>
          <div className="mt-4 text-center">
            Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
          </div>
        </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
