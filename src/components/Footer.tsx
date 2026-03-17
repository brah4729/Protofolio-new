export function Footer() {
  return (
    <footer style={{
      padding: '4rem 0',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      borderTop: '1px solid var(--border-color)',
      marginTop: '8rem',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <p>© {new Date().getFullYear()} Frontend Engineer. Engineered with precise detail.</p>
      </div>
    </footer>
  );
}
