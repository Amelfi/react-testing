import type { CSSProperties } from "react";

const firstName = 'Adan';
const lastName = 'Santana';
const isActive = true;
const arrayData = ['Mario', 'Luffy', 'Warrio'];
const objectData = {
    key: '123ABC',
    articleName: 'Carro'
}

const styleData: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: '10px',
}

export function MyAwesomeApp(){

    return(
        <>
            <h1>{firstName}</h1>
            <h2 style={styleData}>{lastName}</h2>
            <p>{isActive ? 'Activo': 'Inactivo'}</p>
            <p>{arrayData.join(', ')}</p>
            <p>{JSON.stringify(objectData)}</p>
        </>
    )
}