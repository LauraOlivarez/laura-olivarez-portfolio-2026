import privacyPolicyHtml from '../assets/legal/privacy-policy.html?raw'

// Termly-generated legal content, rendered exactly as provided — its own
// inline styles/typography (Arial), not converted into site components.
export default function PrivacyPolicy() {
  return (
    <section className="section container privacy-policy-wrap">
      <div dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
    </section>
  )
}
