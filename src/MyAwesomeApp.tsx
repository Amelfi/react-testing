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
        <div>
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h2 style={styleData}>{lastName}</h2>
            <p>{isActive ? 'Activo': 'Inactivo'}</p>
            <p className="mi-clase-con-juegos">{arrayData.join(', ')}</p>
            <p>{JSON.stringify(objectData)}</p>
        </div>
    )
}