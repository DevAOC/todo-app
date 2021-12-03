import { useContext } from 'react';
import { SettingsContext } from '../../context/settings';

import Hide from '../hide/Hide.js';
import ItemsPerPage from '../itemsPerPage/ItemsPerPage.js';
import Sort from '../sort/Sort.js';

export default function Settings() {
  const settings = useContext(SettingsContext);
  return (
    <>
      <Hide hide={settings.hide} setHide={settings.setHide} />
      <ItemsPerPage itemsPerPage={settings.itemsPerPage} setItemsPerPage={settings.setItemsPerPage} />
      <Sort sort={settings.sort} setSort={settings.setSort} />
    </>
  );
}
