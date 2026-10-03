/* ================================================================
   EMPLOYERS
   Shown in the Careers section. region must be one of:
   St. Louis, Kansas City, Mid-Missouri, Midwest (or add a new one; a filter appears automatically).
   ================================================================ */

const employers = [
  {name:"Bayer Crop Science",note:"Formerly Monsanto, acquired by Bayer in 2018",loc:"St. Louis (Creve Coeur and Chesterfield), MO",region:"St. Louis",sector:"Agriculture & plant biotech",work:"Crop biotechnology, plant breeding pipelines, seed production, and field testing.",url:"https://www.bayer.com"},
  {name:"Donald Danforth Plant Science Center",loc:"St. Louis, MO",region:"St. Louis",sector:"Agriculture & plant biotech",work:"Nonprofit plant science research, with technician and research roles in labs and greenhouses.",url:"https://www.danforthcenter.org"},
  {name:"Pfizer",loc:"Chesterfield, MO",region:"St. Louis",sector:"Pharma & biomanufacturing",work:"Bioprocess, analytical, and formulation development for biologics, vaccines, and gene therapies.",url:"https://www.pfizer.com"},
  {name:"MilliporeSigma",loc:"St. Louis, MO",region:"St. Louis",sector:"Pharma & biomanufacturing",work:"Life science products and bioprocessing tools used across the biopharma industry.",url:"https://www.sigmaaldrich.com"},
  {name:"Thermo Fisher Scientific",loc:"St. Louis, MO",region:"St. Louis",sector:"Pharma & biomanufacturing",work:"Contract development and manufacturing of biologic drugs.",url:"https://www.thermofisher.com"},
  {name:"Eurofins",loc:"Columbia, MO; Earth City (St. Louis), MO; Lenexa, KS",region:"Mid-Missouri",sector:"Testing & quality",work:"Food microbiology, agroscience, environmental, and clinical testing labs, including sites right in Columbia.",url:"https://www.eurofinsus.com"},
  {name:"Nestlé Purina PetCare",loc:"St. Louis, MO",region:"St. Louis",sector:"Food & nutrition",work:"Pet food process engineering, product development, and food safety.",url:"https://www.purina.com"},
  {name:"Anheuser-Busch",loc:"St. Louis, MO",region:"St. Louis",sector:"Food & nutrition",work:"Brewing, fermentation, and packaging operations.",url:"https://www.anheuser-busch.com"},
  {name:"Bunge",loc:"Chesterfield, MO",region:"St. Louis",sector:"Food & nutrition",work:"Oilseed processing, plant-based ingredients, and agribusiness supply chains.",url:"https://www.bunge.com"},
  {name:"Hill's Pet Nutrition",loc:"Topeka, KS",region:"Kansas City",sector:"Food & nutrition",work:"Nutrition research and pet food manufacturing in the Kansas City Animal Health Corridor.",url:"https://www.hillspet.com"},
  {name:"Boehringer Ingelheim Animal Health",loc:"St. Joseph, MO",region:"Kansas City",sector:"Pharma & biomanufacturing",work:"Vaccine and animal health product manufacturing.",url:"https://www.boehringer-ingelheim.com"},
  {name:"Black & Veatch",loc:"Overland Park, KS",region:"Kansas City",sector:"Water & environment",work:"Engineering design for water treatment, water resources, and energy infrastructure.",url:"https://www.bv.com"},
  {name:"Burns & McDonnell",loc:"Kansas City, MO",region:"Kansas City",sector:"Water & environment",work:"Environmental, water, and process engineering consulting.",url:"https://www.burnsmcd.com"},
  {name:"POET",loc:"Laddonia and Macon, MO; headquartered in Sioux Falls, SD",region:"Midwest",sector:"Bioenergy",work:"Corn ethanol and bioproduct biorefineries, including two plants in northeast Missouri.",url:"https://poet.com"},
  {name:"ADM",loc:"Chicago and Decatur, IL; plants across Missouri",region:"Midwest",sector:"Bioenergy",work:"Grain processing, biofuels, and food ingredient manufacturing.",url:"https://www.adm.com"},
  {name:"Cargill",loc:"Minneapolis, MN; Kansas City, MO operations",region:"Midwest",sector:"Food & nutrition",work:"Food processing, animal nutrition, and bio-based products.",url:"https://www.cargill.com"},
  {name:"Corteva Agriscience",loc:"Indianapolis, IN; Johnston, IA",region:"Midwest",sector:"Agriculture & plant biotech",work:"Seed and crop protection research and production.",url:"https://www.corteva.com"},
  {name:"General Mills",loc:"Minneapolis, MN",region:"Midwest",sector:"Food & nutrition",work:"Food process engineering, packaging, and quality.",url:"https://www.generalmills.com"},
  {name:"USDA Agricultural Research Service",loc:"Columbia, MO and nationwide",region:"Mid-Missouri",sector:"Water & environment",work:"Federal research on soil, water quality, and cropping systems.",url:"https://www.ars.usda.gov"},
  {name:"Missouri Department of Natural Resources",loc:"Jefferson City, MO",region:"Mid-Missouri",sector:"Water & environment",work:"Water quality permitting, environmental protection, and energy programs.",url:"https://dnr.mo.gov"},
  {name:"U.S. Army Corps of Engineers",loc:"Kansas City and St. Louis Districts",region:"Kansas City",sector:"Water & environment",work:"Flood control, river management, and environmental restoration.",url:"https://www.usace.army.mil"},
  {name:"U.S. EPA Region 7",loc:"Lenexa, KS",region:"Kansas City",sector:"Water & environment",work:"Federal environmental regulation for Missouri, Kansas, Iowa, and Nebraska.",url:"https://www.epa.gov"}
];
