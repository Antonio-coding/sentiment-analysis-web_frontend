// pages/api/analyze-comments.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Sentiment from "sentiment";
import axios from "axios";
import { JSDOM } from "jsdom";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { siteUrl, selector } = req.body;

    if (!siteUrl || !selector) {
        return res.status(400).json({ error: "URL ou seletor não fornecido." });
    }

    try {
        // Busca o conteúdo da página
        const response = await axios.get(siteUrl);
        const dom = new JSDOM(response.data);
        const comments = Array.from(dom.window.document.querySelectorAll(selector)).map(
            (el) => el.textContent || ""
        );

        // Analisa cada comentário
        const sentiment = new Sentiment();
        const results = comments.map((comment) => ({
            comment,
            score: sentiment.analyze(comment).score,
        }));

        res.status(200).json({ results });
    } catch (error) {
        console.error("Erro ao analisar comentários:", error);
        res.status(500).json({ error: "Erro ao analisar a página." });
    }
}
