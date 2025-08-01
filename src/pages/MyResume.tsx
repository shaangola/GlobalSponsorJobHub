import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAuth } from 'firebase/auth';

function MyResume() {
  const user = getAuth().currentUser;
  const [file, setFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!user) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadMsg('');
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setUploadMsg('Please select a file to upload.');
      return;
    }
    // Here you would upload the file to your backend or Firebase Storage
    setUploadMsg('Resume uploaded successfully! (Demo only)');
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-indigo-50 to-blue-100 font-poppins">
        <div className="w-full mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 flex flex-col items-start px-4">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">Upload Your Resume</h1>
          <form onSubmit={handleUpload} className="w-full flex flex-col items-start">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="mb-4"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Upload
            </button>
          </form>
          {uploadMsg && <div className="mt-4 text-green-600">{uploadMsg}</div>}
        </div>
      </main>
    </>
  );
}

export default MyResume;
