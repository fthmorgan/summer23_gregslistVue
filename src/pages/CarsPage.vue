<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col-12">
        <h1>Cars</h1>
        <button @click="clearActiveCar()" v-if="account.id" class="btn btn-secondary fs-4" data-bs-toggle="modal"
          data-bs-target="#formModal">
          Create Car Listing
        </button>
      </div>
    </div>
    <div class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-10 m-auto mb-3">
        <!-- <div class="bg-white border border-dark rounded d-flex">
          <img class="img-fluid" :src="car.imgUrl" :alt="car.make + ' ' + car.model">
          <div>
            <h2>{{ car.year }} {{ car.make }} {{ car.model }}</h2>
          </div>
        </div> -->
        <CarCard :carProp="car" />
      </div>
    </div>
  </div>

  <!-- <CarFormModal /> -->

  <ModalComponent>
    <!-- <h1>Slots are cool</h1> -->
    <template #header>
      <span> It's the Car form, baby</span>
    </template>
    <template #body>
      <CarForm />
    </template>
  </ModalComponent>
</template>


<script>
import CarCard from '../components/CarCard.vue';
import ModalComponent from '../components/ModalComponent.vue';
import CarForm from '../components/CarForm.vue';
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js'
import { AppState } from '../AppState.js';

export default {
  setup() {
    async function getCars() {
      try {
        await carsService.getCars();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      // logger.log('CARS PAGE MOUNTED')
      getCars();
    });
    return {
      cars: computed(() => AppState.cars),
      account: computed(() => AppState.account),

      clearActiveCar() {
        const dummyCar = { engineType: 'unknown', color: '#7ed957' }
        carsService.setCarToEdit(dummyCar)
      }
    };
  },
  components: { CarCard, ModalComponent, CarForm }
}
</script>


<style lang="scss" scoped></style>