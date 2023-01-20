import { useState } from 'react';
import { AddCategory , GifGrid} from './components';


const apiKey = 'TDMEPpzOGNU7LffBaxHcoUgjJioYznUX';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Developers']);

    console.log(categories);

    const onAddCategory = (newCategory) => {

        //categories.push(newCategory);

        if (categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories]);
        console.log('Father function called from child')

    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                //setCategories = { setCategories }
                onNewCategory={event => onAddCategory(event)}
            />

            {/* listado de gifs */}

            {
                categories.map(category => (

                    <GifGrid key={category} category={category} />

                ))
            }

        </>
    );
};