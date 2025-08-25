import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { ad } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";

describe('ItemCounter', ()=>{
    test('Should define name attributes', () => {

        const name = 'This is the name'
        render(<ItemCounter itemName={name}/>);
        screen.debug();

        expect(screen.findByText).toBeDefined();
        // expect(screen.findByText).not.toBeNull();
    });

    test('Should define quantity attribute', () => {
        const name = 'This is the name'
        render(<ItemCounter itemName={name} quantity={2}/>);

        expect(screen.getByText('2')).not.toBeNull();
    });

    test('Should increase count when -1 button is pressed', () => {
        const name = 'This is the name'
        render(<ItemCounter itemName={name} quantity={0}/>)
        const [,addButton] = screen.getAllByRole('button');

        fireEvent.click(addButton);

        
        expect(screen.getByText(1)).toBeDefined();
    })

    test('Should decrease count when -1 button is pressed', () => {

        const name = 'This is the name'
        render(<ItemCounter itemName={name} quantity={6}/>)
        const [subtrastButton] = screen.getAllByRole('button');

        fireEvent.click(subtrastButton);

        
        expect(screen.getByText(5)).toBeDefined();
    })
    
    test('Should not decrease count when -1 button is pressed and quatity is iqual to 0', () => {

        const name = 'This is the name'
        render(<ItemCounter itemName={name} quantity={0}/>)
        const [subtrastButton] = screen.getAllByRole('button');

        fireEvent.click(subtrastButton);

        
        expect(screen.getByText(0)).toBeDefined();
    })

});
