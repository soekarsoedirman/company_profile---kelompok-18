"use client";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Brand */}
                <div className="footer-brand">
                    <h3>18DEV</h3>
                    <p>#ServiceAntiRibet</p>
                </div>

                {/* Navigation */}
                <div className="footer-links">
                    <a href="/ ">Home</a>
                    <a href="/service">Service</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                    <p>📍 Jakarta, Indonesia</p>
                    <p>📞 +62 812 3456 7890</p>
                    <p>✉️ halo@18dev.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} 18DEV. All rights reserved.</p>
            </div>
            <style jsx>{`
                .footer {
                background: var(--blue-dark);
                color: white;
                margin-top: 80px;
                padding-top: 50px;
                width: 100%;
                }

                .container {
                margin: 0 auto;
                padding: 0 20px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 40px;
                }

                .footer-brand h3 {
                font-size: 1.8rem;
                margin-bottom: 10px;
                }

                .footer-brand p {
                opacity: 0.7;
                }

                .footer-links {
                display: flex;
                flex-direction: column;
                gap: 10px;
                }

                .footer-links a {
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;
                transition: 0.3s;
                }

                .footer-links a:hover {
                color: var(--orange-main);
                }

                .footer-contact p {
                margin-bottom: 8px;
                opacity: 0.8;
                }

                .footer-bottom {
                margin-top: 40px;
                padding: 20px;
                text-align: center;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                font-size: 0.9rem;
                opacity: 0.7;
                }

                /* Responsive */
                @media (max-width: 768px) {
                .container {
                    grid-template-columns: 1fr;
                    text-align: center;
                }
                }
      `}</style>
        </footer>
    )
}