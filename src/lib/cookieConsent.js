import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import { loadGoogleAnalytics, loadMicrosoftClarity } from './analyticsLoaders'

function enableAnalyticsIfAccepted() {
  if (CookieConsent.acceptedCategory('analytics')) {
    loadGoogleAnalytics()
    loadMicrosoftClarity()
  }
}

export function initCookieConsent() {
  CookieConsent.run({
    // Remembered in localStorage by the library itself — the banner
    // won't reappear on later visits once a choice is made.
    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom left',
        equalWeightButtons: false,
        flipButtons: false,
      },
      preferencesModal: {
        layout: 'box',
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    categories: {
      necessary: {
        readOnly: true,
        enabled: true,
      },
      analytics: {},
    },
    onFirstConsent: enableAnalyticsIfAccepted,
    onConsent: enableAnalyticsIfAccepted,
    onChange: ({ changedCategories }) => {
      if (changedCategories.includes('analytics')) enableAnalyticsIfAccepted()
    },
    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'This site uses cookies',
            description:
              'We use analytics cookies (Google Analytics, Microsoft Clarity) to understand how visitors use this site. These only run if you accept — see the <a href="/privacy#cookie-policy">Cookie Policy</a> for details.',
            acceptAllBtn: 'Accept',
            acceptNecessaryBtn: 'Reject',
            showPreferencesBtn: 'Manage preferences',
            footer:
              '<a href="/privacy">Privacy Policy</a>\n<a href="/privacy#cookie-policy">Cookie Policy</a>',
          },
          preferencesModal: {
            title: 'Cookie preferences',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            savePreferencesBtn: 'Save preferences',
            closeIconLabel: 'Close',
            serviceCounterLabel: 'Service|Services',
            sections: [
              {
                title: 'Cookie usage',
                description:
                  'We use cookies to ensure the basic functionality of the site and to understand how visitors use it. You can choose to accept or reject the optional analytics category below. Read the full <a href="/privacy#cookie-policy">Cookie Policy</a>.',
              },
              {
                title: 'Strictly necessary',
                description: 'Cookies required for the site to function correctly. Always active.',
                linkedCategory: 'necessary',
              },
              {
                title: 'Analytics',
                description:
                  'Google Analytics and Microsoft Clarity — helps us understand how visitors use the site. Not loaded unless you accept.',
                linkedCategory: 'analytics',
              },
              {
                title: 'More information',
                description:
                  'For any questions about this policy, see the <a href="/privacy">Privacy Policy</a>.',
              },
            ],
          },
        },
      },
    },
  })
}
