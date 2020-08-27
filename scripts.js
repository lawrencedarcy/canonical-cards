const fetchBlogs = () => {
  axios.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
      .then(response => {
          const users = response.data;
          console.log(`GET list blogs`, users);
      })
      .catch(error => console.error(error));
};

fetchBlogs();