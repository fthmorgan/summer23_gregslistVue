<template>
      <div class="bg-white border border-dark rounded d-flex">
      <img class="img-fluid house-img rounded-start" :src="houseProp.imgUrl" :alt="houseProp.description">
      <div>
        <h2>{{ houseProp.price }}</h2>
        <p>{{ houseProp.description }}</p>
      </div>
    </div>
</template>


<script>
import { House } from "../models/House.js";

export default {
  props: { 
    houseProp: { type: House, required: true }
  },
  setup(){
    
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
.house-img {
  width: 40%;
  object-fit: cover;
  object-position: center;
}
</style>