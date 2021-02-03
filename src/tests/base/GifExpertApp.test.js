import { shallow } from 'enzyme';
import GifExpertApp from '../../base/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('should toMatchSnapshot (mostrarse correctamente)', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });
    test('should mostrar una lista de categorías', () => {

        const categories = [{ cat: 'Bear', num: 4 }, { cat: 'Fish', num: 3 }, { cat: 'Eyes', num: 10 }];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });


});
