import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px' }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
