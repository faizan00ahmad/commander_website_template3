// Runs before first paint (inline in <head>) so there is no flash. Default is light; only an explicit "dark" choice switches.
export const themeScript =
  'try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){document.documentElement.dataset.theme="light"}';
