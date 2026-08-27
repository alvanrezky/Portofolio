export type Jenis = "Praktikum" | "Webinar" | "Sertifikasi" | "Bootcamp" | "Kepanitiaan" | "Lomba";

export type ExperienceItem = {
  semester: number;
  jenis: Jenis;
  judul: string;
  deskripsiSingkat: string;
  deskripsiLengkap: string;
  buktiLampiran?: string;
  buktiUrl?: string;
};

export const experienceData: ExperienceItem[] = [
  {
    semester: 1,
    jenis: "Praktikum",
    judul: "Praktikum Bahasa Pemrograman QBasiq",
    deskripsiSingkat: "Tugas praktikum bahasa pemrograman dasar.",
    deskripsiLengkap:
      "Mengerjakan modul praktikum mata kuliah algortima pemrograman menggunakan bahasa pemrograman QBasiq, sesuai intruksi dan studi kasus dari asisten lab.",
    buktiLampiran: "Laporan praktikum (PDF)",
    buktiUrl: " ",
  },
  {
    semester: 1,
    jenis: "Praktikum",
    judul: "Praktikum fisika dasar",
    deskripsiSingkat: "Tugas praktikum & laporan prakrtikum Fisika dasar.",
    deskripsiLengkap:
      "Melakukan Praktikum & laporan praktikum fisika sesuai hasil praktikum dan sesuai arahan asisten lab fisika.",
  },
  {
    semester: 1,
    jenis: "Sertifikasi",
    judul: "Sertifikasi network for beginner menggunakan Cisco Networking",
    deskripsiSingkat: "Sertifikasi jaringan dasar, program kampus.",
    deskripsiLengkap:
      "Menyelesaikan modul belajar dan ujian sertifikasi Cisco terkait konsep dasar jaringan komputer.",
    buktiLampiran: "Sertifikat Cisco",
    buktiUrl: " ",
  },
  {
    semester: 2,
    jenis: "Sertifikasi",
    judul: "Sertifikasi database for beginner menggunakan SQL Server Management Studio",
    deskripsiSingkat: "Sertifikasi basis data, program kampus.",
    deskripsiLengkap:
      "Menyelesaikan ujian sertifikasi terkait konsep dasar manajemen basis data dengan SQL Server Management Studio.",
    buktiLampiran: "Sertifikat SQL",
    buktiUrl: " ",
  },
  {
    semester: 2,
    jenis: "Praktikum",
    judul: "Praktikum Bahasa Pemrograman Visual Basiq",
    deskripsiSingkat: "Tugas praktikum bahasa pemrograman dasar.",
    deskripsiLengkap:
      "Mengerjakan modul praktikum mata kuliah algortima pemrograman menggunakan bahasa pemrograman Visual Basiq, sesuai intruksi dan studi kasus dari asisten lab.",
    buktiLampiran: "Laporan praktikum (PDF)",
    buktiUrl: " ",
  },
  {
    semester: 2,
    jenis: "Praktikum",
    judul: "Praktikum Bahasa Pemrograman Lazarus",
    deskripsiSingkat: "Tugas praktikum bahasa pemrograman dasar.",
    deskripsiLengkap:
      "Mengerjakan modul praktikum mata kuliah algortima pemrograman menggunakan bahasa pemrograman Lazarus, sesuai intruksi dan studi kasus dari asisten lab.",
    buktiLampiran: "Laporan praktikum (PDF)",
    buktiUrl: " ",
  },
  {
    semester: 2,
    jenis: "Webinar",
    judul: "Peserta webinar Kasir Pintar",
    deskripsiSingkat: "Webinar teknologi bisnis digital untuk UMKM.",
    deskripsiLengkap:
      "Mengikuti sesi webinar yang diselenggarakan Kasir Pintar, tentang Unlocking Growth: Akses Pembiayaan dan Investasi bagi Wirausaha Muda.",
    buktiLampiran: "E-sertifikat peserta",
    buktiUrl: "/sertifikat-peserta-webinar-kasir pintar.png",
  },
  {
    semester: 2,
    jenis: "Webinar",
    judul: "Peserta coaching session Kasir Pintar",
    deskripsiSingkat: "Coaching teknologi bisnis digital untuk UMKM.",
    deskripsiLengkap:
      "Mengikuti sesi webinar yang diselenggarakan Kasir Pintar, tentang How To Create a Business Proposal.",
    buktiLampiran: "E-sertifikat peserta",
    buktiUrl: "/Alvan Priandana Adi.png",
  },
  {
    semester: 2,
    jenis: "Bootcamp",
    judul: "Myskill Bootcamp",
    deskripsiSingkat: "Rangkaian bootcamp bersama Myskill",
    deskripsiLengkap:
      "Mengikuti sesi belajar dan latihan bersama komunitas Myskill, fokus dasar Index Match, Vlookup and Hlookup menggunakan Ms. Excel.",
    buktiLampiran: "E-sertifikat",
    buktiUrl: "/Alvan Priandana Adi - eCertif Ms. Excel MySkill.pdf",
  },
  {
    semester: 2,
    jenis: "Lomba",
    judul: "Lomba Bizclash 3.0 (Business Competition) Kasir Pintar",
    deskripsiSingkat: "Lomba Ide Bisnis kategori aplikasi komplementer",
    deskripsiLengkap:
      "Mengikuti Lomba ide bisnis kategori aplikasi komplementer, membangun BijakDana dan berhaisl ke tahap semifinal dalam perlombaan ini.",
    buktiLampiran: "E-sertifikat peserta semifinalis",
    buktiUrl: "/semifinalis lomba kasiir pintar.png",
  },
  {
    semester: 3,
    jenis: "Bootcamp",
    judul: "Samsung Innovation Campus Batch 8",
    deskripsiSingkat: "program pelatihan teknologi digital dari Samsung Electronics Indonesia.",
    deskripsiLengkap:
      "pelatihan mengenai Coding, Artificial Intelligence (AI), dan Internet of Things (IoT).",
  },
];

export const jenisColor: Record<Jenis, { bg: string; text: string }> = {
  Praktikum: { bg: "rgba(56,189,248,0.15)", text: "#38bdf8" },
  Webinar: { bg: "rgba(45,212,191,0.15)", text: "#2dd4bf" },
  Sertifikasi: { bg: "rgba(245,166,35,0.15)", text: "#f5a623" },
  Bootcamp: { bg: "rgba(167,139,250,0.15)", text: "#a78bfa" },
  Kepanitiaan: { bg: "rgba(244,114,182,0.15)", text: "#f472b6" },
  Lomba: { bg: "rgba(251, 113, 133, 0.15)", text: "#E11D48" },
};