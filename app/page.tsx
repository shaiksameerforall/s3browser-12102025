import styles from "./page.module.css";
/*12102025--*/
export default function Page() {
  return (
    <main>
      <div className="content">

        <div className="description">
          <p>Mobile-ready layout with responsive grid.</p>
        </div>

        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>All cards scale correctly on mobile.</p>

        <div className="grid">
          <div className="card">
            <h2>Card 1</h2>
            <p>This card scales perfectly on all mobile devices.</p>
          </div>

          <div className="card">
            <h2>Card 2</h2>
            <p>CSS is now fully mobile-optimized.</p>
          </div>

          <div className="card">
            <h2>Card 3</h2>
            <p>No more desktop-mode problems.</p>
          </div>
        </div>

      </div>
    </main>
  );
}
