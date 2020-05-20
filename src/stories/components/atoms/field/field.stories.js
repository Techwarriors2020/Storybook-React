import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Field from "./field";
import '../../../../styles/forms.css';
export const TextBox = () => (
	<Field id="user" label="userName:" fieldType="textbox" />
);
export const Dropdown = () => (
    <Field
      id="countryCode"
      label="Country:"
      fieldType="dropdown"
      options={["India", "Netherland", "Portugal", "Germany"]}
    />
);
export const TextArea = () => (
 <Field id="textareaNote" label="textArea:" fieldType='multilinetextbox'/>
    );
export const Email = () => (
 <Field id="userEmail" label="email Id:" fieldType='email'/>
           )
export const Password = () => (
<Field id="userPsw" label="password:" fieldType='password'/>
                      );         

export default {
	component: Field,
	decorators: [withKnobs],
	title: "Atoms|Field"
};
