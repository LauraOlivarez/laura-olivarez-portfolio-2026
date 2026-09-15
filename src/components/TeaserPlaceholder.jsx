export default function TeaserPlaceholder({ text }) {
  return (
    <div className="teaser-placeholder" role="img" aria-label={text}>
      <p className="teaser-placeholder__label" aria-hidden="true">
        {text}
      </p>
    </div>
  )
}
