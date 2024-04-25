import { FC, ReactNode } from 'react'
import { Header } from '../../core/components/header/Header.tsx'
import styles from './layout-main.module.css'

interface LayoutProps {
  children: ReactNode
}

export const LayoutMain: FC<LayoutProps> = ({
  children,
}: LayoutProps): ReactNode => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
)
