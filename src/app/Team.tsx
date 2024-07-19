"use client";

import React, { useEffect, useState } from 'react';
import styles from './styles/Team.module.css';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    "/images/profile-1.jpg",
    "/images/profile-2.png",
    "/images/profile-3.jpeg",
    "/images/profile-1.jpg",
    "/images/profile-2.png",
    "/images/profile-3.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className={styles.team}>
      <div className={styles.content}>
        <h1>Contributors</h1>
        <p>Join Our Open Source Community</p>
        <p>All our content is open source. We aim to create a collaborative research environment where you can share knowledge and explore different areas of the Ethereum ecosystem.</p>
        <button className={styles.btn}>
          <a href='https://github.com/web3citizenxyz/web3citizen' target='_blank'>Start Contributing</a>
        </button>
      </div>
      <div className={styles.teamsvg}>
        <div className={styles.carousel}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            >
              <img src={item} alt={`User ${index + 1}`} />
            </div>
          ))}
        </div>
        <img src="/images/elipse-team.svg" alt="Semicircles" className={styles.elipseTeam} />
      </div>
    </section>
  );
}
