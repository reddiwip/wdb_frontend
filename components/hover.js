import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/hover.module.css';

const hover = ({ imageSrc, overlayColor, title, price, buttonText, onButtonClick }) => {
    return (
      <div className={styles.imgContainer}>
        <img src={imageSrc} alt="Descriptive text for the image" className={styles.img} />
        <div className={styles.overlay} style={{ backgroundColor: overlayColor }}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>Available in: S, M, L, XL</p>
            <p className={styles.text}>{price}</p>
            <button className={styles.button} onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  };

export default hover;
