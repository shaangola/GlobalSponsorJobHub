import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const APP_ID = 'f49e7f85';
const APP_KEY = '189f5b9a05d43959d3d77bcc19c4e3f0';
const COUNTRY_CODES = [
  'gb','us','at','au','be','br','ca','ch','de','es','fr','in','it','mx','nl','nz','pl','sg','za',
];
const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
  { code: 'zh', label: '中文' },
];

const I18N = {
  en: {
    jobListings: 'Job Listings',
    search: 'Search jobs...',
    location: 'Filter by location...',
    company: 'Filter by company...',
    page: 'Page (1-10)',
    country: 'Country',
    loading: 'Loading jobs...',
    noJobs: 'No jobs found.',
    viewApply: 'View & Apply',
    salary: 'Salary',
  },
  es: {
    jobListings: 'Ofertas de trabajo',
    search: 'Buscar empleos...',
    location: 'Filtrar por ubicación...',
    company: 'Filtrar por empresa...',
    page: 'Página (1-10)',
    country: 'País',
    loading: 'Cargando empleos...',
    noJobs: 'No se encontraron empleos.',
    viewApply: 'Ver y aplicar',
    salary: 'Salario',
  },
  fr: {
    jobListings: 'Offres d\'emploi',
    search: 'Rechercher des emplois...',
    location: 'Filtrer par lieu...',
    company: 'Filtrer par entreprise...',
    page: 'Page (1-10)',
    country: 'Pays',
    loading: 'Chargement des emplois...',
    noJobs: 'Aucun emploi trouvé.',
    viewApply: 'Voir et postuler',
    salary: 'Salaire',
  },
  de: {
    jobListings: 'Stellenangebote',
    search: 'Jobs suchen...',
    location: 'Nach Ort filtern...',
    company: 'Nach Unternehmen filtern...',
    page: 'Seite (1-10)',
    country: 'Land',
    loading: 'Jobs werden geladen...',
    noJobs: 'Keine Jobs gefunden.',
    viewApply: 'Ansehen & Bewerben',
    salary: 'Gehalt',
  },
  it: {
    jobListings: 'Offerte di lavoro',
    search: 'Cerca lavori...',
    location: 'Filtra per posizione...',
    company: 'Filtra per azienda...',
    page: 'Pagina (1-10)',
    country: 'Paese',
    loading: 'Caricamento lavori...',
    noJobs: 'Nessun lavoro trovato.',
    viewApply: 'Vedi e candidati',
    salary: 'Stipendio',
  },
  pt: {
    jobListings: 'Vagas de emprego',
    search: 'Pesquisar empregos...',
    location: 'Filtrar por localização...',
    company: 'Filtrar por empresa...',
    page: 'Página (1-10)',
    country: 'País',
    loading: 'Carregando empregos...',
    noJobs: 'Nenhum emprego encontrado.',
    viewApply: 'Ver e candidatar-se',
    salary: 'Salário',
  },
  zh: {
    jobListings: '职位列表',
    search: '搜索职位...',
    location: '按地点筛选...',
    company: '按公司筛选...',
    page: '页码 (1-10)',
    country: '国家',
    loading: '正在加载职位...',
    noJobs: '未找到职位。',
    viewApply: '查看并申请',
    salary: '薪资',
  },
};
function Jobs() {
  const [country, setCountry] = useState('us');
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState('en');
  const [jobs, setJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      setError('');
      try {
        const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/${page}?app_id=${APP_ID}&app_key=${APP_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const data = await res.json();
        setJobs(data.results || []);
        setFilteredJobs(data.results || []);
      } catch (err: any) {
        setError(err.message);
      }
      setLoading(false);
    }
    fetchJobs();
  }, [country, page]);

  useEffect(() => {
    let result = jobs;
    if (search) {
      result = result.filter(job =>
        job.title?.toLowerCase().includes(search.toLowerCase()) ||
        job.description?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (location) {
      result = result.filter(job =>
        job.location?.display_name?.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (company) {
      result = result.filter(job =>
        job.company?.display_name?.toLowerCase().includes(company.toLowerCase())
      );
    }
    setFilteredJobs(result);
  }, [search, location, company, jobs]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col font-poppins">
      <Header />
      <div className="flex flex-row w-full flex-1">
        {/* Left sticky banner */}
        <div className="hidden lg:flex flex-col items-center justify-center w-48 sticky top-0 h-screen z-10">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-40 h-96 flex flex-col justify-center items-center">
            <span className="font-bold text-indigo-600 mb-2">Premium Service</span>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Resume Writing" className="rounded-lg mb-2 w-28 h-20 object-cover" />
            <span className="text-xs text-gray-700 text-center font-semibold mb-2">Get a Professional Resume!</span>
            <span className="text-xs text-gray-500 text-center mb-2">ATS-Optimized, Fast Turnaround</span>
            <button className="mt-2 bg-indigo-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-indigo-700 transition">Learn More</button>
          </div>
        </div>
        {/* Main job listing content */}
        <div className="flex-1 flex flex-col items-center justify-start pt-8">
          <div className="max-w-4xl w-full px-4">
            <div className="flex justify-end mb-4">
              <select
                value={lang}
                onChange={e => setLang(e.target.value)}
                className="px-4 py-2 border rounded"
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </div>
            <h1 className="text-4xl font-extrabold mb-8 text-indigo-700 text-center drop-shadow-lg">{I18N[lang as keyof typeof I18N].jobListings}</h1>
            <div className="mb-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              <select
              value={country}
              onChange={e => {
                setCountry(e.target.value);
                setPage(1);
              }}
                className="px-4 py-2 border rounded w-full col-span-1"
                aria-label={I18N[lang as keyof typeof I18N].country}
              >
                {COUNTRY_CODES.map(code => (
                  <option key={code} value={code}>{code.toUpperCase()}</option>
                ))}
              </select>
              <input
                type="number"
                min={1}
                max={10}
                value={page}
                onChange={e => setPage(Number(e.target.value))}
                className="px-4 py-2 border rounded w-full col-span-1"
                placeholder={I18N[lang as keyof typeof I18N].page}
                aria-label={I18N[lang as keyof typeof I18N].page}
              />
              <input
                type="text"
                placeholder={I18N[lang as keyof typeof I18N].search}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="px-4 py-2 border rounded w-full col-span-1"
                aria-label={I18N[lang as keyof typeof I18N].search}
              />
              <input
                type="text"
                placeholder={I18N[lang as keyof typeof I18N].location}
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="px-4 py-2 border rounded w-full col-span-1"
                aria-label={I18N[lang as keyof typeof I18N].location}
              />
              <input
                type="text"
                placeholder={I18N[lang as keyof typeof I18N].company}
                value={company}
                onChange={e => setCompany(e.target.value)}
                className="px-4 py-2 border rounded w-full col-span-1"
                aria-label={I18N[lang as keyof typeof I18N].company}
              />
            </div>
            {loading && <div className="text-gray-500 text-center text-lg font-medium py-8">{I18N[lang as keyof typeof I18N].loading}</div>}
            {error && <div className="text-red-500 text-center text-lg font-medium py-8">{error}</div>}
            <div className="space-y-8">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white rounded-xl shadow-lg p-8 transition hover:shadow-2xl border border-indigo-100">
                  <h2 className="text-2xl font-bold text-indigo-800 mb-2">{job.title}</h2>
                  <div className="text-gray-600 mb-2 text-lg">
                    {job.company?.display_name || ''}
                    {job.location?.display_name ? ` — ${job.location.display_name}` : ''}
                  </div>
                  <div className="text-gray-500 mb-2 text-sm">{job.category?.label || ''}</div>
                  <div className="text-gray-500 mb-2 text-sm">{job.contract_type ? job.contract_type : ''} {job.contract_time ? `(${job.contract_time})` : ''}</div>
                  <p className="text-gray-700 mb-4 text-base leading-relaxed">{job.description?.replace(/<[^>]+>/g, '') || 'No description available.'}</p>
                  <div className="text-gray-700 mb-2 text-base">
                    {job.salary_min && job.salary_max ? `${I18N[lang as keyof typeof I18N].salary}: $${job.salary_min} - $${job.salary_max}` : ''}
                  </div>
                  <a
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 inline-block font-semibold shadow"
                  >
                    {I18N[lang as keyof typeof I18N].viewApply}
                  </a>
                </div>
              ))}
              {(!loading && filteredJobs.length === 0) && (
                <div className="text-gray-500 text-center text-lg font-medium py-8">{I18N[lang as keyof typeof I18N].noJobs}</div>
              )}
            </div>
          </div>
        </div>
        {/* End main job listing content */}
        {/* Right sticky banner */}
        <div className="hidden lg:flex flex-col items-center justify-center w-48 sticky top-0 h-screen z-10">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-40 h-96 flex flex-col justify-center items-center">
            <span className="font-bold text-indigo-600 mb-2">ATS Resume Check</span>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="ATS Service" className="rounded-lg mb-2 w-28 h-20 object-cover" />
            <span className="text-xs text-gray-700 text-center font-semibold mb-2">Is Your Resume ATS-Friendly?</span>
            <span className="text-xs text-gray-500 text-center mb-2">Scan & Improve Instantly</span>
            <button className="mt-2 bg-indigo-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-indigo-700 transition">Try Free</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jobs;
