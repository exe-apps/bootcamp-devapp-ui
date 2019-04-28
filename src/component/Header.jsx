import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Developers</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/assessments'>Assessments</Link></li>
          <li><Link to='/reports'>Reporting Tool</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;