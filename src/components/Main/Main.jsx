import styles from './Main.module.css'

export function Main(props) {
    let { children } = props
    return (
        <div className={styles.Main}>
            {/* {children} */}
            <div class="box-1">
                <input type="text" />
                <button>+</button>
            </div>
            
            <ul>
                <li>Item 1 <input type='checkbox'/></li>
                <li>Item 2 <input type='checkbox'/></li>
                <li>Item 3 <input type='checkbox'/></li>
            </ul>
        </div>
    )
}