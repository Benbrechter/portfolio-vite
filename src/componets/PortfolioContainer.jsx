import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About'
import Resume from "./pages/Resume"
import Connections from './connections'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About'){
        return < About />
    }
    if(currentPage === 'Resume'){
      return < Resume />
  }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main >{renderPage()}</main>
      <footer><Connections/></footer>
    </div>
  );
}
