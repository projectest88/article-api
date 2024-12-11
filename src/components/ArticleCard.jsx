import React from 'react';

const ArticleCard = ({ title, author, date, url }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-semibold">By:</span> {author ? author : 'Unknown'} |{' '}
          <span className="font-semibold">Published on:</span> {new Date(date).toLocaleDateString()}
        </p>
        <div className="mt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:before:bg-black p-2 rounded-sm relative h-[50px] w-40 overflow-hidden border border-black bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full"
          >
            <span class="relative z-10">Read More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
