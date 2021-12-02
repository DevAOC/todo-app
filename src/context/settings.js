import React, { useState } from 'react';

export const SettingsContext = React.createContext();

export default function Settings(props) {
  const [hide, setHide] = useState(false);
  const [pagination, setPagination] = useState(5);
  const [sort, setSort] = useState('difficulty');

  return <SettingsContext.Provider value={{ hide, pagination, sort }}>{props.children}</SettingsContext.Provider>;
}
