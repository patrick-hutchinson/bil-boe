import React from "react";
import { useEffect, useState, useRef } from "react";

import styles from "./Opening.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Opening() {
  let containerRef = useRef();
  let logoContainerRef = useRef();

  const currentYear = new Date().getFullYear();

  let CCSVG = () => {
    return (
      <svg viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0657884 0.799679C0.0223963 1.23141 0.00066201 1.66505 0.000662005 2.09896C0.000661964 5.54488 1.36955 8.84965 3.80617 11.2863C6.2428 13.7229 9.54758 15.0918 12.9935 15.0918C16.4394 15.0918 19.7442 13.7229 22.1808 11.2863C24.6174 8.84966 25.9863 5.54488 25.9863 2.09896C25.9863 1.66505 25.9646 1.23141 25.9212 0.79968L22.0234 0.79968C22.076 1.23066 22.0978 1.66487 22.0885 2.09896C22.0886 4.17266 21.3802 6.18414 20.0805 7.8C18.7808 9.41586 16.9679 10.5391 14.9424 10.9834L14.9424 3.39825L11.0446 3.39825L11.0446 10.9834C9.01905 10.5391 7.20619 9.41586 5.90651 7.8C4.60682 6.18414 3.89834 4.17265 3.89851 2.09896C3.88918 1.66487 3.91094 1.23066 3.96364 0.799679L0.0657884 0.799679Z"
          fill="#DBD1B7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0657884 22.9076C0.0223963 23.3393 0.00066201 23.773 0.000662005 24.2069C0.000661964 27.6528 1.36955 30.9576 3.80617 33.3942C6.2428 35.8308 9.54758 37.1997 12.9935 37.1997C16.4394 37.1997 19.7442 35.8308 22.1808 33.3942C24.6174 30.9576 25.9863 27.6528 25.9863 24.2069C25.9863 23.773 25.9646 23.3393 25.9212 22.9076L22.0234 22.9076C22.076 23.3386 22.0978 23.7728 22.0885 24.2069C22.0886 26.2806 21.3802 28.2921 20.0805 29.9079C18.7808 31.5238 16.9679 32.647 14.9424 33.0913L14.9424 25.5062L11.0446 25.5062L11.0446 33.0913C9.01905 32.647 7.20619 31.5238 5.90651 29.9079C4.60682 28.2921 3.89834 26.2806 3.89851 24.2069C3.88918 23.7728 3.91094 23.3386 3.96364 22.9076L0.0657884 22.9076Z"
          fill="#DBD1B7"
        />
      </svg>
    );
  };

  useGSAP(() => {
    gsap.to(".hide-1", {
      opacity: 1, // target opacity
      duration: 0.4, // animation duration
      delay: 2, // delay before starting the animation
      ease: "power1.out", // easing function
    });
  }, []);
  useGSAP(() => {
    gsap.to(".hide-2", {
      opacity: 1, // target opacity
      duration: 0.4, // animation duration
      delay: 4, // delay before starting the animation
      ease: "power1.out", // easing function
    });
  }, []);

  function createLink(content, url, isLast) {
    return (
      <span className="link-container">
        <a href={url} target="_blank" className="link">
          <span className="animationContainer">
            {content.split(" ").map((word, wordIndex) => (
              <span className="word" key={wordIndex} style={{ marginRight: isLast ? "0px" : "5px" }}>
                {word.split("").map((letter, letterIndex) => (
                  <span key={letterIndex} className="letter">
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </span>
        </a>
      </span>
    );
  }
  return (
    <main>
      <div className={styles.container} ref={containerRef}>
        <div className={`${styles.containerHead} hide-1`}>
          <p className={styles.info}>
            Bil–Boe® is a design house, exploring modern industrial interiors and objects through collaborations, proprietary
            works, and thoughtful inquiries into sustainability, emerging designer empowerment, and the coexistence of heritage
            and contemporary.
          </p>
        </div>

        <div className={styles.containerFoot}>
          <div className={`${styles.svgContainer} hide-1`}>
            <CCSVG />
          </div>

          <div className={`${styles.copyrightContainer} hide-1`}>
            <div className={styles.copyright}>
              Made <br />
              with LOVE <span className={styles.copyrightlogo}>©</span> {currentYear}
            </div>
          </div>

          <span className={styles.logoContainer} ref={logoContainerRef}>
            <span className={styles.logo}>Bil</span>
            <div className={styles.lineContainer}>
              <div className={styles.line}></div>
              <span className="hide-2">{createLink("visit our online store", "https://www.bil-boe.shop")}</span>
            </div>
            <span className={styles.logo}>
              Boe<span className={styles.trademark}>®</span>
            </span>
          </span>

          <div className={`${styles.contactContainer} hide-1`}>
            <p>
              Join our&nbsp;
              {createLink("mailing list", "https://www.bil-boe.shop ")}
              for bi-weekly updates, follow on&nbsp;
              {createLink("instagram", "https://www.instagram.com/bilboe.official/")}
              or send an&nbsp;
              {createLink("e-mail", "mailto:ollee@bil-boe.com", true)}.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
