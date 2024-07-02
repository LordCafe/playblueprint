import styles from "../page.module.css"
import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Home() {
    return (

        <main className={styles.main}>
            <Header></Header>            

            <Footer></Footer>
        </main>
    );
}
