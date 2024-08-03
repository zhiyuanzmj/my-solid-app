import { createSignal } from "solid-js";

export default () => {
  const [list] = createSignal<number[]>([1, 2, 3]);
  const [selected, setSelected] = createSignal(0);

  return (
    <>
      <fieldset>
        <legend>v-memo</legend>

        <div
          v-for={i in list()}
          v-memo={[selected() === i]}
          onClick={() => setSelected(() => i)}
        >
          {i}: {selected()}
        </div>
      </fieldset>
    </>
  );
};
