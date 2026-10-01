/* Shared language state for the static portfolio pages. */
(function () {
  const key = "carlos-portfolio-language";
  const valid = (value) => value === "en" || value === "pt";
  const requested = new URLSearchParams(window.location.search).get("lang");
  let saved = null;
  try { saved = window.localStorage.getItem(key); } catch (_) { /* storage may be unavailable */ }
  let locale = valid(requested) ? requested : valid(saved) ? saved :
    (navigator.language || "en").toLowerCase().startsWith("pt") ? "pt" : "en";
  if (valid(requested)) {
    try { window.localStorage.setItem(key, requested); } catch (_) { /* storage may be unavailable */ }
  }

  function applyDocumentLanguage() {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }

  function setLocale(next) {
    if (!valid(next) || next === locale) return;
    locale = next;
    try { window.localStorage.setItem(key, next); } catch (_) { /* URL still carries the choice */ }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
    applyDocumentLanguage();
    window.dispatchEvent(new Event("portfolio-language-change"));
  }

  function link(href) {
    if (!href || href[0] === "#" || /^(mailto:|tel:)/i.test(href)) return href;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return href;
    url.searchParams.set("lang", locale);
    return url.pathname + url.search + url.hash;
  }

  function useLocale() {
    const [value, setValue] = React.useState(locale);
    React.useEffect(() => {
      const update = () => setValue(locale);
      window.addEventListener("portfolio-language-change", update);
      return () => window.removeEventListener("portfolio-language-change", update);
    }, []);
    return value;
  }

  applyDocumentLanguage();
  window.SiteI18n = { getLocale: () => locale, setLocale, link, useLocale };
})();
