import styles from './button.module.css';

const Button = ({ type, text, icon, width, bgcolor="black", color }) => {
    console.log(icon)
    if (type === 'primary') {
        return (
            <button className={`${styles.btn} ${styles.btnPrimary}`} style={{width, backgroundColor:bgcolor, color}}>
                {text}
                {icon && <img src={icon.src} className={styles.iconPrimary}/>}
            </button>
        )
    } else if (type === 'secondary') {
        return (
            <button className={`${styles.btn} ${styles.btnSecondary}`} style={{width, bgcolor}}>
                {icon && <img src={icon.src} className={styles.iconSecondary}/>}
                {text}
            </button>
        )
    }
}

export default Button