import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ZoomImage from './ZoomImage'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// A project with several separate case studies (Verivox). Each slide has its
// own image, title, outcome and link to its own story section. Wide
// containers show the slides side by side; narrower ones become a
// scroll-snap slider with a peek of the next slide, buttons, dots and arrow
// keys. No auto-play.
export default function CaseStudySlider({ project }) {
  const slides = project.caseStudies
  const trackRef = useRef(null)
  const frame = useRef(0)
  const [index, setIndex] = useState(0)
  const [announcement, setAnnouncement] = useState('')
  const [scrollable, setScrollable] = useState(true)
  const mounted = useRef(false)

  const storyPath = `/product-stories/${project.slug}`

  function currentIndex() {
    const track = trackRef.current
    const max = track.scrollWidth - track.clientWidth
    if (max <= 0) return 0
    if (track.scrollLeft >= max - 4) return slides.length - 1
    let best = 0
    let bestDist = Infinity
    Array.from(track.children).forEach((el, i) => {
      const dist = Math.abs(el.offsetLeft - track.scrollLeft)
      if (dist < bestDist) {
        best = i
        bestDist = dist
      }
    })
    return best
  }

  function handleScroll() {
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => setIndex(currentIndex()))
  }

  function goTo(next) {
    const i = Math.max(0, Math.min(slides.length - 1, next))
    const track = trackRef.current
    track.scrollTo({ left: track.children[i].offsetLeft, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    setIndex(i)
  }

  function handleKeyDown(event) {
    if (event.target.closest('dialog')) return
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    }
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    setAnnouncement(`Slide ${index + 1} of ${slides.length}: ${slides[index].title}`)
  }, [index, slides])

  useEffect(() => {
    const track = trackRef.current
    const check = () => setScrollable(track.scrollWidth > track.clientWidth + 1)
    check()
    const observer = new ResizeObserver(check)
    observer.observe(track)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <section
      className="cs-slider"
      aria-roledescription="carousel"
      aria-label={`${project.name} case studies`}
      onKeyDown={handleKeyDown}
    >
      <ul className="cs-track" ref={trackRef} onScroll={handleScroll} tabIndex={scrollable ? 0 : undefined} aria-label="Case study slides">
        {slides.map((slide, i) => (
          <li
            className="cs-slide"
            key={slide.key}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${slides.length}`}
          >
            <ZoomImage
              src={slide.image}
              alt={slide.alt}
              caption={slide.caption}
              clampCaption
              linkTo={`${storyPath}${slide.storyHash}`}
            />
            <Link className="cs-slide__link" to={`${storyPath}${slide.storyHash}`}>
              <h3 className="cs-slide__title">{slide.title}</h3>
              <span className="cs-slide__outcome">
                <span className="archive-entry__evidence-num">{slide.outcome.text}</span>
                <span className="archive-entry__evidence-label">{slide.outcome.label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="cs-controls">
        <button
          type="button"
          className="cs-btn"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="cs-dots">
          {slides.map((slide, i) => (
            <button
              type="button"
              className="cs-dot"
              key={slide.key}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1} of ${slides.length}: ${slide.title}`}
              aria-current={i === index ? 'true' : undefined}
            >
              <span className="cs-dot__mark" aria-hidden="true" />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="cs-btn"
          onClick={() => goTo(index + 1)}
          disabled={index === slides.length - 1}
          aria-label="Next slide"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="visually-hidden" role="status" aria-live="polite">
        {announcement}
      </p>
    </section>
  )
}
