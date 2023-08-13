import React, {FC, memo} from 'react';
import '../styles/Title.module.css'
interface TitleProps {
    children: React.ReactNode;
}

const Title: FC<TitleProps> = memo(({children}) => {
    return <h2>{children}</h2>;
})

export default Title;