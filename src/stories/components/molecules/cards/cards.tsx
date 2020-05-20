import React, { FunctionComponent } from 'react';
import  './cards.css'

type CardProps = {
  title?: string,
  content?:string,
  children?: React.ReactNode;
  props?: any;
  clicked?: any;
  classes?:[];
 
}
export const Card: FunctionComponent<CardProps> = ({ classes, clicked, children, ...props }) =>{
return (
<div onClick={clicked} {...props}>  
  { children }
</div>
);
}
export const CardBody: FunctionComponent<CardProps> = ({ classes, clicked, children, ...props }) =>{
  return (
<div onClick={clicked} {...props}>
<div>
  {children}
</div>
</div>
);
}

export const CardHeader: FunctionComponent<CardProps> = ({ classes, clicked, children, ...props }) =>{
  return (
<div onClick={clicked} {...props}>
  {children}
</div>
);
}

export const CardFooter: FunctionComponent<CardProps> = ({ classes, clicked, children, ...props }) =>{
  return (
<div onClick={clicked} {...props}>
  {children}
</div>
);
}







export default Card;