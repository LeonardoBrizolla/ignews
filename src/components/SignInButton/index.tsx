import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="var(--green-500)" />
      Leonardo Brizolla
      <FiX color="var(--gray-400)" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="var(--yellow-500)" />
      Sign in with GitHub
    </button>
  );
}
