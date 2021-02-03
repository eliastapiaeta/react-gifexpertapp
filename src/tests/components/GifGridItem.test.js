import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

const dataImage = {
    id: 'JhZcAuGjuDmZq',
    title: 'happy amy poehler GIF by Disney',
    url: 'https://media0.giphy.com/media/JhZcAuGjuDmZq/giphy.gif?cid=8d830538qq68sxtbhmrpm2f49dg18f0m2svlora5xr35t2f4&rid=giphy.gif',
}
const wrapper = shallow(<GifGridItem
    id={dataImage.id} title={dataImage.title} url={dataImage.url}
/>);


describe('Prueba en GrifGridItem.js', () => {

    test('should return object::tag<html>', () => {

        expect(wrapper).toMatchSnapshot();
    });
    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(dataImage.title);
    });
    test('debe de tener la imagen al id, url y alt de los props', () => {
        const img = wrapper.find('img');

        // console.log(img.props());
        expect(img.prop('src')).toBe(dataImage.url);
        expect(img.prop('alt')).toBe(dataImage.title);
        expect(img.prop('id')).toBe(dataImage.id);
    });
    test('should tener animate__fadeInLeft', () => {
        const claseABuscar = 'animate__fadeInLeft';
        const div = wrapper.find('div');
        const className = div.props().className;
        // const clases = className.split(' ');
        // const claseIndice = clases.indexOf(claseABuscar);
        // const clase = clases[claseIndice];
        
        expect(className.includes(claseABuscar)).toBe(true);
    })
    

})
