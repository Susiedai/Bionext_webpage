/* ================================================================
   COURSES
   Course groups shown on the BE degree & careers page.
   Example course:
   {code:"BIOL_EN 4160",title:"Food Process Engineering",cr:"3",desc:"One-line description."},
   - cr = credit hours
   - status:"new" shows a "New course" tag; status:"confirm" shows "Number to confirm"
   ================================================================ */

const CATALOG = "https://catalog.missouri.edu/courseofferings/biol_en/";
const courseGroups = [
  {name:"Core foundations",tone:"core",courses:[
    {code:"BIOL_EN 2080",title:"Introduction to Programming for Engineers",cr:"3",desc:"Writing scientific programs in MATLAB to analyze data and simulate physical systems."},
    {code:"BIOL_EN 2180",title:"Engineering Analysis of Bioprocesses",cr:"3",desc:"Material and energy balances for steady-state and transient biological processes."},
    {code:"BIOL_EN 3180",title:"Heat and Mass Transfer in Biological Systems",cr:"3",desc:"Heat and mass transfer principles applied to bioprocessing, bioenvironmental, and biomedical systems."},
    {code:"BIOL_EN 4380",title:"Applied Electronic Instrumentation (Bioinstrumentation)",cr:"4",desc:"Electronics, signal conditioning, and computer interfacing for building measurement systems."}
  ]},
  {name:"Bioenergy & bioprocessing",tone:"energy",courses:[
    {code:"BIOL_EN 3330",title:"Fermentation for Food, Fuel and Beverages",cr:"3",desc:"Fermentation principles behind fermented foods, corn ethanol, beer, wine, and spirits, with an introduction to biorefineries. Same as F_S 3330."},
    {code:"BIOL_EN 4315",title:"Principles of Biochemical Engineering",cr:"3",desc:"Enzyme and cell growth kinetics, metabolic pathways, and bioreactor design and modeling. Same as CH_ENG 4315."},
    {code:"BIOL_EN 4360",title:"Biomanufacturing Technologies",cr:"3",desc:"Process development, unit operations, facilities, and regulatory compliance for vaccines, antibodies, and therapeutic proteins."},
    {code:"BION 4001 / 7001",title:"Biotechnology for Biofuels and Bioproducts",cr:"",desc:"Biotechnology for developing bioenergy as a renewable energy source across three generations: first-generation ethanol from corn and sugar, second-generation lignocellulosic ethanol from biomass, and emerging third-generation biofuels and bioproducts from new biomolecules and species. Also covers recent research advances, government policy, and industry approaches to bioenergy.",status:"new"},
    {code:"BION 4750 / 7750",title:"Green Engineering",cr:"3",desc:"The 12 principles of green chemistry and green engineering, green metrics, and techno-economic analysis (TEA) and life cycle assessment (LCA) for designing more sustainable processes and products. New course, coming soon to the University of Missouri Academic Catalog.",status:"new"}
  ]},
  {name:"Food engineering",tone:"food",courses:[
    {code:"BIOL_EN 4050",title:"Zero Hunger Challenge",cr:"3",desc:"Multidisciplinary teams tackle food and nutrition security around UN Sustainable Development Goal 2 and develop a challenge proposal. Same as F_S 4050."},
    {code:"BIOL_EN 4160",title:"Food Process Engineering",cr:"3",desc:"Unit operations in the food industry: heat transfer, preservation, drying, refrigeration and freezing, packaging, and sustainability."}
  ]},
  {name:"Water & environment",tone:"water",courses:[
    {code:"BIOL_EN 4350",title:"Watershed Modeling Using GIS",cr:"3",desc:"Watershed evaluation for hydrology, sediment yield, and water quality, including model calibration. Same as CV_ENG 4720."},
    {code:"BIOL_EN 4560",title:"Observing the Earth from Space",cr:"3",desc:"Satellite remote sensing and image analysis for agriculture, land use, water quality, and climate. Same as ENV_SC 4560."}
  ]}
];
