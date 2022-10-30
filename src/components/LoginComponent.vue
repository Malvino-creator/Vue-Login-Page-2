<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
         v-model="email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>

      <button v-on:click="greet"  type="submit" id="login" class="btn btn-primary mt-2">
        Login
      </button>
    </form>
  </div>
</template>

<script>


export default {
  name: "LoginComponent",
  methods: {
    greet: function () {
        const defaultEmail = "malvinopondo@gmail.com";
        const defaultPass = "Mark254"
      var email = document.getElementById('email').value
      var password = document.getElementById('password').value

      if((defaultEmail == email) && (defaultPass == password) ){

        alert('correct details')
        this.$router.push('/apidata')
      }else{
        alert("wrong details")
      }
      
    
    }
  }
};



    
</script>
