import styles from "./Loader.module.css"

const Loader = () => {
    const loaderRootClass = styles.loader__circle
  return (
    <div className={styles.loader__outer}>
            <div className={[loaderRootClass, styles.one].join(' ')}></div>
            <div className={[loaderRootClass, styles.three].join(' ')}></div>
            <div className={[loaderRootClass, styles.two].join(' ')}></div>
            <div className={styles.center}>
                <div className={[loaderRootClass, styles.center__inner].join(' ')}></div>
            </div>
    </div>
  )
}
export default Loader