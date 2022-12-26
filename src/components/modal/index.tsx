import styles from './index.module.css';
interface IModalProps extends React.HTMLProps<HTMLDivElement> {
    handleCloseModal: () => void;
}

const Modal: React.FC<IModalProps> = (props) => {
    return (
        <>
            <div className={`${styles.modalOverlay}`}>
                <div className={`${styles.modalContent} rounded p-5`}>
                    <div className={`${styles.close}`} onClick={() => props.handleCloseModal()}></div>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Modal;
