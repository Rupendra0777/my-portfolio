import profileLogo from "./assets/profileLogo.png";
import AppNavLink from "./AppNavLink.jsx";
import AppRouter from "./AppRouter.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="site-brand" to="/">
          <img src={profileLogo} alt="" width="36" height="36" />
        </Link>
        <AppNavLink />
      </header>

      <main id="main-content">
        <AppRouter />
      </main>

      <footer>
        <p>© {currentYear} Rupendra Dhungana</p>
        <nav className="footer-socials" aria-label="Social media links">
          <a
            href="https://github.com/Rupendra0777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.69 2.47 4.3 1.73.1-.73.39-1.23.7-1.51-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.62 1.56.23 2.71.12 3 .72.79 1.15 1.8 1.15 3.04 0 4.35-2.65 5.3-5.17 5.59.4.34.75 1.02.75 2.06v3.05c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
              />
            </svg>
          </a>
          <a
            href="https://x.com/rups1603"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (opens in a new tab)"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.901 1.5h3.68L14.54 10.18 24 22.5h-7.406l-5.8-7.584L4.17 22.5H.486l8.6-9.83L0 1.5h7.594l5.243 6.932L18.901 1.5Zm-1.29 18.83h2.039L6.486 3.556H4.298L17.61 20.33Z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/rupendradhungana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@rdchannel0777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube (opens in a new tab)"
          >


            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23.5 6.19a3.01 3.01 0 0 0-2.12-2.13C19.51 3.55 12 3.55 12 3.55s-7.51 0-9.38.51A3.01 3.01 0 0 0 .5 6.19 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.81 3.01 3.01 0 0 0 2.12 2.13c1.87.51 9.38.51 9.38.51s7.51 0 9.38-.51a3.01 3.01 0 0 0 2.12-2.13A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"
              />
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
}

const currentYear = new Date().getFullYear();

export default App;
