import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <form action="/api/generatepdf" method="post">
          <button type="submit">Gerar PDF</button>
        </form>
      </div>
    </main>
  );
}
