import React, { FunctionComponent } from 'react';


interface ICardProps {
  title?: string,
  content ?: string,
  children?: React.ReactNode;
  props?: any,
  clicked?: any,
  classes?:[],
  className?:string
  
}

export const Card: React.FC<ICardProps> = ({ clicked, children, ...props }) =>{
return (
<div onClick={clicked} {...props}>  
  { children }
</div>
);
}
export const CardBody: React.FC<ICardProps> = ({ clicked, children, ...props }) =>{
  return (
<div onClick={clicked} {...props}>
<div>
  {children}
</div>
</div>
);
}

export const CardHeader: React.FC<ICardProps> = ({ clicked, children, ...props }) =>{
  return (
<div onClick={clicked} {...props}>
  {children}
</div>
);
}

export const CardFooter: React.FC<ICardProps> = ({ classes, clicked, children, ...props }) =>{
  return (
<div onClick={clicked} {...props}>
  {children}
</div>
);
}







export default Card;