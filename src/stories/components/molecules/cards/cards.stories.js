import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Cards from "./cards";

export const basicCard = () => (
	<Cards title='basic card' content='card content'>
	
	</Cards>
);

export default {
	component: Cards,
	decorators: [withKnobs],
	title: "Molecules|Cards"
};
