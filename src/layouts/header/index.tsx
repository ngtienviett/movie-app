import styles from './index.module.css';
const Header = () => {
    return (
        <>
            <div className={`${styles.header} ${styles.fixedHeader}`}></div>
        </>
    );
};

export default Header;
