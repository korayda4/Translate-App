import React from 'react';
import { Select } from 'antd';

const Selector = ({ onChange }) => (
  <Select
    showSearch
    placeholder="Select Language"
    onChange={onChange}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'tr',
        label: 'Türkçe',
      },
      {
        value: 'en',
        label: 'English',
      },
      {
        value: 'deu',
        label: 'Deutsch',
      },
      {
        value: 'fr',
        label: 'Français',
      },
      {
        value: 'es',
        label: 'Español',
      },
      {
        value: 'ar',
        label: 'Arabic',
      },
      {
        value: 'ru',
        label: 'Russian',
      },
      {
        value: 'zh',
        label: 'Chinese',
      },
      {
        value: 'el',
        label: 'Greek',
      },
      {
        value: 'ja',
        label: 'Japanese',
      },
    ]}
  />
);

export default Selector;
