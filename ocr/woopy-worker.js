/* Woopy : le dictionnaire chinois est livré dans chi_sim.traineddata.js (base64),
   parce que l'hébergement des artefacts Claude ne sert pas les fichiers .gz.
   On intercepte la requête du moteur Tesseract et on lui donne ces octets. */
importScripts("chi_sim.traineddata.js");
const woopyFetch = self.fetch.bind(self);
self.fetch = (url, opts) => {
  if (String(url).endsWith("chi_sim.traineddata.gz")) {
    const bin = atob(self.WOOPY_CHI_SIM), u = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return Promise.resolve(new Response(u));
  }
  return woopyFetch(url, opts);
};
importScripts("worker.min.js");
