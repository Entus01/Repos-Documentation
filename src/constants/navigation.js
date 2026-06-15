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
    { id: 'readme', name: "README.md", path: "/readme", category: "Introduction", document: ReadmeDocument },
    { id: 'glossary', name: "glossary.md", path: "/glossary", category: "Introduction", document: GlossaryDocument },
    { id: 'rules', name: "rules.md", path: "/rules", category: "Standards", document: RulesDocument },
    { id: 'structure', name: "structure.md", path: "/structure", category: "Standards", document: StructureDocument },
    { id: 'architecture', name: "architecture.md", path: "/architecture", category: "Project Design", document: ArchitectureDocument },
    { id: 'decisions', name: "decisions.md", path: "/decisions", category: "Project Management", document: DecisionsDocument },
    { id: 'deployment', name: "deployment.md", path: "/deployment", category: "Project Design", document: DeploymentDocument },
    { id: 'roadmap', name: "roadmap.md", path: "/roadmap", category: "Project Management", document: RoadmapDocument },
    { id: 'changelog', name: "changelog.md", path: "/changelog", category: "Project Management", document: ChangelogDocument },
];

export const CATEGORIES = [
    { id: 1, name: "Introduction" },
    { id: 2, name: "Standards" },
    { id: 3, name: "Project Design" },
    { id: 4, name: "Project Management" }
];