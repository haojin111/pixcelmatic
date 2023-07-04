import { render, cleanup, fireEvent, screen } from '@solidjs/testing-library';
import Cell from '../../src/components/Cell';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('Cell component', () => {
   it('should render the Cell', () => {
    const { getByText } = render(() => <Cell value={1}/>);
    expect(getByText('1')).toBeInTheDocument();
   });

   it('should yellow background when selected', async () => {
    vi.useFakeTimers();
    render(() => <Cell value={1} isSelected={true}/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("1");
    expect(button).toHaveClass("bg-amber-200");
    
    await vi.runAllTimers();
    expect(button).not.toHaveClass("bg-amber-200");
   });

   it('should green background when it is in fibonacci sequence', async () => {
    render(() => <Cell value={1} isFib={true}/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("1");
    expect(button).toHaveClass("bg-green-600");
   });
});