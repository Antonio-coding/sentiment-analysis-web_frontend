// pages/api/analyze-comments.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Sentiment from "sentiment";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { comments } = req.body;

    if (!comments || !Array.isArray(comments)) {
        return res.status(400).json({ error: "Comentários não fornecidos ou inválidos." });
    }

    try {
        const sentiment = new Sentiment();
        const results = comments.map((comment) => ({
            comment,
            score: sentiment.analyze(comment).score,
        }));

        res.status(200).json({ results });
    } catch (error) {
        console.error("Erro ao analisar comentários:", error);
        res.status(500).json({ error: "Erro ao processar os comentários." });
    }
}
