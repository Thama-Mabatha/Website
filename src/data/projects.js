import universalImage from "../Assets/Projects/Universal.png";
import ecommerceImage from "../Assets/Projects/commerce.jpeg";
import weatherImage from "../Assets/Projects/Weather.png";

const projects = [
  {
    slug: "nyimbo-dza-vhatendi",
    name: "Nyimbo dza Vhatendi",
    category: "Hymnal application · Frontend product",
    shortSummary:
      "An offline-first Tshivenḓa hymnal and personal sermon archive designed around calm, focused mobile worship.",
    overview:
      "Nyimbo dza Vhatendi modernises access to a traditional hymnal while keeping the reading experience respectful and simple. The application combines a bundled hymn library with private, structured sermon notes that remain useful even without a network connection.",
    stack: ["React", "TypeScript", "Vite", "IndexedDB", "Supabase", "PWA"],
    image: null,
    visual: "hymnal",
    imageAlt: "Illustration of the Nyimbo dza Vhatendi hymnal interface",
    features: [
      "Searchable bundled Tshivenḓa hymn library",
      "Direct hymn navigation, favourites and recent hymns",
      "Reader settings, focus mode and sharing",
      "Local-first sermon notes with scripture and hymn relationships",
      "Installable PWA with optional Supabase note sync",
    ],
    architecture: [
      "A build-time importer converts the supplied hymnal document into structured JSON.",
      "The React interface reads the hymn library locally so core use does not require a connection.",
      "Preferences use localStorage, while sermon notes are written to IndexedDB before optional Supabase sync.",
    ],
    challenge:
      "Physical and PDF hymn books can be difficult to search during worship, while sermon notes are often disconnected from the hymns and scripture that inspired them.",
    solution:
      "The application brings quick hymn retrieval, comfortable reading and private note organisation into one mobile-first experience, with local storage treated as the dependable first layer.",
    outcome:
      "A working local product with imported hymn data, tested search and scripture utilities, responsive reading views and an optional sync path. Public deployment details are not currently provided.",
    lessons:
      "A useful offline experience depends on data ownership and failure behaviour as much as interface polish. Local-first design made those decisions part of the product from the beginning.",
    github: null,
    demo: null,
    featured: true,
    status: "Active local project",
    ownership: "Local source verified",
    accent: "blue",
  },
  {
    slug: "multilingual-gbv-detection",
    name: "Multilingual GBV Detection",
    category: "Responsible AI · Moderation system",
    shortSummary:
      "A multilingual classification and moderation prototype for exploring online gender-based violence across South African language contexts.",
    overview:
      "The project connects language-aware classification research to practical moderation workflows. It includes a simulated community feed, single and batch analysis, human-review queues, incident reporting, dataset administration and model comparison without presenting experimental work as production-ready.",
    stack: ["React", "Vite", "Express", "SQLite", "Python", "FastAPI", "Scikit-learn"],
    image: null,
    visual: "gbv",
    imageAlt: "Illustration of the multilingual GBV moderation workflow",
    features: [
      "Language routes for English, isiZulu and Sotho–Tswana work",
      "Single-comment and batch classification interfaces",
      "Moderator review, alerts and incident-reporting workflows",
      "Dataset upload, model management and research comparison areas",
      "Simulated community feed with reporting and human-review states",
    ],
    architecture: [
      "A React frontend separates public demonstration, moderator and administrator experiences.",
      "An Express service handles authentication, workflow data and SQLite persistence.",
      "A Python FastAPI service supports classical and transformer-based experimentation and inference workflows.",
    ],
    challenge:
      "Online harm is shaped by language and context, while automated classification still needs careful routing, transparent uncertainty and human moderation.",
    solution:
      "The prototype keeps research comparison separate from operational moderation, routes supported languages deliberately and preserves human-review steps for sensitive decisions.",
    outcome:
      "A substantial local prototype covering classification, moderation, reporting, model and dataset workflows. It remains an experimental system; no production deployment or performance statistic is claimed.",
    lessons:
      "Responsible moderation tooling needs more than a model response. Provenance, language routing, review states and clear boundaries between research and operational evidence all shape the final experience.",
    github: null,
    demo: null,
    featured: true,
    status: "Research prototype",
    ownership: "Local source verified",
    accent: "pink",
  },
  {
    slug: "lead-conversion-prediction",
    name: "Lead Conversion Prediction",
    category: "Machine learning",
    shortSummary:
      "A hackathon classification workflow for predicting dealership lead conversion across imbalanced data.",
    overview:
      "The project explores how multiple classification approaches can support lead-conversion decisions. The repository contains the preprocessing and experimentation notebook, with model comparison and ensemble exploration at the centre of the work.",
    stack: ["Python", "Pandas", "Scikit-learn", "CatBoost", "XGBoost", "Jupyter"],
    image: null,
    visual: "ml",
    imageAlt: "Illustrative lead-conversion model workflow",
    features: [
      "Feature preprocessing and categorical-data handling",
      "Comparison of tree-based and classification models",
      "Evaluation with PR-AUC, log loss and F1",
      "Blended and ensemble model experimentation",
    ],
    architecture: [
      "Lead data is prepared and encoded in a repeatable notebook workflow.",
      "Candidate models are trained and compared using imbalance-aware metrics.",
      "Ensemble experiments combine model outputs for further evaluation.",
    ],
    challenge:
      "Lead-conversion data can make headline accuracy misleading when the target classes are unevenly represented.",
    solution:
      "The work evaluates models with precision-recall-oriented measures and log loss, keeping model comparison focused on useful classification behaviour.",
    outcome:
      "A documented experimentation workflow and a clear basis for comparing several classification strategies. No production deployment or business-impact metric is claimed.",
    lessons:
      "Model selection depends on evaluation design as much as algorithm choice, particularly when class balance affects the meaning of accuracy.",
    github: "https://github.com/Thama-Mabatha/Machine-Learning",
    demo: null,
    featured: false,
    status: "Hackathon project",
    ownership: "Owned repository",
    accent: "blue",
  },
  {
    slug: "universal-admin-platform",
    name: "Universal Admin Platform",
    category: "Multi-tenant web platform",
    shortSummary:
      "A reusable administration interface for managing client universes, applications, users and content.",
    overview:
      "The platform organises multiple client environments—described as universes—inside one administration experience. Its interface supports reusable management flows rather than building a separate admin product for every client.",
    stack: ["React", "JavaScript", "C#", "MongoDB", "Azure Functions"],
    image: universalImage,
    imageAlt:
      "Universal Admin Platform showing a retail universe, applications and administrator management",
    features: [
      "Universe and application management",
      "Reusable navigation and record-management patterns",
      "User and administrator workflows",
      "Dynamic forms for app-specific content",
    ],
    architecture: [
      "A React interface provides the shared administration shell.",
      "Universe-level navigation separates client contexts and records.",
      "The portfolio CV documents C#, MongoDB and Azure Functions in the wider solution stack.",
    ],
    challenge:
      "A multi-client administration product needs common interaction patterns without erasing the differences between each client application.",
    solution:
      "Reusable navigation, forms and record views create a consistent shell while universe and app contexts keep management flows separated.",
    outcome:
      "A working administration interface with visible flows for universes, applications, users, settings and records. No production-scale metric is claimed.",
    lessons:
      "Shared administration products benefit from strong information architecture and deliberate boundaries between global and client-specific state.",
    github: "https://github.com/masindithe/universal-admin",
    demo: null,
    featured: false,
    status: "Collaborative project",
    ownership: "Contributor access verified",
    accent: "pink",
  },
  {
    slug: "quickkart-ecommerce",
    name: "QuickKart E-Commerce",
    category: "Three-tier web application",
    shortSummary:
      "A university team project combining grocery shopping, recipe discovery and one-click ingredient selection.",
    overview:
      "QuickKart was built as a three-tier learning project. Beyond a standard product catalogue and cart, the application lets shoppers select a recipe and add its required ingredients to their basket.",
    stack: ["React", "JavaScript", "CSS", "C#", "WCF", "SQL"],
    image: ecommerceImage,
    imageAlt: "QuickKart storefront showing a fitness product landing page",
    features: [
      "Customer product catalogue and cart",
      "Recipe discovery and ingredient-to-cart flow",
      "Invoices and checkout-related views",
      "Manager dashboard and product administration",
    ],
    architecture: [
      "A React frontend handles the customer and manager interfaces.",
      "A C# WCF service provides the application service layer.",
      "SQL-backed data supports products, recipes, users and transactions.",
    ],
    challenge:
      "The team needed to coordinate customer journeys, manager workflows and service-backed data within a university group project.",
    solution:
      "The application separates interface, service and data responsibilities, with role-specific flows and reusable React views.",
    outcome:
      "A documented three-tier application covering shopping, recipe, invoice and manager-management journeys. The repository credits Thama as one of four developers.",
    lessons:
      "Clear interface contracts and role boundaries are essential when a team develops a multi-surface application in parallel.",
    github: "https://github.com/TebohoMajake/QuickKart_Website",
    demo: null,
    featured: false,
    status: "University team project",
    ownership: "Team credit verified",
    accent: "blue",
  },
  {
    slug: "weather-app",
    name: "Weather App",
    category: "Frontend application",
    shortSummary:
      "A focused weather interface that retrieves and presents location-based conditions.",
    overview:
      "A compact frontend project centred on asynchronous API data, responsive presentation and clear formatting of current weather conditions.",
    stack: ["JavaScript", "HTML", "CSS", "Weather API"],
    image: weatherImage,
    imageAlt: "Weather application showing conditions for New York",
    features: [
      "City-based weather search",
      "Asynchronous API requests",
      "Condition, humidity and wind presentation",
      "Responsive single-view interface",
    ],
    architecture: [
      "A browser interface captures a requested city.",
      "Asynchronous JavaScript retrieves weather data from an external API.",
      "The response is formatted into a concise current-conditions view.",
    ],
    challenge:
      "External weather data needs loading, error and formatting decisions before it becomes useful interface content.",
    solution:
      "The project keeps the interaction narrow: search for a city, retrieve its conditions and present the key values in one responsive panel.",
    outcome:
      "A deployed learning project with a working public demo recorded in the portfolio. The former GitHub repository URL is no longer publicly available.",
    lessons:
      "Even a small API project benefits from deliberate data formatting and a clear primary interaction.",
    github: null,
    demo: "https://animated-elf-5a235f.netlify.app",
    featured: false,
    status: "Deployed learning project",
    ownership: "Portfolio record",
    accent: "pink",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const additionalProjects = projects.filter((project) => !project.featured);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export default projects;
