import { useState } from 'react';


export const AddCategory = ({onNewCategory}) =>
{
   const [inputValue, setInputValue] = useState('');

   const onInputChange = (event) =>
   {
       let {value} = event.target; 
       setInputValue(value);
       
       //setInputValue('Hola mi derropito..');
   }

   const onSubmit = (event) =>
   {
       event.preventDefault();
       if(inputValue.trim().length <= 1)
        return;

        setInputValue('');
        onNewCategory(inputValue.trim());
       
   }

    return (
    <>
        <form onSubmit={onSubmit}>
            <input 
                    type="text"
                    placeholder="Search Gifs"
                    value={inputValue}
                    onChange={onInputChange} />
            </form>
        </>
    );
}