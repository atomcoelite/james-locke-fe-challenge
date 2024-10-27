'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search, Heart, ShoppingBag, ChevronDown } from 'lucide-react'
import styles from '../styles/Header.module.scss'

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <Search className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search by Brand, Product, or Category"
        className={styles.searchInput}
      />
    </div>
  )
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo Img"
            width={185.22}
            height={35.5}
          />
        </Link>
        <div className={styles.icons}>
          <button aria-label="Favorites">
            <Heart />
          </button>
          <button aria-label="Shopping bag">
            <ShoppingBag />
          </button>
        </div>
      </div>
      <SearchBar />
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.navMenu}>
          <button className={styles.dropdownButton}>
            Marketplace <ChevronDown />
          </button>
          <Link href="/brands">Brands A-Z</Link>
          <Link href="/makeup">Makeup</Link>
          <Link href="/hair">Hair</Link>
          <Link href="/skincare">Skincare</Link>
          <Link href="/nails">Nails</Link>
          <Link href="/tools-brushes">Tools & Brushes</Link>
          <Link href="/fragrance">Fragrance</Link>
          <Link href="/body">Body</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
