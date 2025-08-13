import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="prefooter" aria-label="Pre-Footer">
      <div className="prefooter__wrap">
        {/* Left: image */}
        <div className="prefooter__col prefooter__col--image">
          <img
            src="/images/footer-bg.jpg"
            alt="Assorted mini cupcakes"
            loading="lazy"
          />
        </div>

        {/* Middle: hearts + two links */}
        <div className="prefooter__col prefooter__col--features">
          <h5 className="prefooter__kicker">Enjoy</h5>
          <p className="prefooter__muted">
            Sweetness across friends,<br /> sprinkled with love.
          </p>

          <div className="prefooter__hearts" aria-hidden="true">
            <span>♥</span><span>♥</span><span>♥</span>
          </div>

          <div className="prefooter__links">
            <a href="#" className="prefooter__btnlink">VIEW DETAILS</a>
            <a href="#" className="prefooter__btnlink">MORE PHOTOS</a>
          </div>
        </div>

        {/* Right: Follow Us + round icons */}
        <div className="prefooter__col prefooter__col--social">
          <h5 className="prefooter__script">Follow Us</h5>

          <div className="prefooter__socials">
            {/* Facebook */}
            <a className="social" href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor"
                  d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88
                     1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a className="social" href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
              </svg>
            </a>
            {/* Pinterest */}
            <a className="social" href="#" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor"
                  d="M12.04 2C6.49 2 3.5 5.65 3.5 9.58c0 1.92.86 4.07 2.77 4.79.26.1.5 0 .58-.28.05-.2.18-.71.24-.92.07-.27.04-.37-.16-.61-.54-.64-.88-1.47-.88-2.65 0-3.41 2.57-6.47 6.69-6.47 3.65 0 5.67 2.23 5.67 5.21 0 3.92-1.73 7.24-4.3 7.24-1.42 0-2.48-1.17-2.14-2.6.41-1.72 1.21-3.57 1.21-4.8 0-1.11-.6-2.04-1.83-2.04-1.45 0-2.61 1.5-2.61 3.51 0 1.28.43 2.14.43 2.14l-1.75 7.44c-.52 2.21.06 4.92.07 5.01.03.09.12.12.18.05.08-.1 1.08-1.49 1.54-2.87.1-.32.6-2.35.6-2.35.3.56 1.18 1.03 2.12 1.03 3.25 0 5.45-2.96 5.45-6.92C18.5 6.33 15.87 2 12.05 2z"/>
              </svg>
            </a>
          </div>

          <small className="prefooter__muted">Sweet moments, share connections.</small>
        </div>
      </div>
    </section>
  );
}
