import React from "react";
import '../../../../styles/buttons.css';
import { withKnobs} from "@storybook/addon-knobs";
import Button from "./button.tsx";

const buttonClicked = e => {
	e.preventDefault();
	alert("button clicked");
};

export const buttonColors = (prop) => (
	<div>
	<Button className="ekutumb-btn ekutumb-basic">Basic</Button>
	<Button className="ekutumb-btn ekutumb-default">Default</Button>
	<Button className="ekutumb-btn ekutumb-primary">Primary</Button>
	<Button className="ekutumb-btn ekutumb-success">Success</Button>
	<Button className="ekutumb-btn ekutumb-warning">Warning</Button>
	<Button className="ekutumb-btn ekutumb-danger">Danger</Button>
	<Button className="ekutumb-btn ekutumb-purple">purple</Button>
	<Button className="ekutumb-btn ekutumb-info">Info</Button>
	</div>

);

export const buttonSizes = (props) => (
	<div>
	<Button className="ekutumb-btn ekutumb-default ekutumb-lg-btn" >Large</Button>
	<Button className="ekutumb-btn ekutumb-default ekutumb-sm-btn" >small</Button>
	<Button className="ekutumb-btn ekutumb-default ekutumb-xs-btn" >xsmall</Button>
	</div>

);
export const buttonTypes = (props) => (
	<div>
	<Button className="ekutumb-btn ekutumb-info active" >Active</Button>
	<Button className="ekutumb-btn disabled" disabled >disabled</Button>
	<Button className="ekutumb-btn ekutumb-success ekutumb-btn-block">Block level button</Button>
	<Button clicked={buttonClicked} className="ekutumb-btn ekutumb-info">click me</Button>
	</div>

);


export default {
	component: Button,
	decorators: [withKnobs],
	title: "Atoms|Button"
};
