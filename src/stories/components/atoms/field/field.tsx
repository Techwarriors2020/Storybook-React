import * as React from "react";
type Editor = "textbox" | "multilinetextbox" | "dropdown";
export interface IFieldProps {
  id: string;
  label?: string;
  fieldType?: Editor;
  options?: string[];
  defaultValue?: any;
  value?: any;
  name?: string;
  className?: String;
  handleOnBlur?: Function;
  handleOnChange?: Function;
  handleKeyDown?: Function;
  handleKeyPress?: Function;
  includeErrorField?: Boolean;
}

export const Field: React.SFC<IFieldProps> = ({
  id,
  label,
  fieldType,
  options,
  value,
  defaultValue,
  name,
  className,
  handleOnBlur,
  handleOnChange,
  handleKeyDown,
  handleKeyPress,
  includeErrorField
}) => {
  return (
    <div className="form-group">

      {label && <label htmlFor={id}>{label}</label>}

      {fieldType!.toLowerCase() === "textbox" && (
        <input
          id={id}
          type="text"
          value={value}
          defaultValue={defaultValue}
          onChange={
            (e: React.FormEvent<HTMLInputElement>) =>
              handleOnChange && handleOnChange(e)
          }
          onBlur={
            (e: React.FormEvent<HTMLInputElement>) =>
              handleOnBlur && handleOnBlur(e)
          }
          onKeyDown={
            (e: React.FormEvent<HTMLInputElement>) =>
              handleKeyDown && handleKeyDown(e)
          }
          onKeyPress={
            (e: React.FormEvent<HTMLInputElement>) => {
              return handleKeyPress && handleKeyPress(e)
            }
          }
          className="form-control"
        />
      )}

      {fieldType!.toLowerCase() === "multilinetextbox" && (
        <textarea
          id={id}
          value={value}
          onChange={
            (e: React.FormEvent<HTMLTextAreaElement>) =>
              console.log(e)
          }
          onBlur={
            (e: React.FormEvent<HTMLTextAreaElement>) =>
              console.log(e) /* TODO: validate field value */
          }
          className="form-control"
        />
      )}
          {fieldType!.toLowerCase() === "email" && (
        <input
          id={id}
          name={name}
          type="email"
          value={value}
          onChange={
            (e: React.FormEvent<HTMLInputElement>) =>
            handleOnChange && handleOnChange(e)
          }
          onBlur={
            (e: React.FormEvent<HTMLInputElement>) =>
              handleOnBlur && handleOnBlur(e)
          }
          required
          className={`form-control ${className ? className : ''}`} 
        />
      )}
      {fieldType!.toLowerCase() === "password" && (
        <input
          id={id}
          name={name}
          type="password"
          value={value}
          onChange={
            (e: React.FormEvent<HTMLInputElement>) =>
              handleOnChange && handleOnChange(e)
          }
          onBlur={
            (e: React.FormEvent<HTMLInputElement>) =>
              handleOnBlur && handleOnBlur(e)
          }
          required
          className="form-control"
        />
      )}

      {fieldType!.toLowerCase() === "dropdown" && (
        <React.Fragment>
      <div className="ekutumb-dropdown-container">
        <select
          id={id}
          name={id}
          value={value}
          onChange={
            (e: React.FormEvent<HTMLSelectElement>) =>
              console.log(e)
          }
          onBlur={
            (e: React.FormEvent<HTMLSelectElement>) =>
              console.log(e) 
          }
          
        >
          {options &&
            options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
        <div className="ekutumb-select-icon">
        <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" className="icon">
          <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
        </svg>
      </div>
      </div>
      </React.Fragment>
      )}
      {includeErrorField && <div className="error"></div>}
    </div>
  );
};
Field.defaultProps = {
    fieldType: "textbox"
};

export default Field;