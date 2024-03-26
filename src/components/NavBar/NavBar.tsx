"use client";
import styles from "./NavBar.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { opacity } from "./anim";
import BurgerNav from "../BurgerNav/BurgerNav";

const NavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.bar}>
        <div
          onMouseDown={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}></div>
          <div className={styles.label}>
            <motion.p variants={opacity} animate={isActive ? "closed" : "open"}>
              menu
            </motion.p>
            <motion.p variants={opacity} animate={!isActive ? "closed" : "open"}>
              close
            </motion.p>
          </div>
        </div>
        <h1 className={styles.header}>rise</h1>
        <AnimatePresence mode="wait">{isActive && <BurgerNav />}</AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
