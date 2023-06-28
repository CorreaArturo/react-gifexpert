import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Bodrogon boll Z']);

    const onAddCategory = (newCategory) => {
        console.log('adicionando..');
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />)
                )
            }
            {/* GifItem */}
        </>
    );
}