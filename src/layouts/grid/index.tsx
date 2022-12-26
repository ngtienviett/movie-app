import styles from './index.module.css';
interface IGridProps extends React.HTMLProps<HTMLDivElement> {}
const Grid: React.FC<IGridProps> = (props) => {
    return (
        <>
            <div className={`${styles.gridContainer} section-gap`}>{props.children}</div>
        </>
    );
};
export default Grid;
