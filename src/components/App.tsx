
import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 font-poppins">
        <section className="max-w-3xl w-full text-center py-16 px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-700 mb-6 drop-shadow-lg">Centralized place for sponsorship jobs worldwide</h1>
          <p className="text-xl text-gray-700 mb-8">Find remote, hybrid, and on-site sponsorship jobs from top companies. Connect with global employers and discover your next opportunity in one professional portal.</p>
          <Link to="/jobs" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-indigo-700 transition">Browse Jobs</Link>
        </section>
        <section className="flex flex-wrap justify-center gap-8 py-8">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Remote professional 1" className="rounded-xl shadow-lg w-64 h-40 object-cover" />
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Remote professional 2" className="rounded-xl shadow-lg w-64 h-40 object-cover" />
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Remote professional 3" className="rounded-xl shadow-lg w-64 h-40 object-cover" />
        </section>
      </main>
      <Footer />

    </>
  );
}

export default App;