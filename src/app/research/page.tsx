"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Research.module.css';

const researchTopics = [
  {
    title: "DAOS",
    imgSrc: "/icons/category-1.svg",
    slug: "daos"
  },
  {
    title: "Grants",
    imgSrc: "/icons/category-2.svg",
    slug: "grants"
  },
  {
    title: "Coming Soon",
    imgSrc: "/icons/category-3.svg",
    slug: "state-of-daos"
  },
 /*
  {
    title: "Category",
    imgSrc: "/icons/category-4.svg",
  },*/
];


export default function Research() {
  return (
    <div className={styles.researchPage}>
      <header className={styles.header}>
        <h1>Keep updated with our Research Reports</h1>
        <p>
          Find our special curated selection of reports, select a category or
          choose your <br /> specific topic filters from the <a  className={styles.researchLink} > RESEARCH</a> menu on the navigation bar.
        </p>
      </header>

      <div className={styles.cardsContainer}>
        {researchTopics.map((topic, index) => (
              <Link href={`/research/${topic.slug}`} key={index}>
          <div className={styles.card}>
            <h2>{topic.title}</h2>
            <img src={topic.imgSrc} alt={`${topic.title} graphic`} className="categoryIcon" />
            <img src="/icons/arrow-card.svg" alt="Arrow" className={styles.arrow}  />
          </div>
      </Link>
        ))}
      </div>
    </div>
  );
        }
