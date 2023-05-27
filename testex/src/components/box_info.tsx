import React from 'react'
import '../styles/box_info.css'

type BoxProps = {
    title: string;
    subtitle: string;
    text: string;
    icon?: React.ReactNode;
}

const Box = (props: BoxProps) => {
    return (
        <div className='container-box'>{props.title}
            <div className='container-box-subtitle'>{props.subtitle}</div>
            <div className='container-box-text'>{props.text}</div>
            <div className='container-box-icon'>{props.icon}</div>
        </div>
    )
}

export default Box