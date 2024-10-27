import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Facebook, Twitter, Youtube } from 'lucide-react'
import styles from '../styles/Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={193.03}
              height={37}
            />
            <div className={styles.links}>
              <div className={styles.column}>
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/create">Create a Shop</Link>
                  </li>
                  <li>
                    <Link href="/media">Media</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <h3>Support</h3>
                <ul>
                  <li>
                    <Link href="/help">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/brands">For Brands</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <Youtube />
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 NOWwith Ventures Inc. All Rights Reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
