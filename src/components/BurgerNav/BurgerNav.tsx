import styles from "./BurgerNav.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { height } from "./anim";
import React, { useState } from "react";
import Link from "next/link";

const BurgerNav = () => {
  return (
    <motion.main
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit">
      <nav className={styles.wrapper}>
        <div className={styles.el}>home</div>
        <div className={styles.el}>profile</div>
        <div className={styles.el}>workouts</div>
        <div className={styles.el}>about</div>
        <div className={styles.el}>contact</div>
      </nav>
    </motion.main>
  );
};

export default BurgerNav;
