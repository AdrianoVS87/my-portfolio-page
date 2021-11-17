import Card from './Card'

import 'bootstrap/dist/css/bootstrap.min.css';
export const Cards = ({ cards }) => {
  return (
    <>
      <section id="projects" className="card-grid container text-center">
        <div className="row">
        <h2>COMPLETED PROJECTS:</h2>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        </div>
      </section>
    </>
  )
}


