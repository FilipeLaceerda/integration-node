// scripts que faz a chamada no backend, cadastrando os post que foi colocado no frontend
// atualizar o mural de avisos

document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts(){
    fetch("http://192.168.0.104:3000/api/all").then(res =>{
        return res.json()
    }).then(json => {
        
        let postsElement = '';

        let posts = JSON.parse(json);
        posts.forEach(post => {
            let postElement = `<div id=${post.id} class="card mb-4">
            <div class="card-header">
                <h5 class="card-title">${post.title}</h5>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>
        </div>`

        postsElement += postElement;
        })

        document.getElementById("posts").innerHTML = postsElement;
    })
}

function newPost(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let post = {title, description};

    const options = {method: "POST", 
                     headers: new Headers({'content-type': 'application/json'}),
                     body: JSON.stringify(post)}


    fetch("http://192.168.0.104:3000/api/new", options).then(res => {
        console.log(res);
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    })
}
