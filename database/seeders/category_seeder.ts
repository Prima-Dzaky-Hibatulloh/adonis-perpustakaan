import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CategorySeeder extends BaseSeeder {
  async run() {
    await Category.createMany([
      { name: 'Komik' },
      { name: 'Filsafat' },
      { name: 'Sejarah' },
      { name: 'Sastra' },
      { name: 'Fantasi' },
      { name: 'Biografi' },
      { name: 'Petualangan' },
      { name: 'Romansa' },
      { name: 'Misteri' },
      { name: 'Saintek' },
    ])
  }
}
