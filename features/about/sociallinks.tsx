export default function SocialLinks() {
  const links = [
    { name: "Instagram", url: "https://instagram.com/apa_rezky" },
    { name: "GitHub", url: "https://github.com/alvanrezky" },
    { name: "LinkedIn", url: "https://linkedin.com/in/alvan-priandana-adi-89b634378" },
    { name: "Email", url: "mailto:alvanrezky@gmail.com" },
  ];

  return (
    <div className="social-icons">
      {links.map((link) => (
        <a key={link.name} href={link.url} target="_blank" className="social-icon">
          {link.name}
        </a>
      ))}
    </div>
  );
}