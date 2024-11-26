"use client";

import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_TUNNEL_TOKEN;

export default function Home() {
  const [review, setReview] = useState('');
  const [probabilities, setProbabilities] = useState<Record<string, number> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_KEY}/predict`, {
        review: review,
      });
      setProbabilities(response.data.probabilities);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Erro ao conectar com a API');
    }

    setLoading(false);
  };

  return (
    <div className="text-white flex flex-col justify-center items-center h-screen gap-6">
      <h2 className="font-bold text-3xl">Probabilidade de Estrelas para Comentários</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)}
          placeholder="Digite seu comentário aqui"
          rows={5}
          cols={50}
          className="p-4 rounded-xl mx-auto outline-none bg-zinc-900 shadow-shape mb-4"
        />
        <br />
        <button
          type="submit"
          disabled={loading}
          className="bg-lime-300 text-lime-950 hover:bg-lime-400 font-bold py-1 px-4 rounded-md w-full"
        >
          {loading ? 'Processando...' : 'Verificar Probabilidade'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {probabilities && (
        <div className="mt-6 w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">Probabilidades:</h3>
          <ul>
            {Object.entries(probabilities).map(([key, value]) => (
              <li key={key} className="mb-4">
                <p className="mb-1 font-medium text-black">{key}: {value}%</p>
                <div className="relative w-full h-4 bg-zinc-900 rounded overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-4 bg-lime-300 transition-all duration-500 ease-in-out"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
