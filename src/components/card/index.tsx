import { BASE_IMAGE_URL } from '../../configs/http-config';
import LazyImage from '../image';
import styles from './index.module.css';
export interface ICard {
    id: number;
    img: string;
    title: string;
    content: string;
}
export interface CardProps {
    card: ICard;
    handelClick: () => void;
}
const Card = (props: CardProps) => {
    const { card, handelClick } = props;
    return (
        <>
            <div className={`${styles.cardItem} cursor-pointer`} onClick={handelClick}>
                <div className={`${styles.cardImg}`}>
                    <LazyImage
                        unloadedSrc="https://images.unsplash.com/photo-1671894424993-8817822db456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        src={`${BASE_IMAGE_URL}${card.img}`}
                    />
                </div>
                <div className="cardBody">
                    <h5 className="cardTitle">{card.title}</h5>
                    <p className="cardDetail">{card.content}</p>
                </div>
                <div className="cardFooter"></div>
            </div>
        </>
    );
};
export default Card;
