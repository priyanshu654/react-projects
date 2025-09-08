import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'


function Card(props){
    //by this it will run even if we will change the order
    const{thumbnail,id,titel,price,brand,rating}=props
    return(
            
            <div className='container' key={id}>
                <img src={thumbnail} alt=""
                
                />
                <div className='info'>
                <h4>{titel}</h4>
                <p>price ${price}</p>
                <p>{brand}</p>
                <h3>Rating{rating} </h3>
                </div>
                
            </div>
        
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"))


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    console.log(data);
    //here items.products.map es lea q ki hmne array object ka name items rakha hai or original uske andar jo array hai uska
    // name products hai to us array to target kar k uspar map function lgane k lea hmne likha hai items.products.map
    const container2=data.products.map((items)=>{
        console.log(items);
        //items is a array of each element that present in data object array return by map function
        //container2 map function ko hold kar rha hai to wo return karega array of items, or wo sasre items react element honge mtlb ki html tags
        // q ki card ko return krwa rahe hai map ko use kar k, items array ke saare value card k required placeholder me insert ho jaaenge...


        // return Card({
        //     id:items.id,
        //     thumbnail:items.thumbnail,
        //     titel:items.title,
        //     price:items.price,
        //     brand:items.brand,
        //     rating:items.rating
        // })

        //second way this is the component way

        return(<Card key={items.id} 
                thumbnail={items.thumbnail}
                titel={items.title}
                price={items.price}
                brand={items.brand}
                rating={items.rating}
                />)
    })
    console.log(container2);
    root.render(<div className='cardHolder'>{container2}</div> )
});


//  install parcel with the cli command ( npm install --save-dev parcel)
//write this in script of package.json  ("start": "HMR=false parcel index.html",)



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THIS IS USED TO CREATE CARD BY USING REACT ELEMENT OBJECT IN WHICH FUNCTION IS PASSED IN TYPE INSTEAD OF HTML TAGS
// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type:Card,   //here card is passed as function means we can render a function as well not only html tags
//     ref:null,
//     props:{
//         id:31,
//         title:"iphone 13",
//         thumbnail:"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
//         price:"876",
//         brand:"apple",
//         rating:"8.9"
//     }
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//card can be passed to the createelement as well
// root.render(React.createElement(Card,{
//     id:31,
//     title:"iphone 13",
//     thumbnail:"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
//     price:"876",
//     brand:"apple",
//     rating:"8.9"})
// )


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THIS IS BY USING JSX
// root.render(
//     <Card title="beauty product" thumbnail="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
//      price="876" brand="lakme" rating="7.8" />
//    all these attributes goes in props of create element 
// )


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////