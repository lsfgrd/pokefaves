<script setup lang="ts">
import { teamStore } from '~/stores/team.store';
</script>

<template>
  <Team />
  <PokemonList />
</template>

<style>
body {
  font-family: 'Roboto';
  background-image: url('assets/body_bg.png');
}
</style>