import CaseStudySlider from './CaseStudySlider'
import TeaserPlaceholder from './TeaserPlaceholder'
import ZoomImage from './ZoomImage'

// A project's teaser: a slider when the project has several separate case
// studies, the real image (enlargeable, with optional short caption) once one
// exists, otherwise the labeled placeholder.
export default function ProjectTeaser({ project }) {
  if (project.caseStudies) return <CaseStudySlider project={project} />
  if (!project.teaserImage) return <TeaserPlaceholder text={project.teaserPlaceholder} />
  return (
    <ZoomImage
      src={project.teaserImage}
      alt={project.teaserImageAlt}
      caption={project.teaserCaption}
      linkTo={`/product-stories/${project.slug}`}
    />
  )
}
