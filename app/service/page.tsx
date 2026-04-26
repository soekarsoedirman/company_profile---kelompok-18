const services = [
	{
		id: "01",
		title: "Website Company Profile",
		description:
			"Membuat halaman perusahaan yang rapi, mudah dibaca, dan mewakili citra bisnis dengan jelas.",
		points: ["Tampilan sederhana", "Responsif", "Siap dipublikasikan"],
	},
	{
		id: "02",
		title: "Sistem Pendukung Bisnis",
		description:
			"Menata kebutuhan operasional seperti katalog, data produk, dan alur informasi internal agar lebih tertata.",
		points: ["Alur kerja ringkas", "Mudah dipakai", "Struktur data jelas"],
	},
	{
		id: "03",
		title: "Maintenance & Update",
		description:
			"Membantu perawatan, penyesuaian konten, dan pembaruan kecil setelah website digunakan.",
		points: ["Perbaikan bug", "Update konten", "Pendampingan lanjutan"],
	},
];

export default function Service() {
	return (
		<main className="content-wrapper service-page" id="service">
			<br />
			<br />
			<section className="about-hero">
				<h2>Layanan Kami</h2>
				<h1>Solusi digital yang rapi, cepat, dan mudah dipahami.</h1>
				<p>
					18DEV membantu bisnis membuat website dan sistem pendukung yang tampil
					jelas, terasa profesional, dan tetap praktis dipakai sehari-hari.
				</p>
			</section>

			<section className="vision-mission">
				<div className="vm-card">
					<h3>Fokus Pekerjaan</h3>
					<p>
						Kami menangani pembuatan website company profile, landing page, dan
						kebutuhan digital dasar yang membantu bisnis terlihat lebih siap.
					</p>
				</div>
				<div className="vm-card">
					<h3>Cara Kerja</h3>
					<p>
						Proses dibuat singkat dan jelas, mulai dari diskusi kebutuhan, susun
						struktur, pengerjaan tampilan, sampai pengecekan akhir.
					</p>
				</div>
			</section>

			<section className="founders-section service-section">
				<h3>Rincian Layanan</h3>

				<div className="service-grid">
					{services.map((service) => (
						<article className="service-card" key={service.id}>
							<span className="service-index">{service.id}</span>
							<h3>{service.title}</h3>
							<p>{service.description}</p>
							<ul>
								{service.points.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</section>

			<section className="cta-section text-center">
				<h2>Terima kasih</h2>
				<p style={{ marginBottom: "10px" }}>
					Kalau butuh layanan di atas, langsung hubungi tim kami.
				</p>
				<p>Kami siap bantu dari awal sampai selesai.</p>
			</section>
		</main>
	);
}
