import React from 'react'

const NewRadio = ({label,children,...otherProps}) => {
  return (
    <div >
    <div id="my-radio-group">{label}</div>
    <div role="group" aria-labelledby="my-radio-group">
      {/* <label>
        <Field type="radio" name={name} value="One" />
        One
      </label> */}
      {children}
     
    </div></div>
  )
}

export default NewRadio