import styles from "../page.module.css"
import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import InfinityScroll from "@/components/InfinityScroll";



export const metadata = {
    title: "Infinity Scroll ",
    description: "Simple infinity Scroll",
  };

export default function Home() {
    return (

        <main className={styles.main}>
            <Header></Header>            
            <InfinityScroll></InfinityScroll>
            <Footer></Footer>
        </main>
    );
}
