<template>
  <div class="bg-white border border-dark rounded d-flex">
    <img class="img-fluid car-img rounded-start" :src="carProp.imgUrl" :alt="carProp.make + ' ' + carProp.model">
    <div class="p-3">
      <div class="mb-3">
        <h2>{{ carProp.year }} {{ carProp.make }} {{ carProp.model }}</h2>
        <p>{{ carProp.description }}</p>
        <h3>Listed by: {{ carProp.creator.name }} on {{ carProp.createdAt.toLocaleDateString() }}</h3>
        <img class="creator-picture" :src="carProp.creator.picture" :alt="carProp.creator.name">
      </div>
      <div v-if="account.id == carProp.creatorId">

        <button @click="removeCar()" class="btn btn-danger" title="Delete this car" type="button">
          <i class="mdi mdi-delete"></i>
        </button>

        <button @click="setCarToEdit()" class="btn btn-info ms-3" title="Edit car" type="button" data-bs-toggle="modal"
          data-bs-target="#formModal">
          <i class="mdi mdi-pencil"></i>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Car } from '../models/Car.js';
import { carsService } from '../services/CarsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    carProp: { type: Car, required: true }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),


      async removeCar() {
        try {
          const wantsToRemoveCar = await Pop.confirm(`Are you sure you want to delete the ${props.carProp.make} ${props.carProp.model}?`)

          if (!wantsToRemoveCar) {
            return
          }

          const carId = props.carProp.id
          // logger.log(carId)
          await carsService.removeCar(carId)
        } catch (error) {
          Pop.error(error.message)
        }
      },

      setCarToEdit() {
        const carToEdit = props.carProp

        carsService.setCarToEdit(carToEdit)
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.car-img {
  width: 40%;
  object-fit: cover;
  object-position: center;
}

.creator-picture {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
}
</style>