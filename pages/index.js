import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/navbar.js"
import Link from 'next/link';



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // for the image i did screen height - nav padding height to figure out best way to position
  const navBarPaddingPercentage = 1.7; 
  const navBarHeight = `calc(100vh * ${navBarPaddingPercentage / 100})`;

  return (
    <>

      <Head>
        <title>The Eras Tour</title>

        <meta name="description" content="The Eras Tour Tickets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ts_icon.png" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>

      <div>
        <NavBar />

        <div style={{ position: 'fixed', width: '100%', height: `calc(100vh - ${navBarHeight})` }}>
          <Image
            src="/t_swift.png"
            alt="taylor swift in dress"
            layout="fill"
            objectFit="cover"
            objectPosition="10% 5%"
          />
        </div>

      <div className={styles.overlayText}>
        Taylor Swift
        <br />
        on Tour
        <br />
      </div>
      <Link className={styles.overlayButton} href="/events">
                <button className={styles.button1}>
                    See Her Perform
                </button>
      </Link>

      </div>

      </main>

    </>
  );
}