import NavBar from "@/components/navbar.js";
import Footer from "@/components/footer.js";
import Link from 'next/link';
import styles from "@/styles/menu.module.css";
import Head from "next/head";
import Image from "next/image";
import Hover from "@/components/hover.js";


export default function merch() {

    const handleButtonClick = () => {
        console.log('lol');
      };

    return (
        <>

        <Head> 
        <title>The Eras Tour</title>

        <meta name="description" content="The Eras Tour Tickets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ts_icon.png" />
        </Head>


        
        <NavBar />


        <Image className={styles.redundant}
            src="/m_title.png"
            alt="merch"
            width="250"
            height="100"
          />




    <div className={styles.row1}>
      <Hover 
        imageSrc="/clothes/t_1.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Shirt"
        price="$45 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
      />

    <div style={{ marginRight: '20px' }}></div>

    <Hover 
        imageSrc="/clothes/t_2.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Crewneck"
        price="$65 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
      />

    <div style={{ marginRight: '20px' }}></div>

    <Hover 
        imageSrc="/clothes/t_3.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Shirt"
        price="$45 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
      />

    <div style={{ marginRight: '20px' }}></div>

    <Hover 
        imageSrc="/clothes/t_4.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Crewneck"
        price="$65 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
    />

    <div style={{ marginRight: '20px' }}></div>

    <Hover 
        imageSrc="/clothes/t_5.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Shirt"
        price="$49 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
    />


    </div>







    <div className={styles.row2}>
      <Hover 
        imageSrc="/clothes/t_6.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Shirt"
        price="$45 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
      />

    <div style={{ marginRight: '20px' }}></div>

    <Hover 
        imageSrc="/clothes/t_7.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Crewneck"
        price="$65 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
      />

    <div style={{ marginRight: '20px' }}></div>

    <Hover 
        imageSrc="/clothes/t_8.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Shirt"
        price="$45 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
      />

    <div style={{ marginRight: '20px' }}></div>

    <Hover 
        imageSrc="/clothes/t_9.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Hoodie"
        price="$65 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
    />

    <div style={{ marginRight: '20px' }}></div>

    <Hover 
        imageSrc="/clothes/t_10.png"
        overlayColor='#D99BFF' // Semi-transparent black
        title="Shirt"
        price="$49 USD"
        buttonText="Buy" 
        onButtonClick={handleButtonClick}
    />


    </div>



        <Footer />


        </>
    );
  };
