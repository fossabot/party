import { html } from 'lit-html/lib/lit-extended'

export default function header(isSplash: boolean, tvMode: boolean = false) {
  let header

  if (isSplash) {
    header = html`<div id="logo">
      <img src="/assets/images/party/Party-logo-invert.png" alt="Party" />
      <p style="margin-top: 0;">Prototype</p>
    </div>`
  }

  if (tvMode) {
    header = html`
      ${header}
      <h2>Open <pre>chances.party</pre> in your browser
    `
  }

  return header
}
