import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    logger.log('[GOT HOUSES]', res.data)

    const houses = res.data.map(housePojo => new House(housePojo))

    AppState.houses = houses
  }
}

export const housesService = new HousesService()