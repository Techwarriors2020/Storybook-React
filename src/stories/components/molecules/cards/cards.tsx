import React, { FunctionComponent } from 'react';
import CardStyle from  './cards.style'

type CardProps = {
  title: string,
  content:string,
 
}
export const Card: FunctionComponent<CardProps> = (props) => <aside>
<CardStyle>
  <h2>{ props.title }</h2>
  <p>
    { props.content }
  </p>
  { props.children }
  </CardStyle>
</aside>


export default Card;