import { Switch } from '@blueprintjs/core';

export default function Hide({ hide, setHide }) {
  return (
    <>
      <Switch checked={hide} onChange={() => setHide(!hide)} label="Toggle Hide Completed" />
    </>
  );
}
