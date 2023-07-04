import { render, cleanup, fireEvent, screen } from '@solidjs/testing-library';
import Game from '../../src/routes/index';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('App component', () => {
   it('should render the App with grid', () => {
    render(() => <Game />);
    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(2500);
   });

   it('should increased when clicking button', async () => {
      render(() => <Game />);
      const buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[2]);
      // the event loop takes one Promise to resolve to be finished
      await Promise.resolve();
      const updatedButtons = screen.queryAllByRole("button");
      expect(updatedButtons[2]).toHaveTextContent("1");
      for (let i = 2; i < 2052; i++) {
         if ((i > 1 && i < 53) || (i - 2) % 50 == 0) {
            expect(updatedButtons[i]).toHaveTextContent("1");
         }
      }
   });

   it('check fibonacci sequence, briefly green background and cleared', async () => {
      render(() => <Game />);
      let buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[2]);
      await Promise.resolve();
      buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[54]);
      await Promise.resolve();
      buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[55]);
      await Promise.resolve();
      buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[105]);
      await Promise.resolve();
      buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[56]);
      await Promise.resolve();
      buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[106]);
      await Promise.resolve();
      buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[156]);
      await Promise.resolve();
      buttons = screen.queryAllByRole("button");
      fireEvent.click(buttons[206]);
      await Promise.resolve();

      const updatedButtons = screen.queryAllByRole("button");
      expect(updatedButtons[2]).toHaveTextContent("1");
      expect(updatedButtons[3]).toHaveTextContent("1");
      expect(updatedButtons[4]).toHaveTextContent("2");
      expect(updatedButtons[5]).toHaveTextContent("3");
      expect(updatedButtons[6]).toHaveTextContent("5");
      expect(updatedButtons[2]).toHaveClass("bg-green-600");
      expect(updatedButtons[3]).toHaveClass("bg-green-600");
      expect(updatedButtons[4]).toHaveClass("bg-green-600");
      expect(updatedButtons[5]).toHaveClass("bg-green-600");
      expect(updatedButtons[6]).toHaveClass("bg-green-600");
      expect(updatedButtons[1]).toHaveTextContent("Score(1)");      
   });

   
});