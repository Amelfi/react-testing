import { ItemCounter } from "./shopping-cart/ItemCounter";

interface items{
    name: string,
    quantity: number
}
const itemsList: items[] = [
    {
        name: "Nintendo Switch Oled",
        quantity: 3
    },
    {
        name: "Super Mario Odysse",
        quantity: 2
    },
    {
        name: "Super Smash Bros",
        quantity: 6
    },
]

export function FirstStepApp(){
 return (
    <>
        <h1>Carrito de compras</h1>
        {itemsList.map((item)=>(
            <ItemCounter key={item.name} name={item.name} quantity={item.quantity}/>
        ))}
        
    </>
 );
}