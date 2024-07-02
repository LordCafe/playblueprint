import styles from "@/app/page.module.css"
import Image from "next/image";

export default function Header() {

    return (

        <div className={styles.description}>
            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>src/app/page.js</code>
            </p>
            <div>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{" "}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </div>


    );
}