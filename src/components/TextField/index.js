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
        className={"textfield-bg-color px-4 py-1 " + className}
      />
    </Fragment>
  )
}

export default TextField;
