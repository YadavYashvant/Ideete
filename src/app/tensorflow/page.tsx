// pages/index.tsx
"use client"
import { useState, useEffect, ChangeEvent } from 'react';
import Head from 'next/head';
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

export default function Home() {
  const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);
  const [inputText, setInputText] = useState<string>('');
  const [embeddings, setEmbeddings] = useState<number[][] | null>(null);

  useEffect(() => {
    async function loadModel() {
      const model = await use.load();
      setModel(model);
    }

    loadModel();

    // Clean up function to dispose the model when unmounting
    return () => {
      // Check if the model exists before disposing
      if (model) {
        // There's no dispose() method in UniversalSentenceEncoder,
        // so we don't need to dispose it.
        // tf.dispose() can be used to dispose tf.Tensor objects if needed.
      }
    };
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleEmbeddings = async () => {
    if (model && inputText.trim() !== '') {
      const embeddings = await model.embed([inputText]);
      setEmbeddings(embeddings.arraySync());
    }
  };

  return (
    <div>
      <Head>
        <title>USE Model Demo</title>
        <meta name="description" content="Demo of Universal Sentence Encoder model in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Universal Sentence Encoder (USE) Model Demo</h1>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleEmbeddings}>Get Embeddings</button>
        <div>
          <h2>Embeddings:</h2>
          <pre>{JSON.stringify(embeddings, null, 2)}</pre>
        </div>
      </main>

      <footer>
        <p>Powered by TensorFlow.js and Next.js</p>
      </footer>
    </div>
  );
}
