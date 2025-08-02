import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>OverEdge – Free Picks</title>
      </Head>
      <main>
        <h1>OverEdge – Free Daily Picks</h1>
        <p>2 games daily with 80%+ over/under probability.</p>
        <ul>
          <li><Link href="/pro">Go to Pro Dashboard</Link></li>
          <li><Link href="/pick-of-the-day">Pick of the Day</Link></li>
          <li><Link href="/risky-bet">Risky Bet</Link></li>
        </ul>
      </main>
    </div>
  )
}