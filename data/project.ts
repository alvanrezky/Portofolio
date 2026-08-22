export type Project = {
  slug: string;
  title: string;
  summary: string;
  track: "A" | "B";
  logo?: string;
  thumbnail?: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  documentation: {
    problem: string;
    approach: string;
    insights: string;
    challenges: string;
  };
  timeline?: { label: string; title: string; desc: string }[];
  screenshots?: { src: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "bijakdana",
    title: "BijakDana - Personal Finance PWA",
    summary: "Aplikasi manajemen keuangan pribadi berbasis Next.js dan Supabase.",
    track: "A",
    logo: "/logo.jpeg",
    thumbnail: "/thumbnail-bijakdana.png",
    techStack: ["Next.js", "Supabase", "TypeScript"],
    demoUrl: "https://bijak-dana.vercel.app",
    repoUrl: "",
    documentation: {
      problem: "Generasi muda Indonesia mengadopsi layanan keuangan digital jauh lebih cepat dibanding pemahaman literasi keuangannya, memicu risiko perilaku konsumtif dan minim dana darurat.",
      approach: "BijakDana hadir sebagai asisten keuangan personal berbasis AI yang men-generate tabel anggaran otomatis, personal, dan adaptif bagi tiap pengguna.",
      insights: "SNLIK 2025 mencatat kesenjangan inklusi-literasi keuangan usia 18–25 tahun mencapai 16,74 poin, tertinggi di antara seluruh kelompok usia produktif.",
      challenges: "Sebagai usaha rintisan tahap awal, BijakDana masih menghadapi tantangan umum validasi pasar, keterbatasan sumber daya, dan penguatan kemitraan strategis.",
    },
    timeline: [
      {
        label: "Mei 2026",
        title: "Riset & proposal bisnis",
        desc: "Menyusun argumen berbasis data SNLIK 2025, TAM, dan model biaya AI.",
      },
      {
        label: "Juli 2026",
        title: "Desain database & backend",
        desc: "Setup Supabase, tabel transaksi, auth, dan API routes, Tabel keuangan, grafik analisis, tabungan & investasi.",
      },
      {
        label: "Agustus 2026",
        title: "Deploy & uji coba",
        desc: "Rilis ke Vercel, uji coba dengan pengguna awal.",
      },
      {
        label: "September 2026",
        title: "Evaluasi & uji coba tahap 2",
        desc: "Revisi dan update ke vercel, uji coba tahap 2.",
      },
    ],
    screenshots: [
      { src: "/foto1.jpg", label: "Beranda" },
      { src: "/foto2.jpg", label: "Tabel Keuangan" },
      { src: "/foto3.jpg", label: "Grafik Analisis" },
      { src: "/foto4.jpg", label: "Budget vs Aktual" },
      { src: "/foto5.jpg", label: "Tabungan" },
      { src: "/foto6.jpg", label: "Rekomendasi" },
    ],
  },
];