import React from 'react';
import Loading from './../loading/index';
import styles from './index.module.css';

export interface IImageProps extends React.HTMLProps<HTMLImageElement> {
    src: string;
    unloadedSrc: string;
}

interface IImageState {
    loaded: boolean;
    error: boolean;
}

export default class LazyImage extends React.Component<IImageProps, IImageState> {
    constructor(props: IImageProps) {
        super(props);
        this.state = { loaded: false, error: false };
    }

    componentDidMount() {
        const img = new Image();
        img.onload = () => {
            this.setState({
                loaded: true
            });
        };
        img.onerror = () => {
            this.setState({
                error: true
            });
        };
        img.src = this.props.src;
    }

    render() {
        if (this.state.error) {
            return <img className={this.props.className} style={this.props.style} src={this.props.unloadedSrc} alt={this.props.alt} />;
        } else if (!this.state.loaded) {
            return <Loading classContainer={`${styles.loadingContainer}`} />;
        }
        return <img className={this.props.className} style={this.props.style} src={this.props.src} alt={this.props.alt} />;
    }
}
