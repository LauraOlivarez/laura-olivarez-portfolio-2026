import { Link } from 'react-router-dom'
import { colophon, rooms } from '../../data/content'

export default function ExploreView() {
  return (
    <>
      <section className="section section--tight container">
        <p className="eyebrow">Explore</p>
        <h1 className="home-hero-title measure">
          A portfolio, a product, and a few things I&rsquo;m figuring out along the way.
        </h1>
      </section>

      <section className="section container">
        <p className="section-number">Five rooms to wander</p>
        <div className="rooms-list">
          {rooms.map((room, i) => (
            <Link className="room-entry" to={room.path} key={room.key}>
              <span className="room-entry__number">{String(i + 1).padStart(2, '0')}</span>
              <span className="room-entry__label">{room.label}</span>
              <span className="room-entry__desc">{room.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--tight container">
        <div className="colophon">
          <p className="colophon__title">Colophon — How this was made</p>
          {colophon.split('\n\n').map((para) => (
            <p className="colophon__text" key={para.slice(0, 24)}>
              {para}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}
