function Footer() {
  return (
    <footer className="footer">
      <img
        src="/assets/spyxfamilylogo.png"
        alt="Spy x Family Logo"
        className="footer-logo"
      />

      <p className="footer-watch-text">Watch Spy x Family on:</p>

      <div className="footer-icons">
        <a
          href="https://www.netflix.com/ph-en/title/81511410?source=351"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/netflix.png" alt="Netflix" className="footer-icon" />
        </a>
        <a
          href="https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family?srsltid=AfmBOoroPRbhmEiFxTM_xvniyeDNxxRZcuwRGlRHe4ZhvMtxjHTU-MC6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/crunchyroll.png" alt="Crunchyroll" className="footer-icon" />
        </a>
      </div>

      <p className="footer-text">&copy; Spy x Family. All rights reserved.</p>
    </footer>
  );
}

export default Footer;