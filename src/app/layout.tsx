'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Layout.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter((segment) => segment)

  return (
    <html lang="en">
      <body className={styles.LayoutSection}>
        <Header />
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {pathSegments.map((segment, index) => {
              const href = '/' + pathSegments.slice(0, index + 1).join('/')
              return (
                <li key={segment}>
                  <Link
                    href={href}
                    aria-current={
                      index === pathSegments.length - 1 ? 'page' : undefined
                    }
                  >
                    {segment.charAt(0).toUpperCase() +
                      segment.slice(1).replace('-', ' ')}
                  </Link>
                </li>
              )
            })}
          </ol>
        </nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
