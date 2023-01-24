import { queryByTitle, render, screen } from "@testing-library/react"
import { GridItem } from "../../src/components"

describe('Test on GridItem', () => { 
    
    const title = 'Hi';
    const url = 'https://www.oshyn.com/';
    

    test('should match the snapshot', () => { 
        
        const {container} = render(<GridItem title={title } url={ url }/>);

        expect(container).toMatchSnapshot();

     });

     test('should show the image with the url and Alt given', () => { 
        
        render(<GridItem title={title } url={ url }/>);

        console.log(url)
        console.log(screen.getByRole('img').src);
        //expect( screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);


      });

      test('should show the component title', () => { 
        
        render(<GridItem title={title } url={ url }/>);

        expect(screen.getByText(title)).toBeTruthy();

       })

 })