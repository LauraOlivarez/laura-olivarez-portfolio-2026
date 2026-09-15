export default function FormulaBlock({ title, lhs, parts }) {
  return (
    <div className="formula">
      <p className="formula__title">{title}</p>
      <p className="formula__equation">
        <span className="formula__lhs">{lhs}</span> ={' '}
        {parts.map((part, i) => (
          <span key={part}>
            {i > 0 && <span className="formula__plus" aria-hidden="true">+</span>}
            {part}
          </span>
        ))}
      </p>
    </div>
  )
}
