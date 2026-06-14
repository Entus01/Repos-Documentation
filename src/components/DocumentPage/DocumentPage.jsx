import { NAV_ITEMS } from "../../constants/navigation.js";
import "./DocumentPage.css";

export default function DocumentPage({ documentId }) {
    const documentItem = NAV_ITEMS.find(
        (item) => item.id === documentId
    );

    if (!documentItem) {
        return <div>Document not found</div>;
    }

    const Document = documentItem.document;

    return (
        <div className="document-page">
            <h1>{documentItem.name}</h1>
            <Document />
        </div>
    );
}