import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Kaia Hellem</h1>
      <p>Velkommen til porteføljen min</p>
      <Link href="/om">Om meg</Link>
    </main>
  )
}