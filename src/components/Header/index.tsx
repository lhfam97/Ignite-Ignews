import styles from "./styles.module.scss";
import { SignInButton } from '../SignInButton'

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ing.news" />
        <nav>
          <a className={styles.active} href="Home">Home</a>
          <a href="Posts">Posts</a>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}