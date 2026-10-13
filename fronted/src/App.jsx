import profileLogo from "./assets/profileLogo.png";
import AppNavLink from "./AppNavLink.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="site-brand" href="#home">
          <img src={profileLogo} alt="" width="36" height="36" />
        </a>
        <AppNavLink />
      </header>

      <main id="main-content">
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
        <BlogPage />
      </main>

      <footer>
        <p>© {currentYear} Your Name</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

const currentYear = new Date().getFullYear();

export default App;
