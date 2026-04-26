import Image from "next/image";

export default function Home() {
  return (
    <main >
      <section className="hero">
        <div className="hero-text">
          <h1>
            Kembangkan Bisnis<br />Tanpa Kerumitan
          </h1>
          <p>
            Bersama <strong>18DEV</strong>, buat webite terbaik di Indonesia. Kami siap mendigitalkan bisnis Anda dengan cepat, aman, dan profesional.
          </p>
        </div>
        <div className="hero-image">
          <Image src="/image/p.png" 
            alt="Cover 18DEV" 
            width={600} 
            height={400} 
          />
        </div>
      </section>

      <section className="projects-section">
        <h2 className="text-center">Portofolio Terbaik Kami</h2>
        <p
          className="text-center"
          style={{ color: "var(--text-muted)", marginBottom: "30px" }}
        >
          Beberapa sistem yang telah sukses kami kembangkan.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <Image
              src="/image/cor.png"
              alt="Proyek Web"
              width={400}
              height={300}
            />
            <h3>Corporate Website</h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              Manufaktur & Retail
            </p>
          </div>

          <div className="project-card">
            <Image
              src="/image/pos.webp"
              alt="Proyek Aplikasi"
              width={400}
              height={300}
            />
            <h3>Mobile POS App</h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              Sistem Kasir UMKM
            </p>
          </div>

          <div className="project-card">
            <Image
              src="/image/learning.jpg"
              alt="Proyek E-Learning"
              width={400}
              height={300}
            />
            <h3>Sistem E-Learning</h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              LMS Kampus & Sekolah
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="#" className="link-more">
            Lihat Portofolio Lainnya &rarr;
          </a>
        </div>
      </section>

      <section className="satisfaction-section text-center">
        <h2>Indeks Kepuasan Klien</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Bukti nyata dari pelayanan cepat tanggap kami.
        </p>

        <div className="circle-chart">
          <div className="circle-value">98%</div>
        </div>

        <p style={{ fontSize: "1.1rem" }}>
          Klien kami menyatakan <strong>sangat puas</strong> dengan ketepatan waktu <br />
          dan hasil sistem yang dikembangkan.
        </p>
      </section>

      <section className="cta-section text-center">
        <h2>Siap Mendigitalkan Bisnis Anda?</h2>
        <p style={{ marginBottom: "30px" }}>
          Jadwalkan konsultasi gratis hari ini dan nikmati layanan tanpa ribet.
        </p>
        <a href="/service" className="btn-primary">
          Mulai Proyek Sekarang
        </a>
      </section>
    </main>
  );
}