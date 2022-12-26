import styles from './index.module.css';

interface ITabsProps extends React.HTMLProps<HTMLDivElement> {}

const Tabs: React.FC<ITabsProps> = (props) => {
    return <div className={`${styles.tabContainer} flex text-lg`}>{props.children}</div>;
};

export default Tabs;
