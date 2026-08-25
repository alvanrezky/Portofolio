export type Project = {
  slug: string;
  title: string;
  summary: string;
  track: "A" | "B";
  logo?: string;
  thumbnail?: string;
  techStack: string[];
  demoUrl?: string;
  demoLabel?: string;
  repoUrl?: string;
  background?: string;
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
    demoLabel: "Lihat Prototype",
    repoUrl: "https://github.com/alvanrezky/BijakDana.git",
    background: "BijakDana lahir dari keresahan saya terhadap lingkaran pertemanan yang kerap kesulitan mengatur keuangan dan tidak siap secara finansial untuk masa depan. Bersama 3 rekan, saya membangun aplikasi ini untuk ajang BizClash 3.0 oleh Kasir Pintar, dengan peran sebagai ketua tim yang merancang strategi bisnis sekaligus membangun aplikasi secara penuh dari frontend hingga backend. Meski tim kami hanya melaju sampai semifinal, saya tetap mengembangkan BijakDana secara mandiri hingga kini sebagai project pertama saya membangun sistem production-ready secara utuh.",
    documentation: {
      problem: "Generasi muda Indonesia mengadopsi layanan keuangan digital jauh lebih cepat dibanding pemahaman literasi keuangannya, memicu risiko perilaku konsumtif dan minimnya dana darurat di usia produktif.",
      approach: "BijakDana hadir sebagai asisten keuangan personal berbasis AI yang menganalisis kondisi keuangan pengguna secara menyeluruh dan men-generate strategi serta tabel anggaran yang otomatis, personal, dan adaptif.",
      insights: "SNLIK 2025 mencatat kesenjangan inklusi-literasi keuangan pada usia 18–25 tahun mencapai 16,74 poin, tertinggi di antara seluruh kelompok usia produktif, menunjukkan generasi muda paling rentan menggunakan layanan fintech tanpa edukasi yang memadai.",
      challenges: "Sebagai project pertama saya membangun aplikasi production-ready secara mandiri, tantangan terbesar ada pada mengintegrasikan seluruh ekosistem teknis (Supabase, Vercel, OpenRouter, Midtrans) hingga berjalan stabil, sembari tim tetap menghadapi validasi pasar dan keterbatasan sumber daya sebagai usaha rintisan tahap awal.",
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
        label: "September 2026",
        title: "Deploy & uji coba",
        desc: "Rilis ke Vercel, uji coba dengan pengguna awal.",
      },
      {
        label: "Desember 2026",
        title: "Evaluasi & uji coba tahap 2",
        desc: "Revisi dan update ke vercel, uji coba tahap 2.",
      },
    ],
    screenshots: [
      { src: "/foto1.jpeg", label: "Beranda" },
      { src: "/foto2.jpeg", label: "Tabel Keuangan" },
      { src: "/foto3.jpeg", label: "Grafik Analisis" },
      { src: "/foto4.jpeg", label: "Tabungan & Dana Darurat" },
      { src: "/foto5.jpeg", label: "Perbandingan Instrumen Investasi" },
      { src: "/foto6.jpeg", label: "Personal Asisten (AI)" },
    ],
  },
  {
    slug: "HYy6F",
    title: "Dampak AI pada Pekerjaan - Dashboard Analyst",
    summary: "Dashboard analisis risiko PHK akibat AI berbasis Google Sheets & Looker Studio.",
    track: "B",
    logo: "",
    thumbnail: "/poster-dampak-ai.png",
    techStack: ["Ms. Excel", "Looker Studio", "Google Sheet"],
    demoUrl: "https://datastudio.google.com/u/0/reporting/82354b24-a595-4c61-a697-a41bf97236e4/page/HYy6F",
    demoLabel: "Buka Dashboard",
    repoUrl: "",
    background: "Project ini lahir dari rasa penasaran sekaligus kekhawatiran pribadi saya sebagai mahasiswa yang akan memasuki dunia kerja, di tengah masifnya adopsi AI yang membuat banyak orang bertanya tanya apakah pekerjaannya kelak masih aman. Saya mengerjakan seluruh proses secara mandiri selama kurang lebih 2 minggu, mulai dari riset dan cleaning data hingga membangun dashboard interaktif menggunakan Google Sheets dan Looker Studio.",
    documentation: {
      problem: "Maraknya pemberitaan tentang AI menggantikan pekerjaan manusia menimbulkan kecemasan luas, namun jarang disertai data konkret soal pekerjaan mana yang benar-benar berisiko tinggi dan mana yang masih relatif aman.",
      approach: "Riset ini menganalisis data 20.000 pekerja dari 8 sektor industri, membandingkan skor risiko berdasarkan jenis industri, tingkat pengalaman kerja, jenis pekerjaan spesifik, hingga persentase tugas rutin di masing-masing posisi.",
      insights: "Temuan utama menunjukkan bahwa faktor paling menentukan risiko PHK bukanlah industri atau lama bekerja, melainkan seberapa rutin dan repetitif tugas suatu pekerjaan. Semakin tinggi porsi tugas rutin, semakin tinggi pula skor risikonya, seperti terlihat pada sektor Manufacturing (2,29) dibanding Education (1,72).",
      challenges: "Tantangan ke depan adalah bagaimana pekerja dengan tugas rutin tinggi (misalnya operator produksi) dapat bertransisi mengembangkan kompetensi yang sulit ditiru AI, seperti komunikasi, empati, dan pengambilan keputusan kontekstual, sebelum otomatisasi semakin meluas.",
    },
    timeline: [
      {
        label: "19/08/2026",
        title: "Riset data",
        desc: "Mencari suatu masalah yang akan saya analisis dan akan saya jawab masalahnya menggunakan data yang saya temukan.",
      },
      {
        label: "23/08/2026",
        title: "Data cleaning & data transformasi",
        desc: "Merapihkan data mentah yang ada dan memisahkan mana saja data yang akan dianalisis.",
      },
      {
        label: "28/08/2026",
        title: "Analisis data",
        desc: "Menganalisis data sesuai pertanyaan yang saya ingin dijawab melalui data.",
      },
      {
        label: "01/09/2026",
        title: "Menyusun dashboard analyst",
        desc: "Menyusun dashboard dari hasil data yang saya dapatkan dari hasil analisis saya melalui chart dan dijelaskan dengan cerita.",
      },
    ],
  },
];