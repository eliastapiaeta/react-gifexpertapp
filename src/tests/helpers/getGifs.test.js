import { getGifs } from "../../helpers/getGifs";


describe('Pruebas con getGifs Fetch', () => {

    test('should traer 10 elementos', async () => {
        const cat = 'Cristo';
        const quantity = 10;
        const gifs = await getGifs('Cristo', quantity);
        expect(gifs.length).toBe(quantity);
    });
    test('should traer array vacio', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })


})
