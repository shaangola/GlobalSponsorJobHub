
import Header from './Header';
import { getAuth } from 'firebase/auth';
import Footer from './Footer';

import { Link } from 'react-router-dom';

function App() {
  const fbUser = getAuth().currentUser;
  const user = fbUser ? { displayName: fbUser.displayName || '', photoURL: fbUser.photoURL || '' } : undefined;
  return (
    <>
      <Header user={user} />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 font-poppins">
        {/* Hero Section */}
        <section className="w-full bg-white py-16 px-4 flex flex-col items-center shadow-md">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-700 mb-4 drop-shadow-lg text-center">Global Sponsor Job Hub</h1>
          <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">Your gateway to international sponsorship jobs. Find remote, hybrid, and on-site opportunities from top companies. Connect with global employers and take your career worldwide.</p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Global team" className="rounded-xl shadow-lg w-64 h-40 object-cover" />
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Remote work" className="rounded-xl shadow-lg w-64 h-40 object-cover" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Diverse professionals" className="rounded-xl shadow-lg w-64 h-40 object-cover" />
          </div>
          <Link to="/jobs" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-indigo-700 transition">Browse Jobs</Link>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-5xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80" alt="Verified Employers" className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Verified Employers</h2>
            <p className="text-gray-600 text-center">Work with trusted companies offering real sponsorship opportunities worldwide.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Easy Application" className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Easy Application</h2>
            <p className="text-gray-600 text-center">Apply to jobs with a single click. Upload your resume and get noticed by global recruiters.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Multilingual Support" className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Multilingual Support</h2>
            <p className="text-gray-600 text-center">Experience the portal in your language. We support English, Spanish, French, German, and more.</p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full bg-indigo-50 py-16 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8">How It Works</h2>
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-700">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Sign Up</h3>
              <p className="text-gray-600 text-center">Create your free account and set up your profile in minutes.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-700">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Browse & Apply</h3>
              <p className="text-gray-600 text-center">Explore thousands of sponsorship jobs and apply to your favorites.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-700">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Sponsored</h3>
              <p className="text-gray-600 text-center">Connect with employers, get interviews, and land your dream job abroad.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User testimonial" className="w-16 h-16 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 text-center mb-2">“I found my dream job in Germany within weeks. The process was smooth and the support was amazing!”</p>
              <span className="text-indigo-700 font-semibold">— Rajeev S.</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User testimonial" className="w-16 h-16 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 text-center mb-2">“The best portal for sponsorship jobs. I got offers from three countries!”</p>
              <span className="text-indigo-700 font-semibold">— Maria G.</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User testimonial" className="w-16 h-16 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 text-center mb-2">“Highly recommended for anyone looking to work abroad. The multilingual support is a big plus.”</p>
              <span className="text-indigo-700 font-semibold">— Ahmed K.</span>
            </div>
          </div>
        </section>

        {/* Call to Action for Employers */}
        <section className="w-full bg-indigo-600 py-16 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-4">Are You an Employer?</h2>
          <p className="text-lg text-indigo-100 mb-8 text-center max-w-2xl">Post your sponsorship jobs and connect with a global pool of talented professionals. Find the right candidate for your company today.</p>
          <Link to="/register" className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-indigo-100 transition">Post a Job</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;