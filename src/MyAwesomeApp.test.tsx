import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import {render, screen} from '@testing-library/react'
describe('MyAwesomeApp', ()=>{
    test('Should render firstName and lastName',() => {

        //! 1 Arrange
        //Usar container con el render cuando es estatico.
        //con el container puedo obtener los elementos del componente.
        const {container} = render(<MyAwesomeApp/>);
        //! 2 Act
        const h1 = container.querySelector('h1');
        const h2 = container.querySelector('h2');
        //! 3 Assert
        expect(h1?.innerHTML).toBe('Adan');
        expect(h2?.innerHTML).toBe('Santana');
    });

    test('Should render firtName and lastName screen', () => {

        //! 1 Arrange
        render(<MyAwesomeApp/>);
        //Usar screen cuando hay eventos
        //screen.debug  muestra los elementos del componente.
        // screen.debug();

        //! 2 Act
        // const h1 = screen.getByRole('heading',{
        //     level: 1
        // });

        const h1 = screen.getByTestId('first-name-title');


        //! 3 Assert
        expect(h1.innerHTML).toContain('Adan');
        // screen.getAllByTestId()
    });

    test('Should match snapshot', ()=> {
        const {container} = render(<MyAwesomeApp/>);
        const domHtml = container.innerHTML;
        console.log(domHtml);

        expect(container).toMatchSnapshot();
    });
});