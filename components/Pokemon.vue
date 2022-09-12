<script setup lang="ts">
import { Pokemon } from "~/types/Pokemon";
import {
  getBackgroundColor,
  getBorderColor,
} from "~~/utils/pokemon-type-utils";
import { teamStore } from "~/stores/team.store";

const { pokemon } = defineProps<{ pokemon: Pokemon }>();
const { name, type1, type2, art, sprite } = pokemon;

const styleObject = reactive({
  background: getBackgroundColor(type1),
  border: `2px solid ${getBorderColor(type2) || getBorderColor(type1)}`,
});

const activeClass = ref('active');
</script>

<template>
  <div
    @click="teamStore.addPokemon(pokemon)"
    class="pokemon"
    :class="teamStore.isSelected(pokemon) ? activeClass : ''"
    :style="styleObject"
  >
    <img class="pokemon_picture" :src="sprite" loading="lazy" :alt="name" />
    <!-- {{name}}
    {{type}} -->
  </div>
</template>

<style scoped>
.pokemon {
  display: flex;
  cursor: pointer;
  margin: 2px;
}

.active {
  background-color: grey !important;
  border-color: black !important;
}

.active > img {
  filter: grayscale(100%);
}

.pokemon_picture {
  width: 48px;
  height: 48px;
}

.pokemon_picture:hover {
  animation: mover 0.2s infinite alternate;
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3px);
  }
}
</style>
