import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p>Here are links to pages with ads</p>
      <a href="/745x640">745x640</a>
      <a href="/745x130">745x130</a>
      <a href="/3072x384nba">3072x384nba + video</a>
      <a href="/3072x384video">3072x384ice + video</a>
    </div>
  );
}
