
import PropTypes from 'prop-types';

export const GridItem = ({ title, url }) => {


  return (
    <div className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
}


GridItem.propTypes = {

  title: PropTypes.string.isRequired ,
  url: PropTypes.string.isRequired

}

/*

Task:

1. Add PropTypes ?????? yarn add
a. title required
b. url required

2. Eval the snapshot

*/