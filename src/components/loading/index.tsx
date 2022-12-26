import styles from './index.module.css';
interface ILoadingProps extends React.HTMLProps<HTMLDivElement> {
    classContainer?: string;
}

const Loading: React.FC<ILoadingProps> = (props) => {
    return (
        <div className={`${props.classContainer ? props.classContainer : styles.loadingContainer}`}>
            <div className={`${styles.followTheLeader}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
