<script setup lang="ts">
import { Pokemon } from "~/types/Pokemon";
import {
  getBackgroundColor,
  getBorderColor,
} from "~~/utils/pokemon-type-utils";
import { teamStore } from '~/stores/team.store'


const { pokemon } = defineProps<{ pokemon: Pokemon }>();
const { name, type1, type2, art } = pokemon;

const styleObject = reactive({
  background: getBackgroundColor(type1),
  border: `5px solid ${getBorderColor(type2) || getBorderColor(type1)}`,
});
</script>

<template>
  <div @click="teamStore.removePokemon(pokemon)" class="member">
    <div class="member-img" :style="styleObject">
      <img :src="art" loading="lazy" :alt="name" />
    </div>
    <span class="member-name">{{ name }}</span>
  </div>
</template>

<style scoped>
.member {
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
}

.member-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
.member-img > img {
  width: 150px;
  height: 150px;
}

.member-name {
  display: inline-block;
  padding-top: 10px;
  font-size: 1.2rem;
  font-weight: 800;
}
</style>
