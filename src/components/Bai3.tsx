import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

interface Article {
  id: number;
  title: string;
  image_url: string;
  summary: string;
  url: string;
  published_at: string;
}

export default function Bai3() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results))
      .catch((err) => console.error("Lỗi tải dữ liệu:", err));
  }, []);

  return (
    <div className="bai3-container">
      <h2>Bài 3: Ứng dụng xem tin tức</h2>
      <div className="news-list">
        {articles.map((article) => (
          <div key={article.id} className="news-item">
            <img src={article.image_url} alt={article.title} className="news-image" />
            <div className="news-content">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Xem tin gốc
              </a>
              <p className="date">
                Ngày đăng:{" "}
                {new Date(article.published_at).toLocaleDateString("vi-VN")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
