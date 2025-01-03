"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";


type Post = {
  id: number;
  title: string;
  body: string;
};

const AboutPage: React.FC = () => {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchData();
  }, [])
  


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">API Showcase</h1>
      {/* <button
        onClick={fetchData}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
      >
        Fetch Data
      </button> */}

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {data && (
        <div>
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
