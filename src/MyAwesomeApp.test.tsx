import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import {render} from '@testing-library/react'
describe('MyAwesomeApp', ()=>{
    test('Should render firstName and lastName',() => {

        const {container} = render(<MyAwesomeApp/>);

        const h1 = container.querySelector('h1');
        const h2 = container.querySelector('h2')

        expect(h1?.innerHTML).toBe('Adan')
        expect(h2?.innerHTML).toBe('Santana')
    });
});