import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CarsService {

  async getCars() {
    const res = await api.get('api/cars')
    logger.log('[GOT CARS]', res.data)
    // console.table(res.data)

    const cars = res.data.map(carPojo => new Car(carPojo))

    // AppState.cars = cars.reverse()
    AppState.cars = cars
  }

  async createCar(carData) {
    const res = await api.post('api/cars', carData)

    logger.log('[CREATED CAR]', res.data)

    const car = new Car(res.data)

    // AppState.cars.unshift(car)
    AppState.cars.push(car)
  }

  async removeCar(carId) {
    const res = await api.delete(`api/cars/${carId}`)

    logger.log('[REMOVED CAR]', res.data)

    const carIndex = AppState.cars.findIndex(car => car.id == carId)

    AppState.cars.splice(carIndex, 1)
  }

  async editCar(carData) {
    const res = await api.put(`api/cars/${carData.id}`, carData)
    logger.log('[EDITTED CAR]', res.data)

    const car = new Car(res.data)

    const carIndex = AppState.cars.findIndex(car => car.id == carData.id)

    AppState.cars.splice(carIndex, 1, car)
  }

  setCarToEdit(carToEdit) {
    AppState.activeCar = carToEdit
  }

}

export const carsService = new CarsService()