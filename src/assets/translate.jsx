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
const debouncedTranslate = debounce(async (text, fromLanguage, toLanguage, error) => {
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
          'x-rapidapi-key': 'aab97a10efmsh009a93e544d35cap14d640jsn2f33093793fd',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.data.translations.translatedText;
    
  } catch (error) {
    console.error("Translation Error:", error);
    throw error;
  }
}, 1000); // Debounce delay of 1 second

// Exported function that triggers the debounced translation and returns a promise
export const translateText = (text, fromLanguage, toLanguage, error) => {
  return new Promise((resolve, reject) => {
    debouncedTranslate(text, fromLanguage, toLanguage, error)
      .then(translatedText => resolve(translatedText))
      .catch(err => reject(err));
  });
};
