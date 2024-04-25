import { ReactNode } from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h1 className={styles.logotype}>
          <Link to={'/'}>Podcaster</Link>
        </h1>
      </div>
    </header>
  )
}
