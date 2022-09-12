<script setup lang="ts">
import pokemonList from '~/data/pokemon-list.json';
</script>
  
<template>
  <div class="pokemon-list">
    <Pokemon v-for="pokemon in pokemonList" :pokemon="pokemon" />
  </div>
</template>
  

<style scoped>
  .pokemon-list {
    display: flex;
    flex-wrap: wrap;
    background-color: #FFFFFF;
    margin: 10px;
    padding: 20px;
    border-radius: 1%;
  }
</style>