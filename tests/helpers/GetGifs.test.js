import { getGifs } from "../../src/helpers/GetGifs"

describe('Test GetGifs', () => { 
    test('should return a gifs array', async() => { 
        
        const gifs = await getGifs('Coding');

        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            }
        );

     })
 })