type PricePerDay = {
  value: number
  currency: string
}

export type CarsGetRespponseDto = {
  model: string
  discount: number
  features: string[]
  tank: number
  pricePerDay: PricePerDay
  owners: number
  image: string
  seats: number
  fuelTypeId: string
  horsepower: number
  year: number
  id: string
  engine: string
  color: string
  popular: boolean
  hidden: boolean
  type: string
  transmission: string
  makerId: string
  mileage: number
}
