import { render, screen , fireEvent} from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Testing <GifExpertApp/>', () => { 
    test('should not return images on duplicated category', () => { 
        
        render(<GifExpertApp categories/>)

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Developerssss' } });

        screen.debug();
        
        
        
     });

     test('should return images at the beggining on new category', () => { 
        
     });
 })