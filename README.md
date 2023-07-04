# PixelMatic Puzzle Game
- When you click on a cell over a grid of 50x50, all values in the cells in the same row and column are increased by 1 or, if a cell was empty, it will get a value of 1.
- After each change, a cell will briefly turn yellow. 
- If 5 consecutive numbers in the Fibonacci sequence are next to each other, these cells will briefly turn green and will be cleared

## Project Details
This project is created by using solid.js[https://www.solidjs.com/] with tailwindcss and typescript template.
Solid.js is fast javascript frameworks from the offical site.

## Running Application

```bash
git clone https://github.com/haojin111/pixcelmatic.git
cd pixelmatic

# create a new project in the current directory
yarn install

# create a new project in my-app
yarn build

yarn start
```

## Testing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a test script:

```bash
yarn test
```
