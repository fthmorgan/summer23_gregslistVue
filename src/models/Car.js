export class Car {
  constructor (data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.color = data.color || '#000000'
    this.engineType = data.engineType
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }
}

// let carData = {
//   "creator": {
//     "_id": "63922fd4274d85e20428e306",
//     "name": "b.chilling",
//     "picture": "https://s.gravatar.com/avatar/c4188763b40ebe97bd0329651ec44a59?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fb.png",
//     "id": "63922fd4274d85e20428e306"
//   },
//   "id": "649e1ddf20ddc6d890107698"
// }