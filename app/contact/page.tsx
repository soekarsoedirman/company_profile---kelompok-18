export default function Contact() {
	return (
		<main className="content-wrapper" id="contact">
			<br />
			<br />
			<section className="about-hero">
				<h2>Kontak</h2>
				<p>
					Kalau mau ngobrol soal website atau sistem, langsung hubungi aja.
				</p>
			</section>

			<section className="vision-mission">
				<div className="vm-card">
					<h3>Kontak Cepat</h3>
					<p>WhatsApp: +62 812 3456 7890</p>
					<p>Email: halo@18dev.com</p>
					<p>Lokasi: Jakarta, Indonesia</p>
				</div>

				<div className="vm-card">
					<h3>Info Singkat</h3>
					<p>Jam respon: Senin - Jumat, 09.00 - 17.00 WIB.</p>
					<p>Boleh kirim brief sederhana dulu, nanti kita rapikan bareng.</p>
					<p>Kalau urgent, lebih cepat lewat WhatsApp.</p>
				</div>
			</section>

			<section className="founders-section">
				<h3>Sebelum Hubungi Kami</h3>
				<p style={{ color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto 10px" }}>
					Supaya diskusi lebih cepat, cukup kirim 3 hal ini:
				</p>
				<p style={{ color: "var(--text-muted)" }}>1. Jenis website/sistem yang dibutuhkan</p>
				<p style={{ color: "var(--text-muted)" }}>2. Kapan target mulai</p>
				<p style={{ color: "var(--text-muted)" }}>3. Referensi gaya (kalau ada)</p>
				<br />
			</section>

			<section className="cta-section text-center">
				<h2>Terima kasih sudah mampir</h2>
				<p style={{ marginBottom: "10px" }}>
					Kalau ada pertanyaan, langsung chat atau email saja.
				</p>
				<p>Kami akan balas secepatnya.</p>
			</section>
		</main>
	);
}
