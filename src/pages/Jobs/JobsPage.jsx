import React, { useEffect } from 'react';
import Jobs from '../../components/Jobs/Jobs';
import './JobsPage.css';

const JobsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="jobs-page">
      <Jobs />
    </main>
  );
};

export default JobsPage;
