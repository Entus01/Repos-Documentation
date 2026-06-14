import ReadmeDocument from "../pages/ReadMe/ReadMeDocument.jsx";
import GlossaryDocument from "../pages/Glossary/GlossaryDocument.jsx";
import RulesDocument from "../pages/Rules/RulesDocument.jsx";
import StructureDocument from "../pages/Structure/StructureDocument.jsx";
import ArchitectureDocument from "../pages/Architecture/ArchitectureDocument.jsx";
import DecisionsDocument from "../pages/Decisions/DecisionsDocument.jsx";
import DeploymentDocument from "../pages/Deployment/DeploymentDocument.jsx";
import RoadmapDocument from "../pages/Roadmap/RoadmapDocument.jsx";
import ChangelogDocument from "../pages/Changelog/ChangelogDocument.jsx";

export const NAV_ITEMS = [
    { id: 'readme', name: "README", path: "/readme", category: "Introduction", document: ReadmeDocument },
    { id: 'glossary', name: "Glossary", path: "/glossary", category: "Introduction", document: GlossaryDocument },
    { id: 'rules', name: "Rules", path: "/rules", category: "Standards", document: RulesDocument },
    { id: 'structure', name: "Structure", path: "/structure", category: "Standards", document: StructureDocument },
    { id: 'architecture', name: "Architecture", path: "/architecture", category: "Project Design", document: ArchitectureDocument },
    { id: 'decisions', name: "Decisions", path: "/decisions", category: "Project Management", document: DecisionsDocument },
    { id: 'deployment', name: "Deployment", path: "/deployment", category: "Project Design", document: DeploymentDocument },
    { id: 'roadmap', name: "Roadmap", path: "/roadmap", category: "Project Management", document: RoadmapDocument },
    { id: 'changelog', name: "Changelog", path: "/changelog", category: "Project Management", document: ChangelogDocument },
];

export const CATEGORIES = [
    { id: 1, name: "Introduction" },
    { id: 2, name: "Standards" },
    { id: 3, name: "Project Design" },
    { id: 4, name: "Project Management" }
];