<template>
  <div v-for="post in posts" :key="post" class="post">

     
    <h1>{{post.title}}</h1>
        
   <img :src="post.thumbnailUrl" width="200" height="200" />
       
      
        
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  data(){
        return{
            posts: []
        }
      },

      created() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(response => {
                // JSON responses are automatically parsed.
               this.posts = response.data
            })
            .catch(e => {
                this.errors.push(e)
            });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
