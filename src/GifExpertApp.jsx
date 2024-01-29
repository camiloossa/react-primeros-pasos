import { useState } from "react";
// Components
import { AddCategory, GifGrid } from "./components";

// Helpers
import { generateId } from "./helpers/getGifs";



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        setCategories([newCategory, ...categories]);        
    }    
    
    return (
        <>           
            <h1>GifExpertApp</h1>
           
            <AddCategory onNewCategory = { onAddCategory } />
            
            { categories.map( category => <GifGrid key={ generateId() } category = { category } /> )}
    
        </>
    )
}

export default GifExpertApp
