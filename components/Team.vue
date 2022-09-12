<script setup lang="ts">
import { teamStore } from "~/stores/team.store";
import { hashToPokemon } from '~~/utils/hash-utils';
const { hash } = useRoute();

if (hash) {
  teamStore.setPokemons(hashToPokemon(hash));
}
</script>

<template>
  <div class="team">
    <TeamMember
      v-for="pokemon in teamStore.pokemons"
      :pokemon="pokemon"
      :key="pokemon.name"
    />
  </div>
</template>

<style scoped>
.team {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffffff;
  margin: 10px;
  margin-bottom: 20px;
  padding: 20px;
  height: 210px;
}
</style>
