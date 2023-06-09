import {ReactComponent as GithubIcon} from 'assets/img/Vector.svg';
import './styles.css';

function Navbar(){
    return (
        <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>ReinaldoMovies</h1>
          <a href="https://github.com/PblReinaldo">
            <div className='dsmovie-contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/pblreinaldo</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;