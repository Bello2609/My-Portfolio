//Basic styles import
import Link from 'next/link';
import styles from './styles/footer.module.scss';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
export default function Footer() {
  const Year = new Date().getFullYear();

  return (
    <>
      <footer id={styles.footer}>
        <div className={styles.footWrapper}>
          <div className={styles.ulBox}>
            <h3>say hello</h3>

            <ul>
              <li>
                <a href="mailto:bellohadi82@gmail.com">bellohadi82@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://medium.com/@hadibello"
                  target="_blanket"
                  rel="noopener"
                >
                  medium.com/@hadibello
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.ulBox}>
            <ul>
              <li>
                <Link href="#projects">My Works</Link>
              </li>
              <li>
                <a
                  href="https://github.com/bello2609"
                  target="_blanket"
                  rel="noopener"
                >
                  My Shelf
                </a>
              </li>
              <li>
                <a href="/files/resume.pdf" target="_blanket" rel="noopener">
                  My Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footBase}>
          <small>&copy; Bello Hadi {Year}</small>

          <ul>
            <li>
              <a
                href="https://twitter.com/alliendeveloper"
                target="_blanket"
                rel="noopener"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bello2609"
                target="_blanket"
                rel="noopener"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bellohadi/"
                target="_blanket"
                rel="noopener"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.upwork.com/freelancers/~01948503603d5977d0"
                target="_blanket"
                rel="noopener"
              >
                <FaSquareUpwork />
              </a>
            </li>
            <li>
              <a
                href="https://www.fiverr.com/s/Q75qLR2"
                target="_blanket"
                rel="noopener"
              >
                <SiFiverr />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
