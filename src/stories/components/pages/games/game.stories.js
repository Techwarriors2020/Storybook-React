import React, {Fragment} from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FortuneWheel from "./index";



export const FortuneWheelGame = () => (
	<FortuneWheel/>
);



export default {
	component: FortuneWheel,
	decorators: [withKnobs],
	title: "Pages|FortuneWheel"
};
