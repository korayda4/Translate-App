import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

const InputText = ({ text, disabled, translate, translatedText }) => {
  const [value, setValue] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (translatedText) {
      setDisplayedText('');
      setValue(''); // Değişiklikleri sil
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(prev => prev + translatedText[index]);
        index += 1;
        if (index >= translatedText.length) {
          clearInterval(interval);
        }
      }, 35); // Hızını ayarla
      return () => clearInterval(interval);
    } else {
      setDisplayedText('');
    }
  }, [translatedText]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    newValue && translate(newValue);
  };

  return (
    <TextArea
      value={translatedText ? displayedText : value}
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
