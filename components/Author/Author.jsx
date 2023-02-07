import styles from './author.module.css';
import authorIcon from '@/public/assets/icons/author.svg';

const Author = ({ name, createdDate, picture }) => {
    console.log(authorIcon);
    return (
        <div className={styles.authorContainer}>
            <img src={picture} className={styles.icon} alt="Author" />
            <div className={styles.authorNameDate}>
                <h2>{name}</h2>
                <p>{createdDate}</p>
            </div>
        </div>
    )
}

export default Author