import axios from 'axios';

// Debounce function definition
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Create a debounced version of the translate function
const debouncedTranslate = debounce(async (text, fromLanguage, toLanguage, setTranslatedText, error) => {
  if (!text) {
    error("Text is required");
    return;
  } else if (!fromLanguage) {
    error("From language is required");
    return;
  } else if (!toLanguage) {
    error("To language is required");
    return;
  }

  console.log(fromLanguage);

  const data = {
    q: text,
    source: fromLanguage,
    target: toLanguage,
  };

  try {
    const response = await axios.post(
      'https://deep-translate1.p.rapidapi.com/language/translate/v2',
      data,
      {
        headers: {
          'x-rapidapi-key': '*************************************',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
      }
    );

    const translatedText = response.data.data.translations.translatedText;
    setTranslatedText(translatedText); // Update state with translated text
  } catch (error) {
    console.error("Translation Error:", error);
    error("Translation failed");
  }
}, 1000); // Debounce delay of 1 second

// Exported function that triggers the debounced translation
export const translateText = (text, fromLanguage, toLanguage, setTranslatedText, error) => {
  debouncedTranslate(text, fromLanguage, toLanguage, setTranslatedText, error);
};
