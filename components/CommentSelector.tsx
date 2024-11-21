// components/CommentSelector.tsx
import React, { useState } from "react";
import axios from "axios";

interface CommentSelectorProps {
    siteUrl: string;
    selector: string;
    onCommentsFetched: (comments: string[]) => void;
}

export const CommentSelector: React.FC<CommentSelectorProps> = ({ siteUrl, selector, onCommentsFetched }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchComments = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(siteUrl);
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.data, "text/html");
            const elements = Array.from(doc.querySelectorAll(selector));
            const comments = elements.map((el) => el.textContent || "");

            onCommentsFetched(comments);
        } catch (err) {
            console.error("Erro ao buscar comentários:", err);
            setError("Não foi possível buscar os comentários.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={fetchComments} disabled={loading}>
                {loading ? "Carregando..." : "Buscar Comentários"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};
