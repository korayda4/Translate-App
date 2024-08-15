import React, { useState } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

const InputText = ({ text, disabled, translate }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    translate(newValue);
  };

  return (
    <TextArea
      value={value}
      onChange={handleChange}
      placeholder={text}
      autoSize={{
        minRows: 3,
        maxRows: 5,
      }}
      disabled={disabled}
    />
  );
};

export default InputText;
