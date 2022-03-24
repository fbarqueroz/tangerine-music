import Head from 'next/head'
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <div className="bg-gray-500 h-screen overflow-hidden">
      <Head>
        <title>Tangerine Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Sidebar />
        {/* Center */}
        
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  )
}
