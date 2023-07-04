import { A } from "solid-start";
import { AiOutlineCheck } from 'solid-icons/ai'

export default function About() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-3xl text-sky-700 font-thin uppercase my-16">
        About of the Pixelmatic Puzzle Game
      </h1>
      <ul class="mt-8 text-left w-fit m-auto">
        <li class="flex gap-4">
          <AiOutlineCheck />
          Please click a cell for increaing the values of same row and columns
        </li>
        <li class="flex gap-4">
          <AiOutlineCheck />
          If 5 consecutive numbers in the Fibonacci sequence are next to each other, these cells will briefly turn green and will be cleared
        </li>
        <li class="flex gap-4">
          <AiOutlineCheck />
          Whenever Fibonacci numbers are matched, you'll get a score
        </li>
      </ul>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Play a game now?
        </A>
      </p>
    </main>
  );
}
