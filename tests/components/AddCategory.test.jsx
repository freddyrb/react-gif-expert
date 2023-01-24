import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Test AddCategory ', () => {
    test('should change the input value', () => {

        render(<AddCategory onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');

    });

    test('should call Submit', () => {
        const inputValue = 'Saitama';

        const onNewCategoryTest = jest.fn();

        render(<AddCategory onNewCategory={onNewCategoryTest} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Saitama' } });
        fireEvent.submit(form)
        //screen.debug();

        expect(input.value).toBe('')

        expect(onNewCategoryTest).toHaveBeenCalled();
        expect(onNewCategoryTest).toHaveBeenCalledTimes(1);
        expect(onNewCategoryTest).toHaveBeenCalledWith( inputValue  );

    });

    test('should not call funtion when string length is less or equal than 1', () => { 
        
        const inputValue = '';

        const onNewCategoryTest = jest.fn();

        render(<AddCategory onNewCategory={onNewCategoryTest} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form)
        //screen.debug();

        expect(onNewCategoryTest).toHaveBeenCalledTimes(0);
        expect(onNewCategoryTest).not.toHaveBeenCalled();

        

     })

})