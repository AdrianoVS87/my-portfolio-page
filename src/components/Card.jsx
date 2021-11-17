import { AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

export const Card = ({ card }) => {
  return (
    
    <div className="card-game mb-4 col-md-4 col-sm-6 col-xs-12">
      <div className="image-container">
        <img src={card.image} alt={card.alt} />
      </div>
      <h3>{card.name}</h3>
      <a href={card.site} target="_blank" rel="noreferrer">
        <button id="button" className="btn btn-danger">Site <CgWebsite /></button>
        <button className="btn btn-danger">Github <AiOutlineGithub /></button>
      </a>
    </div>
  )
}

export default Card;