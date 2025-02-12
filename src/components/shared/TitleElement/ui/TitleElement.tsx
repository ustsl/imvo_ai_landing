import React from 'react';
import styles from './titleElement.module.css';
import classNames from 'classnames';

export interface ITitleBlock {
    tag: 'h1' | 'h2' | 'h3' | 'h4';
    text: string;
    theme: 'dark' | 'light'
}

export const TitleBlock = ({ tag, text, theme }: ITitleBlock) => {


    const cl = classNames(
        styles.title,
        theme && styles[`${theme}Theme`],
    );

    const createTag = (tag: string, text: string) => {
        const allowedTags = ['h1', 'h2', 'h3', 'h4'];
        if (allowedTags.includes(tag)) {
            return React.createElement(tag, { className: cl }, text);
        } return <></>
    }

    return createTag(tag, text);
}

