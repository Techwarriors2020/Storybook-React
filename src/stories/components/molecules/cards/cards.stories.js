import React, {Fragment} from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Cards, {CardBody, CardHeader, CardFooter} from "./cards";
import './cards.css';


export const basicCard = () => (
	<Cards title='basic card' className='ekutumb-card'>
		<CardBody className='ekutumb-card-body'>
			<span>Basic card</span>
		</CardBody>
	</Cards>
);


export const CardHeaderFooter = () => (
	<Cards title='card' className='ekutumb-card'>
	
	<CardHeader className="ekutumb-card-header">Card Header</CardHeader>
	<CardBody className='ekutumb-card-body'>
			<span>Card Contents</span>
			</CardBody>
	
	<CardFooter className="ekutumb-card-footer">Card Footer</CardFooter>
	</Cards>
);
export const Contextualcards = () => (
	<Fragment>
	<Cards title='card' className='ekutumb-card'>
	<CardBody className='ekutumb-card-body ekutumb-bg-success'>
	 <span>Green Card</span>
	</CardBody>
	</Cards>
	<Cards title='card' className='ekutumb-card'>
	<CardBody className='ekutumb-card-body ekutumb-bg-warning'>
			<span>orange Card</span>
			</CardBody>
	</Cards>
	<Cards title='card' className='ekutumb-card'>
	<CardBody className='ekutumb-card-body ekutumb-bg-purple'>
			<span>Purple Card</span>
		</CardBody>
	</Cards>
		<Cards title='card' className='ekutumb-card'>
		<CardBody className='ekutumb-card-body ekutumb-bg-blue'>
				<span>Blue Card</span>
			</CardBody>
		</Cards>
		</Fragment>
);

export default {
	component: Cards,
	decorators: [withKnobs],
	title: "Molecules|Cards"
};
