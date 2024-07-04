"use front"
import styles from "../page.module.css"
import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Memorama from "@/components/Memorama/page";



export const metadata = {
    title: "Memorama sencillo",
    description: "Memorama sencillo",
  };

export default function Home() {
    return (

        <main className={styles.main}>
            <Header></Header>            
             <Memorama></Memorama>
            <Footer></Footer>
        </main>
    );
}
