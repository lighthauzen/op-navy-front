import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className={styles.main}>
            <Link href={'/'}>
                <Image
                    className={styles.logo}
                    src="/navy-logo.png"
                    width={150}
                    height={120}
                    alt="Navy logo" />
            </Link>
            <div className={styles.menu}>
                <div className={styles.container}>
                    <Link className={styles.link} href={'/news'}>
                        <p>news</p>
                    </Link>
                    <Link className={styles.link} href={'/pirates'}>
                        <p>pirates</p>
                    </Link>

                    <Link className={styles.link} href={'/marines'}>
                        <p>marines</p>
                    </Link>
                </div>
            </div>
            <button className={styles.button}>internal access</button>
        </div>
    )
}
