const toggleBtn = document.querySelector(".btn");

const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", (evt) => {
  // to select the html element we can use document.documentElement
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles.map(({title, date, length,snippet}) => {
    // snippet format

// format date
const formatDate = moment(date).format('MMMM Do, YYYY ')
  return `
<!-- single post -->
<article class="post">
  <h2>${title}</h2>
  <div class="post-info">
    <span>${formatDate}</span>
    <span>${length}min read</span>
  </div>
  <p>${snippet}</p>
</article>
<!-- end of single post -->
`;
}).join('');

articlesContainer.innerHTML = articlesData







