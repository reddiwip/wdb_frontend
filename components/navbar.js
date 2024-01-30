// I understand that I should have created seperate css for each of the components to reduce confusion
// however due to time I didn't format it that way, apologies...

import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import Image from 'next/image';

const navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.me}>
        <Link href="/merch">
            <button className={styles.button}>
                Merch
            </button>
        </Link>

        <Link href  = "/events">
            <button className={styles.button}>
                Events
            </button>
        </Link>
        </div>


        <div className={styles.home}>
            <Link href="/">
            <Image
                src="/vector.png" 
                alt="purple sparkle emoji" 
                width={28}  // Width of the image
                height={29} // Height of the image
            />
            </Link>


            <Link href="/">
                <button className={styles.button_bold}>
                    Taylor Swift
                </button>
            </Link>
        </div>
    </nav>
  );
};

export default navbar;
