import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carL}>
                <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
                <h1 className={styles.linkTitle}>
                    <Link passHref href="/contact" className={styles.link}>
                        <span className={styles.linkText}>WORK WITH US</span>
                    </Link>
                    <Link passHref href="/contact" className={styles.link}>
                        <Image src="/img/link.png"
                            alt="link.png"
                            width="40px"
                            height="40px"
                        />
                    </Link>
                </h1>
            </div>
            <div className={styles.carS}>
                <div className={styles.cardItem}>
                    159 DILSHAD COLONY DELHI <br/> INDIA
                </div>
                <div className={styles.cardItem}>
                    CONTACT@JJ.DEV <br/> 91 12345 67890
                </div>
            </div>
            <div className={styles.carS}>
                <div className={styles.cardItem}>
                    FOLLOW US: <br/> __FB __IN __BE __TW
                </div>
                <div className={styles.cardItem}>
                    &copy; 2022 JJ INTERACTIVE, <br/> ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer
