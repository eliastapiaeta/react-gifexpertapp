import { AddCategory } from "../../components/AddCategory.js";
const { shallow } = require("enzyme");

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias={setCategories} />);
    });

    test('should mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });
    test('should cambiar la caja de texto busqueda', () => {
        const value = 'Hola Mundo';
        const input = wrapper.find('#inText');
        input.simulate('change', { target: { value } });

        const returnedValue = wrapper.find('#inText').props().value.trim();
        expect(returnedValue).toBe(value);
    });
    test('no debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });
    test('should llamar el setCategories y limpiar la caja de texto', () => {
        // 1. Simular el imputhange
        // 2. Simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. El valor del input debe de estar ''

        const valueText = 'faithfulness';
        const valueNum = '3';

        // 1. Simular el imputhange
        wrapper.find('#inText').simulate('change', { target: { value: valueText } });
        wrapper.find('#inNum').simulate('change', { target: { value: valueNum } });
        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        const valTextFromForm = wrapper.find('#inText').props().value;

        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // 4. El valor del input debe de estar ''
        expect(valTextFromForm).toBe('');
    });

})
