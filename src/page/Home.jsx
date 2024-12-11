import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ArticleCard from '../components/ArticleCard';
import { fetchArticles } from '../services/articleService';
import Layout from '../Layout';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await fetchArticles(query);
    setArticles(results);
    setLoading(false);
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.headline.main}
              author={article.byline?.original}
              date={article.pub_date}
              url={article.web_url}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
