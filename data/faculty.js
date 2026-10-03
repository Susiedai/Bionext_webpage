/* ================================================================
   FACULTY
   One entry per faculty member. The site sorts them by last name automatically.
   - slug: short id used in web addresses and photo names (images/<slug>.jpg)
   - intro: 3 sentences shown on the profile page
   - research (optional): list of ["Area title", "Description"] cards
   - links: list of ["Button label", "https://..."]; the first one is used on the faculty card
   - photo: put the file in the images folder, named by last name (Dai.jpg, Wan.png, ...)
     or add image:"images/file-name.jpg" to the entry to use a specific file
   Tip: copy an existing entry, paste it, and change the words. Keep the quotes and commas.
   ================================================================ */

const PROF = "https://engineering.missouri.edu/faculty/";
const faculty = [
  {slug:"dai",name:"Susie Dai",title:"Professor",areas:["Synthetic biology","Materials engineering","Enzyme engineering","Environmental remediation"],
   short:"Integrates synthetic biology, materials science, and enzyme engineering to clean up pollutants like PFAS and microplastics and turn CO2 and waste into sustainable products.",
   intro:["Susie Dai is a professor of chemical and biomedical engineering and a principal investigator at the Bond Life Sciences Center, where her lab integrates synthetic biology, materials science, chemistry, and engineering for sustainable synthesis and environmental remediation.",
          "Her group engineers living fungi, algae, and bacteria, together with enzymes and biomaterials, to remove persistent contaminants such as PFAS and microplastics, and couples electrochemistry with synthetic biology to convert carbon dioxide into bioplastics and fuels.",
          "Before moving her lab to Mizzou in 2024, she was on the faculty at Texas A&M University and held leadership roles in public health laboratories, including associate director of the Iowa State Hygienic Laboratory. She has published more than 60 papers in journals including Joule, Chem, Nature Communications, and PNAS, and serves as associate director of the NSF CURB Engineering Research Center."],
   research:[
     ["Synthetic biology","The lab combines electrocatalysis with engineered microbes to go beyond the limits of natural photosynthesis, turning carbon dioxide into high-value products. Highlights include converting CO2 into bioplastics (Chem, 2022) and into biodiesel (Joule, 2024), and engineering cyanobacteria that capture and upcycle microplastics (Nature Communications, 2025)."],
     ["Materials engineering","Dai's group designs bio-based materials and pairs them with living systems. Examples include a fungus and nano-framework system for breaking down PFAS (Nature Communications, 2022), degradable bioplastic films (Nature Communications, 2025), and, with Joshua Yuan at WashU, lignin designed for renewable carbon fiber and green manufacturing."],
     ["Enzyme engineering","Using proteomics and studies of protein structure and dynamics, the lab examines how enzymes and proteins function and maps the pathways that degrade contaminants. These insights guide the design of more efficient biocatalysts for remediation and sustainable synthesis."],
     ["Environmental remediation and health","Engineered fungi, algae, and bacteria are used to remove emerging contaminants such as PFAS and microplastics, as well as excess nitrogen and phosphate. The lab also studies human exposure to pesticides such as neonicotinoids, bisphenols such as BPA, and heavy metals, and runs a community arsenic awareness campaign in South Texas."]
   ],
   openings:"The Dai Lab has openings for postdocs and graduate students with backgrounds in microbiology, molecular biology, synthetic biology, biochemistry, electrochemistry, or materials science.",
   focus:["Synthetic biology","Materials engineering","Enzyme engineering","Environmental remediation and health"],
   education:["Postdoctoral training, The Scripps Research Institute and Oak Ridge National Laboratory","PhD in Chemistry, Duke University","BS in Chemistry, Fudan University"],
   email:"sydai@missouri.edu",phone:"573-882-0619",office:"124 Bond Life Sciences Center",
   links:[["Dai Lab","https://dai-lab.com"],["Research","https://www.dai-lab.com/research.html"],["Publications","https://www.dai-lab.com/publications.html"]]},
  {slug:"aloysius",name:"Noel Aloysius",title:"Associate Professor",areas:["Water resources","Hydroclimatology"],
   short:"Models water across watersheds and regions to understand how climate and land use shape water and food security.",
   intro:["Noel Aloysius is an associate professor of chemical and biomedical engineering with a joint appointment in the School of Natural Resources.",
          "He studies hydroclimatology, building models that show how water moves through watersheds and entire regions and how environmental change affects it.",
          "His work links water and food security, agricultural land and water management, coupled human and natural systems, and remote sensing of natural resources."],
   focus:["Human-natural systems modeling","Hydraulics and hydrology","Water resource management"],
   education:["PhD, Yale University","MS, University of North Dakota","BA, University of Peradeniya"],
   email:"aloysiusn@missouri.edu",phone:"573-882-7328",office:"227 Agricultural Engineering Building",
   links:[["Mizzou profile",PROF+"noel-aloysius/"],["Google Scholar","https://scholar.google.com/citations?user=aZ6Qd1gAAAAJ"]]},
  {slug:"krishnaswamy",name:"Kiruba Krishnaswamy",title:"Associate Professor",areas:["Food engineering","Food security"],
   short:"Leads the FEAST program, creating sustainable food technologies for maternal and child nutrition.",
   intro:["Kiruba Krishnaswamy is an associate professor of chemical and biomedical engineering with a joint appointment in the Division of Food, Nutrition and Exercise Sciences, where she holds the MU Pillars of Pursuit position in food sustainability.",
          "She leads the Food Engineering and Sustainable Technologies (FEAST) research program, which takes on the connected challenges of food and nutrition security.",
          "Her team develops food technologies and fortified foods aimed at maternal and child health, working with industry and NGOs in the United States, Canada, India, and Kenya."],
   focus:["Food fortification","Innovative food technologies","Sustainable food process engineering"],
   education:["PhD, McGill University","MS, Tamil Nadu Agricultural University and McGill University (Commonwealth Scholar)","BS, Tamil Nadu Agricultural University"],
   email:"krishnaswamyk@missouri.edu",phone:"",office:"244 Agricultural Engineering Building",
   links:[["Mizzou profile",PROF+"kiruba-krishnaswamy/"],["FEAST Lab","http://www.feastlabs.org"],["Google Scholar","https://scholar.google.com/citations?user=B_q0BUIAAAAJ"]]},
  {slug:"yang",name:"Zhongyu Yang",title:"Associate Professor and Director of Undergraduate Studies",areas:["Biomolecular engineering","Biomaterials"],
   short:"Pairs proteins and enzymes with nanomaterials to build biohybrid systems for catalysis, sensing, and delivery.",
   intro:["Zhongyu Yang is an associate professor of chemical and biomedical engineering and directs undergraduate studies for the biological and biomedical engineering programs.",
          "His group combines proteins, enzymes, and peptides with nanoscale materials such as metal-organic and covalent organic frameworks, using EPR spectroscopy to see how confinement changes their structure and behavior.",
          "Those insights feed into biohybrid systems for programmable biocatalysis, sensing, biomolecule delivery, and sustainable separations and resource recovery."],
   focus:["Biohybrid materials for biocatalysis, sensing, and delivery","Biomolecular nanoconfinement and EPR biophysics","Sustainable separations and resource recovery"],
   education:["Postdoc, University of California, Los Angeles","PhD, University of Pittsburgh","BE, University of Science and Technology of China"],
   email:"zhongyu.yang@missouri.edu",phone:"573-882-7684",office:"W2029 Lafferre Hall",
   links:[["Mizzou profile",PROF+"zhongyu-yang/"],["Yang Group","https://sites.google.com/view/yang-group-at-ndsu-2/home?pli=1&authuser=0"],["Google Scholar","https://scholar.google.com/citations?user=C74QDdAAAAAJ"]]},
  {slug:"wan",name:"Caixia \u201cEllen\u201d Wan",title:"Associate Professor",areas:["Bioprocessing","Biofuels"],
   short:"Develops biochemical processes that convert biomass into biofuels and other valuable bioproducts.",
   intro:["Caixia \u201cEllen\u201d Wan is an associate professor of chemical and biomedical engineering who develops technologies for converting biomass into value-added products.",
          "Her research spans biocatalyst development, metabolic engineering, bioreactor design, and bioprocess optimization for sustainable bioenergy and biofuels.",
          "She also designs integrated biorefinery systems that efficiently turn biomass into advanced biofuels along with useful co-products."],
   focus:["Biocatalyst development and biocatalysis","Biofuels and bioproducts","Bioprocess optimization"],
   education:["PhD, The Ohio State University"],
   email:"wanca@missouri.edu",phone:"573-884-7882",office:"W1016E Lafferre Hall",
   links:[["Mizzou profile",PROF+"caixia-ellen-wan/"],["Google Scholar","https://scholar.google.com/citations?user=yU0MZUQAAAAJ"]]},
  {slug:"somavat",name:"Pavel Somavat",title:"Assistant Professor",areas:["Food engineering","Food processing"],
   short:"Studies corn processing, natural food colors, and how processing affects bioactive compounds in food.",
   intro:["Pavel Somavat is an assistant professor of chemical and biomedical engineering with a joint appointment in Food Science in the College of Agriculture, Food and Natural Resources.",
          "His research centers on corn processing and on preparing natural food colors that stay stable.",
          "He also studies how processing affects bioactive compounds in food, applies induction heating to food processing, and uses process simulation to improve operations."],
   focus:["Corn processing","Preparation and stability of natural food colors","Induction heating and process simulation"],
   education:["PhD in Agricultural and Biological Engineering, University of Illinois Urbana-Champaign","MS in Information and Communications Engineering, Technische Hochschule Mittelhessen","BE in Electronics and Communication Engineering, Maharshi Dayanand University"],
   email:"psbvb@missouri.edu",phone:"573-882-4533",office:"236 Agricultural Engineering Building",
   links:[["Mizzou profile",PROF+"pavel-somavat/"],["Google Scholar","https://scholar.google.com/citations?user=AZSjzGwAAAAJ"]]}
];
