import {describe, expect, test} from 'vitest'
import { add, multiply, substraction, divide } from './math.helper';


describe('Add',()=>{
    test('should add two numbers', () => { 
    
        //! 1 Arrange
        const a = 2;
        const b = 5;
    
        //! 2 Act
        const result = add(a, b);
    
        //! 3 Assert
        expect(result).toBe(a + b);
    
    });
})

describe('Substract',() => {
    test('Should subtract two numbers', () => { 
        //! 1 Arrange
        const a = 7;
        const b = 4;
    
        //! 2 Act
        const result = substraction(a, b);
    
        //! 3 Assert
        expect(result).toBe(a - b);
     });
})

describe('Multiply', () =>{
    test('Should multiply two positive numbers', () => { 
        //! 1 Arrange
        const a = 5;
        const b = 4;
    
        //! 2 Act
        const result = multiply(a, b);
    
        //! 3 Assert
        expect(result).toBe(a * b);
    });
    
    test('Should multiply two negative numbers', () => { 
        //! 1 Arrange
        const a = -4;
        const b = -8;
    
        //! 2 Act
        const result = multiply(a, b);
    
        //! 3 Assert
        expect(result).toBe(a * b);
    });

    test('Should divide two numbers', () => {
        const a = 3;
        const b = 2;

        const result = divide(a, b);

        expect(result).toBe(a / b);
    })
})


