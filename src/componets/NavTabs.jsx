function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav style={{backgroundColor: "white", padding: "25px", display: "flex", justifyContent: "space-between "}}>
        <h2 style={{color: "Black"}}>Benjamin Brechter</h2>
    <ul className="nav-ul" style = {{display: "flex" , margin: 0, alignItems: "center"}}>
      <li className="nav-item">
        <a 
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a 
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
    </ul>
    </nav>
    <div className = "line"></div>
    </div>
    
  );
}

export default NavTabs;

  