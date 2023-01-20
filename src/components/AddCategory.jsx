import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        
        setInputValue(target.value);
    }

    const onSubmitForm = (event) => {

        event.preventDefault();
        console.log(inputValue);

        if(inputValue.length <= 1) return;

        onNewCategory(inputValue.trim());

        //setCategories( categoriess => [ inputValue,...categoriess]);
        setInputValue('');

    }

    return (
        <form onSubmit={  onSubmitForm }>
            <input
                type="text"
                placeholder="Search by"
                value={inputValue}
                onChange={onInputChange}></input>
        </form>
    );
};


