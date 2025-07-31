import React from 'react';

const Footer = () => (
  <footer className="w-full bg-white shadow mt-8 py-6 px-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm font-poppins">
    <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Cloud Nexus Solutions Ltd. All rights reserved.</div>
    <div className="space-x-4">
      <a href="/privacy" className="hover:underline">Privacy Policy</a>
      <a href="/terms" className="hover:underline">Terms of Service</a>
      <a href="https://www.linkedin.com/company/globalsponsorjobhub" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      </div>
  </footer>
);

export default Footer;
