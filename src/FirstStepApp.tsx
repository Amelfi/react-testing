import { ItemCounter } from "./shopping-cart/ItemCounter";

interface items{
    name: string
}
const itemsList: items[] = [
    {
        name: "Nintendo Switch Oled"
    },
    {
        name: "Super Mario Odysse"
    },
    {
        name: "Super Smash Bros"
    },
]

export function FirstStepApp(){
 return (
    <>
        <h1>Carrito de compras</h1>
        {itemsList.map(({name})=>(
            <ItemCounter itemName={name}/>
        ))}
        
    </>
 );
}