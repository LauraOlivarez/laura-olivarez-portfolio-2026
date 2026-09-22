import privacyPolicyHtml from '../assets/legal/privacy-policy.html?raw'
import cookiePolicyHtml from '../assets/legal/cookie-policy.html?raw'

// Termly-generated legal content, rendered exactly as provided — each
// document's own inline styles/typography (Arial), not converted into
// site components. Two distinct documents, not merged: the Cookie
// Policy gets its own clearly-labeled section and anchor below the
// Privacy Policy.
export default function PrivacyPolicy() {
  return (
    <section className="section container privacy-policy-wrap">
      <div dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />

      <div id="cookie-policy" className="legal-section-break">
        <p className="eyebrow">Cookie Policy</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: cookiePolicyHtml }} />
    </section>
  )
}
