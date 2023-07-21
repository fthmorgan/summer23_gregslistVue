<template>
<div class="container-fluid">
  <div class="row mb-3">
    <div class="col-12">
      <h1>Houses</h1>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
    </div>
  </div>
  <div class="row">
    <div v-for="house in houses" :key="house.id" class="col-md-10 m-auto mb-3">
      <HouseCard :houseProp="house" />
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</template>






<script>
import HouseCard from "../components/HouseCard.vue";
import { onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import { computed } from "vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            logger.log("[HOUSES PAGE MOUNTED]");
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses),
        };
    },
    components: { HouseCard }
}
</script>


<style lang="scss" scoped>
</style>