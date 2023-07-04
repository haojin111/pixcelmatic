import { For, createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import Cell from "~/components/Cell";

const initState = () => {
  const res = [];
  for(let i = 0; i < 50; i++) {
    res.push(Array(50).fill(0));
  }
  return res;
}

const checkFibs = (rows: any) => {
  const fibs = [];
  let score = 0;
  for(let rIndex = 0; rIndex < rows.length; rIndex++) {
    const row = rows[rIndex];
    for(let i = 0; i < row.length - 4; i++) {
      const sub = row.slice(i, i + 5);
      if (
        sub[2] > 0 &&
        sub[2] == (sub[0] + sub[1]) &&
        sub[3] == (sub[1] + sub[2]) &&
        sub[4] == (sub[2] + sub[3])
      ) {
        for(let j = i; j < i + 5; j++) {
          fibs.push(`${rIndex}_${j}`);
        }
        score++;
      }
    }
  }
  return { fibs, score };
}

export default function Home() {
  const [state, setState] = createStore(initState());
  const [fibs, setFibs] = createSignal([]);
  const [selected, setSelected] = createSignal({r: -1, c: -1});
  const [score, setScore] = createSignal(0);

  const changeState = (rIndex: Number, cIndex: Number) => {
    setSelected({r: rIndex, c: cIndex});
    const newState = state.map((row, r) => {
      return row.map((col, c) => {
        if (r === rIndex || c === cIndex) {
          return col + 1;
        }
        return col;
      });
    });
    setState(newState);
    const checkResult = checkFibs(newState);
    setFibs(checkResult.fibs);
    setScore(score() + checkResult.score);
  };

  const init = () => {
    setState(initState());
    setSelected({r: -1, c: -1});
  }

  createEffect(() => {
    if (fibs().length > 0) {
      setTimeout(() => {
        const newState = state.map((row, r) => {
          return row.map((col, c) => {
            if (fibs().includes(`${r}_${c}`)) {
              return 0;
            }
            return col;
          });
        });
        setState(newState);
        setFibs([]);
      }, 3000);
    }
  }, [fibs()]);

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <button
        class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
        onClick={() => init()}
      >
        Restart
      </button>
      <button
        class="w-[200px] ml-6 rounded-full bg-cyan-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
        classList={{
          [`bg-green-${Math.round(score() / 10)}00`]: score() > 10 && score() < 100,
          [`bg-lime-${Math.round((score() - 100) / 10)}00`]: score() > 100 && score() < 200
        }}
      >
        Score({score()})
      </button>
      <div class="grid grid-cols-50 gap-[2px] gap-y-[4px]">
        <For each={state} fallback={<div>Loading...</div>}>
          {(row, rIndex) => (
            <For each={row}>
              {(col, cIndex) => (
                <Cell
                  value={col}
                  onClick={() => {
                    changeState(rIndex(), cIndex())
                  }}
                  isSelected={selected().r === rIndex() || selected().c === cIndex()}
                  isFib={!!fibs().includes(`${rIndex()}_${cIndex()}`)}
                />
              )}
            </For>
          )}
        </For>
      </div>
    </main>
  );
}
