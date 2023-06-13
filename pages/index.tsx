import { Roboto } from 'next/font/google'
import Navbar from "@/pages/components/Navbar/Navbar";

const roboto = Roboto({ subsets: ['latin'], weight: "400" })

export default function Home() {
  return (
    <main
      className={roboto.className}
    >
      <Navbar></Navbar>
    </main>
  )
}
