/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { SignInButton } from "../SignInButton";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ing.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
