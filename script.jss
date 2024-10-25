// Array of news articles
const newsArticles = [
  {
    title: "Stock Market Update",
    date: "October 24, 2024",
    content: "Stock markets show a steady rise as companies post strong earnings..."
  },
  {
    title: "Economic Growth in Q4",
    date: "October 23, 2024",
    content: "Economists predict a 3% growth in GDP due to increased consumer spending..."
  }
];

// Dynamically display news
const newsContainer = document.getElementById("newsContainer");

newsArticles.forEach(article => {
  const newsItem = document.createElement("div");
  newsItem.classList.add("newsItem");

  newsItem.innerHTML = `
    <h3>${article.title}</h3>
    <p><small>${article.date}</small></p>
    <p>${article.content}</p>
  `;

  newsContainer.appendChild(newsItem);
});
