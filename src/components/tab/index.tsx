import styles from './index.module.css';
interface ITabProps extends React.HTMLProps<HTMLDivElement> {
    active?: boolean;
}

const Tab: React.FC<ITabProps> = (props) => {
    const { active } = props;
    return (
        <>
            <div {...props} className={`${styles.tabItem} ${active ? styles.tabActive : ''} cursor-pointer`}>
                {props.children}
            </div>
        </>
    );
};

export default Tab;
