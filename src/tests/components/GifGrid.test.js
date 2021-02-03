import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en componente <GifGrid />', () => {
    const categoria = 'illogical immaterial human eternity';
    const quantity = 3;

    test('should toMatchSnapshot correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid categoria={categoria} quantity={quantity} />);

        expect(wrapper).toMatchSnapshot();
    });
    test('should mostrar items cuando se cargan imágenes useFecthGifs', () => {

        const gifs = [{
            id: 'JhZcAuGjuDmZq',
            title: 'happy amy poehler GIF by Disney',
            url: 'https://media0.giphy.com/media/JhZcAuGjuDmZq/giphy.gif?cid=8d830538qq68sxtbhmrpm2f49dg18f0m2svlora5xr35t2f4&rid=giphy.gif',
        },
        {
            id: '123JhZcAuGjuDmZq',
            title: 'happy amy poehler GIF by Disney',
            url: 'https://media0.giphy.com/media/JhZcAuGjuDmZq/giphy.gif?cid=8d830538qq68sxtbhmrpm2f49dg18f0m2svlora5xr35t2f4&rid=giphy.gif',
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid categoria={categoria} quantity={quantity} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });


})
