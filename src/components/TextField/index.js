import { Fragment } from 'react';

const TextField = (props) => {
  const { id, value, onChange, placeHolder } = props

  return (
    <Fragment>
      <input
        id={id}
        name={id}
        value={value}
        onChange={(event) => {onChange(event.target.value)}}
        placeholder={placeHolder}
        className="textfield-bg-color"
      />
    </Fragment>
  )
}

export default TextField;
