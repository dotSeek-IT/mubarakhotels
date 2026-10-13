// The site is a static export (GitHub Pages), so forms cannot POST to a server.
// Instead, a submitted form opens the visitor's email app with the details
// filled in, addressed to the restaurant, then shows the form's .sent-message.

export const RESTAURANT_EMAIL = "mubarakhotels@yahoo.co.in";

/**
 * @param {string} subject  Email subject line.
 * @param {Record<string, string>} fields  Form field name -> label for the email body.
 */
export function emailFormHandler(subject, fields) {
  return (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const body = Object.entries(fields)
      .map(([name, label]) => `${label}: ${data.get(name) || "-"}`)
      .join("\n");

    window.location.href =
      `mailto:${RESTAURANT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    form.querySelector(".sent-message")?.classList.add("d-block");
    form.reset();
  };
}
