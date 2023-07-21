export class House {
  constructor(data) {

    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl || "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/02/13002557/Up-House.jpg"
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.createdAt = data.createdAt
  }
}


// let houseObject =
//   "creator": {
//     "_id": "63f7d6202d1cf882287f12e2",
//     "name": "Charles Francis Xavier",
//     "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
//     "id": "63f7d6202d1cf882287f12e2"
//   },
