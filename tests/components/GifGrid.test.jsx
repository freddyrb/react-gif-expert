import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGfis } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGfis');

describe('Testing GifGrid', () => {

    const category = 'Adobe'

    test('should show loading message', () => {

        useFetchGfis.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));


    });

    test('should show images when call API', () => {

        const gifs = [{
            id: 'ADB',
            title: 'Saimta',
            url: 'https://dkalsad.com'
        },
        {
            id: 'XSW',
            title: 'Pokemon',
            url: 'https://qqqkalsad.com'
        }
        ];

        useFetchGfis.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        
        expect( screen.getAllByRole('img').length).toBe(2);


    })

})