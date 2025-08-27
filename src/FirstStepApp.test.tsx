import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import { FirstStepApp } from "./FirstStepApp";


const itemCounterMock = vi.fn((_props: unknown)=>{
    return(
        <div data-testid="ItemCounter" />
    );
})
vi.mock('./shopping-cart/ItemCounter', ()=>({
    ItemCounter: (props: unknown) => itemCounterMock(props)
}));

describe('FirstStepApp',() => {

    afterEach(() => {
        vi.clearAllMocks(); // 👈 resetea llamadas y contadores
    });


    test('Should match snapshot', ()=>{
        const {container} = render(<FirstStepApp/>)
        expect(container).toMatchSnapshot()
    })

    test('Should get all ItemCounter', ()=>{
        render(<FirstStepApp/>)

        const itemCounterMatch = screen.getAllByTestId('ItemCounter');

        expect(itemCounterMatch.length).toBe(3)
    });

    test('Should get ItemCounter props', () => {
        
        render(<FirstStepApp/>)
        expect(itemCounterMock).toHaveBeenCalledTimes(3); 
        expect(itemCounterMock).toHaveBeenCalledWith({
            name: "Nintendo Switch Oled",
            quantity: 3
        }),
        ({
            name: "Super Mario Odysse",
            quantity: 2
        }),
        ({
            name: "Super Smash Bros",
            quantity: 6
        }); 
    })


})