import Head from 'next/head'
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tangerine Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />

        {/* Center */}
        
      </main>
      <div>
        {/* Player */}

      </div>
    </div>
  )
}
