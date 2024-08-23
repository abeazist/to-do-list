import styles from './Main.module.css'

export function Main(props) {
    let { children } = props
    return (
        <div className={styles.Main}>
            {children}
        </div>
    )
}