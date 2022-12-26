import styles from './index.module.css';
interface IMain {
    children?: React.ReactNode;
}
const Main: React.FC<IMain> = (props) => {
    return (
        <>
            <div className={`${styles.mainContainer}`}>{props.children}</div>
        </>
    );
};
export default Main;
