import Image from "next/image";

export default function About() {
  return (
    <main className="content-wrapper" id="about">
        <br />
        <br />
      <section className="about-hero">
        <h2>Tentang Kami</h2>
      </section>

      <section className="vision-mission">
        <div className="vm-card">
          <h3>Visi Perusahaan</h3>
          <p>
            Menciptakan dunia yang terhubung secara elektronik dan menghadirkan
            solusi teknologi cerdas yang secara nyata mempermudah kehidupan
            bermasyarakat di era digital.
          </p>
        </div>
        <div className="vm-card">
          <h3>Misi Kami</h3>
          <p>
            Berkomitmen memajukan UMKM Indonesia dengan menyediakan akses
            pembuatan website dan sistem manajemen yang terjangkau, mudah
            dikelola, dan 100% #ServiceAntiRibet.
          </p>
        </div>
      </section>

      <section className="founders-section">
        <h3>Pionir di Balik 18DEV</h3>

        <div className="founders-grid">
          <div className="founder-card">
            <div className="img-ring">
              <Image
                src="/image/jok.png"
                alt="Bapak Ahmad"
                width={300}
                height={300}
                className="circle-img"
              />
            </div>
            <h4>Jack the liar</h4>
            <p>Co-Founder & CEO</p>
          </div>

          <div className="founder-card">
            <div className="img-ring">
              <Image
                src="/image/this.png"
                alt="Bapak Budi"
                width={300}
                height={300}
                className="circle-img"
              />
            </div>
            <h4>man the dreamer</h4>
            <p>Co-Founder & CTO</p>
          </div>

          <div className="founder-card">
            <div className="img-ring">
              <Image
                src="/image/owo.png"
                alt="Bapak Budi"
                width={300}
                height={300}
                className="circle-img"
              />
            </div>
            <h4>owo monocotil</h4>
            <p>Co-Founder & CTO</p>
          </div>
        </div>
        <br />
        <br />
      </section>
    </main>
  );
}