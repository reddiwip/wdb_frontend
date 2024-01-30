// I understand that I should have created seperate css for each of the components to reduce confusion
// however due to time I didn't format it that way, apologies...

import React from 'react';
import Link from 'next/link';
import styles from "@/styles/footer.module.css";
import Image from 'next/image';

const footer = () => {
  return (
    <nav className={styles.nav}>

    <Link href="https://www.instagram.com/TaylorSwift" passHref className={styles.img}>

          <Image
            src="/foot/insta.png" 
            alt="Instagram"
            width={30}
            height={30}
          />

      </Link>

      <Link href="https://twitter.com/taylorswift13" passHref className={styles.img}>

        <Image
        src="/foot/twitter.png"
        alt="Twitter"
        width={30}
        height={30}
        />

    </Link>

    <Link href="https://www.facebook.com/TaylorSwift/" passHref className={styles.img}>
    <Image
    src="/foot/facebook.png"
    alt="Facebook"
    width={30}
    height={30}
    />

    </Link>

    </nav>


  );
};

export default footer;
