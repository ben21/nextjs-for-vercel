import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      <Link href="/">Lien vers Accueil</Link>
      {'   '}
      <Link href="/about">Lien vers la page About</Link>
      {'   '}
      <Link href="/films">Lien vers la page Films</Link>
    </div>
  );
}
