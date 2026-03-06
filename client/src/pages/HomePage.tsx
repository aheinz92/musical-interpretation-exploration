import React, { useEffect } from 'react';
import { Link } from 'wouter';
import homePageCssUrl from '../styles/home-page.css?url';

const HomePage: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = homePageCssUrl;
    link.rel = 'stylesheet';
    link.id = 'home-page-styles';
    document.head.appendChild(link);

    return () => {
      const existingLink = document.getElementById('home-page-styles');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  return (
    <div className="home-page-container">
      <div className="home-links-wrapper">
        <h1 className="home-title">Musical Interpretation Exploration</h1>
        <Link href="/proposal" className="home-link-button">
          Read the full proposal
        </Link>
        <Link href="/explorer" className="home-link-button">
          Open the interactive explorer
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
