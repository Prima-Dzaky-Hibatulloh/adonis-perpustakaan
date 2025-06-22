import Shelf from '#models/shelf'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ShelfSeeder extends BaseSeeder {
  async run() {
    await Shelf.createMany([
      // Lantai 1
      { code: 'L1-Z1', location: 'Lantai 1 - Zona Timur' },
      { code: 'L1-Z2', location: 'Lantai 1 - Zona Barat' },

      // Lantai 2
      { code: 'L2-Z1', location: 'Lantai 2 - Zona Tengah' },
      { code: 'L2-Z2', location: 'Lantai 2 - Zona Selatan' },

      // Lantai 3
      { code: 'L3-Z1', location: 'Lantai 3 - Zona Utara' },
      { code: 'L3-Z2', location: 'Lantai 3 - Zona Khusus' },
    ])
  }
}
