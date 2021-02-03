import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hooks useFetchGifs', () => {

    test('should retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('sun', 1));
        const { data, loading } = result.current;

        await waitForNextUpdate({timeout:1500});

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('should retornar un arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('sun', 1));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
    });
    
});
