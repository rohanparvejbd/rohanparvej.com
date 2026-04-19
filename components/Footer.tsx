<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Rohan Parvej</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: #f5f5f3;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 60px 24px;
    }

    main p {
      font-size: 15px;
      color: #888;
      letter-spacing: 1px;
      text-align: center;
    }

    /* ── Footer ── */
    footer {
      background: #f5f5f3;
      border-top: 1px solid #e0dede;
    }

    .footer-logo-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 70px 24px 48px;
      position: relative;
      overflow: hidden;
    }

    .footer-arc {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 700px;
      height: 320px;
      pointer-events: none;
    }

    .footer-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      margin-bottom: 44px;
      z-index: 1;
      position: relative;
    }

    .footer-logo-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 52px;
      letter-spacing: 7px;
      color: #111;
      line-height: 1;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .film-strip {
      display: inline-flex;
      align-items: flex-end;
    }

    .footer-logo-sub {
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      letter-spacing: 9px;
      color: #666;
      font-weight: 300;
      text-transform: uppercase;
    }

    .footer-nav {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      z-index: 1;
      position: relative;
    }

    .footer-nav a {
      text-decoration: none;
      color: #222;
      font-size: 14px;
      font-weight: 400;
      border: 1px solid #ccc;
      border-radius: 999px;
      padding: 9px 24px;
      background: transparent;
      transition: background 0.18s, color 0.18s, border-color 0.18s;
    }

    .footer-nav a:hover {
      background: #111;
      color: #fff;
      border-color: #111;
    }

    .footer-bottom {
      border-top: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px 48px;
      flex-wrap: wrap;
      gap: 14px;
    }

    .footer-email {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #333;
      font-size: 14px;
      text-decoration: none;
      transition: color 0.15s;
    }

    .footer-email:hover { color: #000; }

    .footer-social {
      display: flex;
      gap: 10px;
    }

    .footer-social a {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #111;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: opacity 0.18s;
    }

    .footer-social a:hover { opacity: 0.75; }

    .footer-copy {
      font-size: 13px;
      color: #888;
    }

    @media (max-width: 640px) {
      .footer-bottom {
        flex-direction: column;
        align-items: center;
        padding: 22px 24px;
        text-align: center;
      }
      .footer-logo-name { font-size: 38px; }
      .footer-arc { width: 420px; height: 220px; }
    }
  </style>
</head>
<body>

  <main>
    <p>Your page content goes here</p>
  </main>

  <footer>
    <div class="footer-logo-section">
      <!-- Arc rings background -->
      <svg class="footer-arc" viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="350" cy="320" rx="310" ry="240" stroke="#e0dede" stroke-width="1" fill="none"/>
        <ellipse cx="350" cy="320" rx="240" ry="185" stroke="#e8e6e6" stroke-width="1" fill="none"/>
        <ellipse cx="350" cy="320" rx="165" ry="125" stroke="#eeecec" stroke-width="1" fill="none"/>
      </svg>

      <!-- Logo -->
      <div class="footer-logo">
        <div class="footer-logo-name">
          <!-- Film strip icon replacing "R" -->
          <span class="film-strip">
            <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="40" height="50" rx="3" fill="#111"/>
              <rect x="3" y="3.5" width="7" height="7" rx="1" fill="#f5f5f3"/>
              <rect x="16" y="3.5" width="7" height="7" rx="1" fill="#f5f5f3"/>
              <rect x="29" y="3.5" width="7" height="7" rx="1" fill="#f5f5f3"/>
              <rect x="3" y="39.5" width="7" height="7" rx="1" fill="#f5f5f3"/>
              <rect x="16" y="39.5" width="7" height="7" rx="1" fill="#f5f5f3"/>
              <rect x="29" y="39.5" width="7" height="7" rx="1" fill="#f5f5f3"/>
            </svg>
          </span>
          OHAN PARVEJ
        </div>
        <div class="footer-logo-sub">Director &nbsp;·&nbsp; Creator &nbsp;·&nbsp; Filmmaker</div>
      </div>

      <!-- Navigation -->
      <nav class="footer-nav">
        <a href="#">Works</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </nav>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <a class="footer-email" href="mailto:contact@rohanparvej.com">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="3" width="14" height="10" rx="2" stroke="#444" stroke-width="1.2"/>
          <path d="M1.5 5L8 9.5L14.5 5" stroke="#444" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        contact@rohanparvej.com
      </a>

      <div class="footer-social">
        <!-- Facebook -->
        <a href="https://facebook.com" target="_blank" rel="noopener" title="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <!-- Instagram -->
        <a href="https://instagram.com" target="_blank" rel="noopener" title="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none"/>
          </svg>
        </a>
        <!-- LinkedIn -->
        <a href="https://linkedin.com" target="_blank" rel="noopener" title="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>

      <span class="footer-copy">© 2025 Rohan Parvej. All Rights Reserved.</span>
    </div>
  </footer>

</body>
</html>