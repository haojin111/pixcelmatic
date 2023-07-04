import { Show, createEffect, createSignal, splitProps } from "solid-js";

export default function Cell(props) {
  const [local, others] = splitProps(props, ["value", "onClick", "isSelected", "isFib"]);
  const [isSelected, setSelected] = createSignal(local.isSelected);
  createEffect(() => {
    setSelected(local.isSelected);
    setTimeout(() => {
      setSelected(false);
    }, 1000);
  }, [local.isSelected]);

  return (
    <button
      class="text-sm w-[18px] h-[18px] transition-all duration:1s timing_function rounded-2px bg-gray-100 border-1 border-gray-300 focus:border-gray-400 active:border-gray-400 hover:bg-amber-400"
      classList={{["bg-amber-200"]: !!isSelected(), ["bg-green-600"]: !!local.isFib}}
      {...others}
      onClick={() => local.onClick()}
    >
      <Show when={local.value > 0}>{local.value}</Show>
      <Show when={local.value === 0}> </Show>
    </button>
  );
}
