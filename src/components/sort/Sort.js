import { ControlGroup } from '@blueprintjs/core';

export default function Sort({ sort, setSort }) {
  return (
    <>
      <ControlGroup vertical={false}>
        <label className=".bp3-inline">
          Label A
          <div class="bp3-select">
            <select>
              <option selected>None</option>
              <option value="difficulty">Difficulty</option>
            </select>
          </div>
        </label>
      </ControlGroup>
    </>
  );
}
