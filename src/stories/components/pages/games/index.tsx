import React from 'react';
import Wheel from '../games/wheel';

interface IGamePageProps {
    children?: React.ReactNode;
    props?: any;
   
}


const GamePage: React.FC<IGamePageProps> = ({ children, ...props }) => {
    return (
 <Wheel>{children}</Wheel>)
    }

    export default GamePage;