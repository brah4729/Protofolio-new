import Link from 'next/link';

export function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      padding: '0.75rem 2rem',
      display: 'flex',
      gap: '2.5rem',
      alignItems: 'center',
      fontSize: '0.9rem',
      letterSpacing: '0.02em',
    }} className="glass">
      <Link href="/" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
        Home
      </Link>
      <Link href="#about" style={{ color: 'var(--text-secondary)' }}>
        About
      </Link>
      <Link href="#projects" style={{ color: 'var(--text-secondary)' }}>
        Projects
      </Link>
      <Link href="#contact" style={{ color: 'var(--text-secondary)' }}>
        Contact
      </Link>
    </nav>
  );
}
