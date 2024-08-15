import { useState } from 'react';
import './App.sass';
import Selector from './assets/parts/select';
import InputText from './assets/parts/InputText';
import { translateText } from './assets/translate';
import { message } from 'antd';

function App() {
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState('');
  const [messageApi, contextHolder] = message.useMessage();

  const error = (text) => {
    messageApi.open({
      type: 'error',
      content: text,
    });
  };

  const fromLanguageChange = (value) => {
    setFromLanguage(value);
    console.log("Seçilen dilin değeri:", value);
  };

  const toLanguageChange = (value) => {
    setToLanguage(value);
    console.log("Seçilen dilin değeri:", value);
  };

  const handleTranslateText = async (value) => {
    try {
      const result = await translateText(value, fromLanguage, toLanguage,error);
      console.log("GELDİ");
      console.log(result);
      
      
      // setTranslatedText(result);
      
    } catch (error) {
      setTranslatedText('Translation failed');
    }
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
}

export default App;
