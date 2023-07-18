<template>
  <!-- for now removed
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  -->
  <router-view/>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #fff;
  }
  
  body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #302338;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
