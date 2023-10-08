import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconClose from "../assets/images/icon-menu-close.svg";
import styles from "../assets/styles/NavBar.module.scss";
import getCurrentDimension from "../utils/ScreenSize";

function NavBar() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);

  function toggleMenu() {
    setMenuAnimation(false);
    // Wait for the animation to finish before changing menuOpen to true
    setTimeout(() => {
      setMenuOpen(false);
    }, 1000); // Adjust the delay to match your animation duration
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo"></img>
        </div>
        {screenSize.width > 900 && (
          <div className={styles.item}>
            <p>Home</p>
            <p>New</p>
            <p>Popular</p>
            <p>Trending</p>
            <p>Categories</p>
          </div>
        )}
        {screenSize.width < 900 && (
          <div className={styles.menu}>
            <img
              src={IconMenu}
              alt="menu"
              onClick={() => {
                setMenuOpen(true), setMenuAnimation(true);
              }}
            ></img>
          </div>
        )}
      </div>
      {screenSize.width < 900 && menuOpen && (
        <div
          className={`${styles.mobileMenu} ${
            menuAnimation ? styles.slideRightMain : styles.slideLeftMain
          }`}
        >
          <did className={styles.left}></did>
          <did className={styles.right}>
            <img
              src={IconClose}
              alt="menu-close"
              onClick={() => toggleMenu()}
            ></img>
            <div className={styles.menu}>
              <p>Home</p>
              <p>New</p>
              <p>Popular</p>
              <p>Trending</p>
              <p>Categories</p>
            </div>
          </did>
        </div>
      )}
    </>
  );
}

export default NavBar;
