// Display preferences, stored per viewer in localStorage and mirrored to <html> data attributes.
export type Prefs = {
  theme: "system" | "light" | "dark";
  text: 0 | 1 | 2;
  contrast: boolean;
  motion: boolean; // true = reduce
  links: boolean;
};

export const defaultPrefs: Prefs = { theme: "system", text: 0, contrast: false, motion: false, links: false };
export const PREFS_KEY = "ns-prefs";

/** Runs inline in <head> before first paint. Keep it dependency-free. */
export const prefsScript = `(function(){var d=document.documentElement;var p={};try{p=JSON.parse(localStorage.getItem('${PREFS_KEY}')||'{}')}catch(e){}
var m=window.matchMedia('(prefers-color-scheme: dark)');function a(){var t=p.theme||'system';d.dataset.theme=t==='system'?(m.matches?'dark':'light'):t}a();
m.addEventListener&&m.addEventListener('change',function(){try{p=JSON.parse(localStorage.getItem('${PREFS_KEY}')||'{}')}catch(e){}a()});
if(p.text)d.dataset.text=String(p.text);if(p.contrast)d.dataset.contrast='high';if(p.motion)d.dataset.motion='reduce';if(p.links)d.dataset.links='underline';})();`;

export function applyPrefs(p: Prefs) {
  const d = document.documentElement;
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  d.dataset.theme = p.theme === "system" ? (dark ? "dark" : "light") : p.theme;
  const set = (key: string, value: string | false) => {
    if (value) d.dataset[key] = value;
    else delete d.dataset[key];
  };
  set("text", p.text ? String(p.text) : false);
  set("contrast", p.contrast && "high");
  set("motion", p.motion && "reduce");
  set("links", p.links && "underline");
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(p));
  } catch {}
}

export function readPrefs(): Prefs {
  try {
    return { ...defaultPrefs, ...JSON.parse(localStorage.getItem(PREFS_KEY) || "{}") };
  } catch {
    return defaultPrefs;
  }
}
