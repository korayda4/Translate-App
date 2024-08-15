import React from 'react';
import { Select } from 'antd';
import LanguagesOptions from '../veriable/options'; // LanguagesOptions'ı import et

const Selector = ({ onChange }) => (
  <Select
    showSearch
    placeholder="Select Language"
    onChange={onChange}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={LanguagesOptions} // Eski dil seçeneklerini kaldır ve LanguagesOptions'ı kullan
  />
);

export default Selector;
