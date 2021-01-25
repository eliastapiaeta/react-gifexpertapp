export const getGifs = async (categoria, quantity) => {

    // console.log(categoria, quantity);
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=${encodeURI(quantity)}&api_key=Y9ZpxPqgrW8xKcg06GWFeWUFfQGGKTiX`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}