import React, { useState } from 'react';
import './App.sass';
import Selector from './assets/parts/select';
import InputText from './assets/parts/InputText';
import { translateText } from './assets/translate';
import { message } from 'antd';

const App = () => {
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState('');
  const [text , setText] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const error = (text) => {
    messageApi.open({
      type: 'error',
      content: text,
    });
  };

  const fromLanguageChange = (value) => {
    setFromLanguage(value);
    text && translateText(text, fromLanguage, value, setTranslatedText, error);
  };

  const toLanguageChange = (value) => {
    setToLanguage(value);
    text && translateText(text, fromLanguage, value, setTranslatedText, error);
  };

  const handleTranslateText = (value) => {
    setText(value)
    translateText(value, fromLanguage, toLanguage, setTranslatedText, error);
  };

  return (
    <div className="container">
      {contextHolder}
      <div className="fromLanguage">
        <Selector 
          onChange={fromLanguageChange}
        />
        <InputText 
          text={'Enter text to translate'}
          translate={handleTranslateText}
        />
      </div>
      <div className="toLanguage">
        <Selector 
          onChange={toLanguageChange}
        />
        <InputText 
          text={'Translation'}
          disabled={true}
          translatedText={translatedText}
        />
      </div>
    </div>
  );
};

export default App;
