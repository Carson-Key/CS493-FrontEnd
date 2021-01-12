import { Fragment } from 'react';

const TextField = (props) => {
  const { id, value, onChange, placeHolder, className } = props

  return (
    <Fragment>
      <input
        id={id}
        name={id}
        value={value}
        onChange={(event) => {onChange(event.target.value)}}
        placeholder={placeHolder}
        className={"textfield-bg-color " + className}
      />
    </Fragment>
  )
}

export default TextField;
