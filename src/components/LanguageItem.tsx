import React from 'react'

type Promps = {
    imageSource: string,
    alt: string
    title: string
}

export default function LanguageItem({ imageSource, alt, title }: Promps) {
    return (
        <article>
            <img src={imageSource} alt={alt} />
            <p>{title}</p>
        </article>
    )
}
