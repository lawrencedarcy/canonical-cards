

const createDiv = (blog) => {
    const div = document.createElement('div');
    // add blog details to `li`
    
    const date = moment(blog.date_gmt).format('D MMMM YYYY');

    div.innerHTML = `
    <div class="p-card">
    <p >CLOUD AND SERVER</p>
    <hr class="u-sv1">
    <img src='${blog.featured_media}'> </img>
    <div class="card_info">
    <h3 class="p-card__title"><a href='${blog.link}'>${blog.title.rendered}</a></h3>
    <p class="p-heading--6">By <a href='${blog._embedded.author[0].link}'>${blog._embedded.author[0].name}</a>, on ${date}</p>
    </div>
    <hr />
    <p>Article</p>
  </div>`;
    return div;
};

const appendToDOM = (blogs) => {
    const ul = document.querySelector('div');
    //iterate over all blogs
    blogs.map(blog => {
        ul.appendChild(createDiv(blog));
    });
};

const fetchBlogs = () => {
  axios.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
      .then(response => {
          const blogs = response.data;
          console.log(`GET list blogs`, blogs);
          appendToDOM(blogs);
      })
      .catch(error => console.error(error));
};


fetchBlogs();

