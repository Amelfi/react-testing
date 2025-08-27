import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', ()=>{
    test('Should define name attributes', () => {

        const name = 'This is the name'
        render(<ItemCounter name={name}/>);
        screen.debug();

        expect(screen.findByText).toBeDefined();
        // expect(screen.findByText).not.toBeNull();
    });

    test('Should define quantity attribute', () => {
        const name = 'This is the name'
        render(<ItemCounter name={name} quantity={2}/>);

        expect(screen.getByText('2')).not.toBeNull();
    });

    test('Should increase count when +1 button is pressed', () => {
        const name = 'This is the name'
        render(<ItemCounter name={name} quantity={0}/>)
        const [,addButton] = screen.getAllByRole('button');

        fireEvent.click(addButton);

        
        expect(screen.getByText(1)).toBeDefined();
    })

    test('Should decrease count when -1 button is pressed', () => {

        const name = 'This is the name'
        render(<ItemCounter name={name} quantity={6}/>)
        const [subtrastButton] = screen.getAllByRole('button');

        fireEvent.click(subtrastButton);

        
        expect(screen.getByText(5)).toBeDefined();
    })
    
    test('Should not decrease count when -1 button is pressed and quatity is iqual to 0', () => {

        const name = 'This is the name'
        render(<ItemCounter name={name} quantity={0}/>)
        const [subtrastButton] = screen.getAllByRole('button');

        fireEvent.click(subtrastButton);

        
        expect(screen.getByText(0)).toBeDefined();
    })

    test('Should change to red when quantity iqual to 1', ()=>{

        const name = 'This is the name'
        render(<ItemCounter name={name} quantity={1}/>)

        const text = screen.getByText(name)
        console.log(text.style.color)
        expect(text.style.color).toBe('red')
    })

    test('Should change to black when quantity greater than 1', ()=>{

        const name = 'This is the name'
        render(<ItemCounter name={name} quantity={2}/>)

        const text = screen.getByText(name)
        console.log(text.style.color)
        expect(text.style.color).toBe('black')
    })

});
