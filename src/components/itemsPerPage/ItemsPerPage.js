import { NumericInput } from '@blueprintjs/core';

export default function ItemsPerPage({ itemsPerPage, setItemsPerPage }) {
  return (
    <>
      <NumericInput defaultValue={itemsPerPage} min={3} max={10} onValueChange={(num) => setItemsPerPage(num)} />
    </>
  );
}
