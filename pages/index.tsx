import {Roboto} from 'next/font/google'
import Navbar from "@/pages/components/Navbar/Navbar";
import Intro from "@/pages/components/Intro/Intro";
import CompanyBar from "@/pages/components/CompanyBar/CompanyBar";

const roboto = Roboto({subsets: ['latin'], weight: ["400", "700"]})

export default function Home() {
    return (
        <main
            className={roboto.className}
        >
            <Navbar/>
            <Intro/>
            <CompanyBar />
        </main>
    )
}
