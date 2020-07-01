module.exports = {
     posts: [
        {id:"shkagdkjgasd",
         title:"Teste do mural", 
        description:"Descrição teste"  },
    ],

    getAll(){
        return this.posts;
    },
    
    newPost(title,description){
        this.posts.push({id: generateId(),title, description});
    }

}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}