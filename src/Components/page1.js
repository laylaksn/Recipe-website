import React from 'react';
import './pagestyles.css';


export default function Page1() {
    return (
        <div>
            <h1 className="h1page1">Page 1</h1>
            <h2 className="h2page1">Recipe for creamy vegan mushroom pasta</h2>
            <h3 className="h3page1">Ingredients:</h3>
            <ul className="ingpage1">
                <li>dash of olive oil</li>
                <li>4 cloves of garlic (or more if you love garlic), crushed</li>
                <li>1 onion, finely chopped</li>
                <li>500ml of mushroom stock</li>
                <li>350ml of plant milk</li>
                <li>500g of pasta (penne)</li>
                <li>salt to taste</li>
                <li>black pepper and dried oregano to taste</li>
                <li>1/2 tablespoon of nutritional yeast</li>
             </ul>
             <h4>Recipe:</h4>
             <ul>
                <li>Heat the olive oil in a large pot over medium heat</li>
                <li>Add the garlic and onion with some salt and cook until the garlic is translucent</li>
                <li>Add the mushroom stock, milk, pasta, salt, pepper and dried oregano and bring to a boil</li>
                <li>Once boiling, reduce to a simmer and cover with a lid</li>
                <li>Cook for about 20 minutes, or until the pasta is al dente</li>
                <li>Stir in the nutritional yeast</li>
                <li>Serve and enjoy :) </li>
             </ul>
        </div>
    )
}