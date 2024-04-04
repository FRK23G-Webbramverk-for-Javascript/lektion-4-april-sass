import './Navigation.scss';

function Navigation() {
  return (
    <nav className='navigation'>
      <a href='#' className='navigation__link active'>
        Hem
      </a>
      <a href='#' className='navigation__link'>
        Projekt
      </a>
      <a href='#' className='navigation__link'>
        Om
      </a>
      <a href='#' className='navigation__link'>
        Kontakt
      </a>
    </nav>
  );
}

export default Navigation;
