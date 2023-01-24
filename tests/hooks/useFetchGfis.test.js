import { renderHook , waitFor } from "@testing-library/react"
import { useFetchGfis } from "../../src/hooks/useFetchGifs"

describe('Testing Hook useFetchGfis', () => { 

    const category = 'Coding';

    test('should return original state', () => { 
        const { result } = renderHook(()=> useFetchGfis(category) );
        const { images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        
     });

     test('should return an images array and isloading in false', async () => { 
        const { result } = renderHook(()=> useFetchGfis(category) );

        await waitFor(
            () => expect ( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

      })
 })