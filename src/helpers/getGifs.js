export const getGifs = async(category) => {    
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=k7FEFmutYRty2akbGSkkwufULT8z6111&q=${category}&limit=10`;
    
    const resp =  await fetch(url);
    const { data } = await resp.json();
    
    const gif = data.map( ({ id, title, images:{ downsized_medium } }) => ({             
            id: id,
            title: title,
            url: downsized_medium.url            
    }));

    return gif;
}

// Funcion para generar ID
export const generateId = () => {
    const random = Math.random().toString(36).slice(2, undefined);
    const date = Date.now().toString(36);

    return random + date;
}