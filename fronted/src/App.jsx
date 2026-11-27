import AppNavLink from "./AppNavLink.jsx";
import HomePage from "./pages/HomePage.jsx";
import profileLogo from "./assets/profileLogo.png";

function App() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="site-brand" href="#home">
          <img src={profileLogo} alt="" width="30" height="30" />
          <span>Rupendra</span>
        </a>
        <AppNavLink />
      </header>

      <main id="main-content">
        <HomePage />
      </main>

      <footer>
        <p>© {currentYear} Rupendra Dhungana</p>
        <nav className="footer-socials" aria-label="Social media links">
          <a
            href="https://github.com/Rupendra0777"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://x.com/rups1603"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/rupendradhungana"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@rdchannel0777"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a href="mailto:dhunganarupendra69@gmail.com">Email</a>
        </nav>
      </footer>
    </div>
  );
}

const currentYear = new Date().getFullYear();

export default App;
