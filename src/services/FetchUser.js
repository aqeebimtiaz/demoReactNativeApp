export const getUserInfo = (name) => {
    let username = name.toLowerCase().trim();
    // const URL = `https://api.github.com/users/${username}`;
    const URL = 'https://www.omdbapi.com/?t='+username+'&apikey=bc4f644c';
    // console.log(name);
    // console.log(username);
    // console.log(URL);
    // const URL = `https://jsonplaceholder.typicode.com/posts/1`
    return fetch(URL)
            .then((res) => res.json())
            .then(function(json){
              return {
                json
                // title: json.Title,
                // body: json.body
              }
            })
            .catch(function(error){
              console.log(error.message);
              throw error;
            })
            ;
}
