import React from 'react';

//Basic styles import
import styles from './styles/contact.module.scss';

export default function Skills() {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.contactWrapper}>
            <h1 id="h1BG">Skills</h1>
            <small>
            React | Next.js | Node.js | Express | Nest.js | MongoDB | TypeScript | Tailwind CSS | AWS |
            Rust | API integration using N8N 
            </small>
          
        </div>
      </section>
    </>
  );
}
