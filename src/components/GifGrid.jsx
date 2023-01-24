import { GridItem } from "./GridItem.jsx";
import { useFetchGfis } from "../hooks/useFetchGifs.js";
import PropTypes from 'prop-types'


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGfis(category);

    console.log(images, isLoading);

    return (
        <>

            <h3>{category}</h3>
            {isLoading && (<h2>Loading...</h2>)}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>



        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
