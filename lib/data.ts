export const img = (name: string) => `/img/${name}`;

export const contact = {
  address: "5A/5B Industrial Estate, Multan, Pakistan",
  plant: "Commander Petrogas Private Limited, Plot 5-A, Industrial Estate, Multan.",
  phone: "+92 61 6514 060-61-62-63",
  phoneHref: "tel:+92616514060",
  fax: "+92 61 6514 089",
  mobile: "+92-345-6320003",
  mobileHref: "tel:+923456320003",
  mobileName: "Muhammad Saleem Akhter (GM, Commander Petrogas Pvt. Ltd)",
  emails: ["info@comdgroup.com", "saleem.akhtar@comdgroup.com", "Usman@comdgroup.com"],
};

export const vision =
  "Our vision is to be the most customer-oriented company; to build a diversified place and to discover the most based on our customer needs.";
export const mission = [
  "Maintain an effective Quality Management System at large",
  "To be committed and integrated",
  "Transparency & efficiency in all our activities",
];

export const agroGallery = Array.from({ length: 12 }, (_, i) => `commander-agro-${String(i + 1).padStart(2, "0")}`);
export const petrogasGallery = ["petrogas", ...Array.from({ length: 7 }, (_, i) => `petrogas-0${i + 2}`)];
export const seedsGallery = ["aragon", "calder", "flanker", "fletcher", "fonzer", "guderian", "konev"];
export const gharbeenGallery = [
  "Abriter", "AmmoniumSulphate", "Armata", "Asclon", "Brunu", "Crazon", "Culver", "Duxi", "Flemming",
  "Orgapell", "Pracon", "SOP", "Vertisol", "aragon", "calder", "flanker", "fletcher", "fonzer",
  "guderian", "konev", "panzer", "paulus", "ringbolt", "rommel", "sabre", "turma", "zulu",
  "feb-01-2021", "feb-02-2021",
];

export const businesses = [
  {
    slug: "agro", name: "Commander Agro", since: 1996, tag: "Agro Chemicals", cover: "banner-1-1.jpg", logo: "commander-agro-logo.png",
    short: "One of the leading importers and formulators of pesticides, fungicides, rodenticides, acaricides and weedicides in Pakistan.",
  },
  {
    slug: "petrogas", name: "Commander Petrogas", since: 2017, tag: "LPG", cover: "banner-1-2.jpg", logo: "petrogas-logo.png",
    short: "Import and distribution of liquefied petroleum gas all over Pakistan from our plant in Multan.",
  },
  {
    slug: "gharbeen", name: "Gharbeen", since: 2011, tag: "Retail & Seeds", cover: "banner-1-3.jpg", logo: "gharbeen-logo.png",
    short: "Our retail venture under the flagship of Commander Agro, with 5 regional and 50 territorial offices.",
  },
];

export const timeline = [
  { year: "1996", title: "Commander Agro founded", body: "Pesticide import and formulation begins, growing into one of Pakistan's leading agro-chemical firms." },
  { year: "2011", title: "Gharbeen retail venture", body: "Retail arm launched with 5 regional and 50 territorial offices and farmer-training programs." },
  { year: "2017", title: "Commander Petrogas", body: "LPG import and distribution from the Multan plant, with ISO 9000 and ISO 14000 certified facilities." },
];

export const stats = [
  { value: "1996", label: "Established" },
  { value: "300 MT", label: "LPG storage per day" },
  { value: "9,000+ MT", label: "LPG sold per year" },
  { value: "PKR 2.1B", label: "Annual LPG revenue" },
];

export const certifications = [
  { code: "ISO 17025", label: "Agro R&D laboratory" },
  { code: "ISO 9000", label: "LPG quality management" },
  { code: "ISO 14000", label: "LPG environmental management" },
];

export const distributors: [string, string][] = [
  ["Rana Gas", "0302 7352908"],
  ["Al-Wasif Agency", "0300 2957875"],
  ["Al-Fateh Gas Agency", "0308 8214949"],
  ["Bhatti Gas Agency", "0309 3304204"],
  ["M Iqbal Gas Agency", "0300 1496401"],
  ["Qasim Gas Agency", "0307 7465307"],
  ["Ahsan Gas Agency", "0306 4540857"],
  ["Safi Gas Agency", "0304 7230854"],
  ["Mughal Brother Gas Agency", "0300 6304226"],
  ["Sultan Gas Agency", "0304 3019273"],
];

