// Wraps a project's name in a link to the live company site when one
// exists, and appends a short note (e.g. "site no longer live") when
// it doesn't. Used for both the Work index title and the Product
// Story headline — same underlying project data either way.
export default function CompanyHeading({ project, as: Tag = 'span', className }) {
  return (
    <Tag className={className}>
      {project.companyUrl ? (
        <a href={project.companyUrl} target="_blank" rel="noreferrer" className="company-heading-link">
          {project.name}
        </a>
      ) : (
        project.name
      )}
      {project.companyNote && <span className="company-note"> {project.companyNote}</span>}
    </Tag>
  )
}