export const leaders = [
  {
    name: "Mr. Rafique", role: "Chairman, Commander Group", photo: "ceo.gif", sign: "ceo-sign.png",
    body: [
      "First of all I myself and all the people working at Commander Group are highly obliged and grateful to Almighty Allah for the success and blessings bestowed on us since its establishment in 1996. I cannot help but regard with wonder the events that have transpired over 25 years of my association with this Group. Our corporate profile is much stronger today than ever in our past. We do more for our clients than ever in our past. Today, we are better positioned to take advantage of the opportunities ahead of us than ever in our past. I am tremendously proud and privileged to serve as the Chairman of this Group. We embrace a strong foundation of commitment, integrity and excellence and are moving forward into an era of growth and opportunity by looking into the future where obstacles and challenges await us.",
      "Our dedication to innovate supports our commitment to be the partner of choice for our clients in all the diversified sectors in which Commander Group is working. It is our goal to be adaptable, responsive and accountable to our clients to meet their needs. To do so, we will combine our professional skills, our diversity, our team-driven yet practical approach and our relentless pursuit of business objectives with a well-driven knowledge of today's industry. As we look ahead, we want to achieve more trust; a mandatory imperative of business on which our Group foundation is entrusted upon. This is our pledge to our customers and we will honour it. Insha Allah.",
    ],
  },
  {
    name: "Choudhry Usman Rafique", role: "CEO, Commander Petrogas (Pvt) Ltd",
    body: [
      "Choudhry Usman Rafique is a results-driven professional with over 20 years of extensive experience in the pesticides and petrochemical industries. As a forward-thinking leader, he has consistently demonstrated success in fostering innovation and championing the early adoption of emerging technologies and platforms within the sector.",
      "He holds a Bachelor's degree in Business and Information Technology from a reputable university in Australia, and further advanced his academic credentials with a Master's degree from a highly ranked university in England.",
      "Mr. Rafique is recognized for his strategic mindset, exceptional time management, and strong communication skills. His proven ability to build customer trust, lead dynamic teams, and drive organizational growth reflects his deep commitment to excellence. As CEO of Commander Petrogas (Pvt.) Ltd., he continues to focus on enhancing team performance, nurturing a positive corporate culture, and steering the company toward sustainable growth and innovation.",
    ],
  },
  {
    name: "Mrs. Samina Rafique", role: "Director",
    body: [
      "Mrs. Samina Rafique is a distinguished philanthropist and a dedicated member of several leading national and international non-governmental organizations (NGOs). She holds a Bachelor's degree from a prestigious foreign university and brings over a decade of experience in management and social development.",
      "With a strong commitment to community welfare, Mrs. Rafique has actively contributed to numerous humanitarian initiatives, focusing on education, healthcare, and women's empowerment. Her leadership and vision have earned her recognition in both corporate and social sectors.",
      "She currently serves as the Director of Commander Petrogas (Pvt.) Ltd., a prominent petrochemical company based in Multan, where she plays a pivotal role in strategic planning and corporate governance.",
    ],
  },
];

export const agroText = [
  "Since its inception in 1996 the firm has progressed and emerged as one of the growing conglomerates in Pakistan. It has state-of-the-art formulation plants for liquid, powder and granule products in the same composite location, all equipped with computerized refilling and repacking systems for retail setup.",
  "The total area is 1.5 hectares with gigantic warehousing facilities for different kinds of products. The state-of-the-art R&D facilities provide added strength to the concept of quality products and new developments. Our R&D department is headed by a team of professionals who are working tremendously hard in research-based developments. In lieu of our competence we have been awarded ISO 17025 certification.",
];
export const petrogasText = [
  "This firm was established in 2017. It is dealing with the import and distribution of liquefied petroleum gas (LPG) all over Pakistan. The LPG plant is located in the city of Multan. Around 300 MT can be stored per day, which is then refilled in dedicated cylinders of our company and sent to our retail outlets and authorised distributors.",
  "The average sales turnover per year is more than 9,000 MT, making the annual revenue PKR 2.1 billion. Our readily available sales staff covering from North to South has made it possible to achieve such tremendous growth in sales. Here at Commander Petrogas we believe in providing reputable services to our clients without compromising on quality and quantity. Our LPG facilities are the only ones in Pakistan with ISO 9000 and ISO 14000 certifications.",
];
export const gharbeenText = [
  "This is our new venture for the retail setup under the flagship of its parent company Commander Agro (Pvt) Ltd. It was started in 2011. Since its establishment we have registered many branded formulations having distinctive active ingredients.",
  "Because of growing demands in the market we have established 5 regional and 50 territorial offices across Pakistan. This has helped our Field Sales Staff (FSS) and Field Training Staff (FTS) to enhance the probabilities of not only sales but to educate farmers at their doorstep. Training sessions are conducted on a regular basis among farmers so that the best application of products is attained and the best yield of crops is achieved, with emergency training programs to prepare them for emergency climate conditions in the event of a catastrophe. So far this firm has achieved tremendous results in all sectors.",
];

export const sectors = [
  {
    id: "agro", name: "Commander Agro", tag: "Agro Chemicals", since: 1996, href: "/agro", cover: "banner-1-1.jpg",
    blurb: agroText[0],
    facts: [["1.5 ha", "Formulation & warehouse site"], ["ISO 17025", "Certified R&D laboratory"], ["3 forms", "Liquid · powder · granule"]],
    gallery: agroGallery.slice(1, 9),
  },
  {
    id: "petrogas", name: "Commander Petrogas", tag: "LPG", since: 2017, href: "/petrogas", cover: "banner-1-2.jpg",
    blurb: petrogasText[0],
    facts: [["300 MT", "Storage per day"], ["9,000+ MT", "Sold per year"], ["PKR 2.1B", "Annual revenue"]],
    gallery: petrogasGallery,
  },
  {
    id: "seeds", name: "Seeds & Retail", tag: "Gharbeen", since: 2011, href: "/gharbeen", cover: "banner-1-3.jpg",
    blurb: gharbeenText[0],
    facts: [["5", "Regional offices"], ["50", "Territorial offices"], ["FSS + FTS", "Field sales & training staff"]],
    gallery: seedsGallery,
  },
];
