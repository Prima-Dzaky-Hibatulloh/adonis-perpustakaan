import Book from '#models/book'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class BookSeeder extends BaseSeeder {
  async run() {
    await Book.createMany([
      // 1. Komik
      { title: 'Petualangan Si Juki', author: 'Faza Meonk', publishedYear: 2018, categoryId: 1, shelfId: 1 },
      { title: 'Garis Waktu Komik', author: 'Raditya Dika', publishedYear: 2020, categoryId: 1, shelfId: 1 },

      // 2. Filsafat
      { title: 'Filsafat Hidup', author: 'Driyarkara', publishedYear: 2017, categoryId: 2, shelfId: 2 },
      { title: 'Manusia dan Eksistensi', author: 'Franz Magnis-Suseno', publishedYear: 2019, categoryId: 2, shelfId: 2 },

      // 3. Sejarah
      { title: 'Indonesia Dalam Sejarah', author: 'Taufik Abdullah', publishedYear: 2015, categoryId: 3, shelfId: 3 },
      { title: 'Nusantara Bangkit', author: 'Anhar Gonggong', publishedYear: 2020, categoryId: 3, shelfId: 3 },

      // 4. Sastra
      { title: 'Sang Pemimpi', author: 'Andrea Hirata', publishedYear: 2006, categoryId: 4, shelfId: 4 },
      { title: 'Orang-Orang Bloomington', author: 'Budi Darma', publishedYear: 1980, categoryId: 4, shelfId: 4 },

      // 5. Fantasi
      { title: 'Anak Rantau', author: 'A. Fuadi', publishedYear: 2018, categoryId: 5, shelfId: 5 },
      { title: 'Bumi', author: 'Tere Liye', publishedYear: 2014, categoryId: 5, shelfId: 5 },

      // 6. Biografi
      { title: 'Habibie & Ainun', author: 'Bacharuddin Jusuf Habibie', publishedYear: 2010, categoryId: 6, shelfId: 2 },
      { title: 'Soekarno: Penyambung Lidah Rakyat', author: 'Cindy Adams', publishedYear: 1965, categoryId: 6, shelfId: 2 },

      // 7. Petualangan
      { title: '5 CM', author: 'Donny Dhirgantoro', publishedYear: 2005, categoryId: 7, shelfId: 3 },
      { title: 'Laskar Pelangi', author: 'Andrea Hirata', publishedYear: 2005, categoryId: 7, shelfId: 3 },

      // 8. Romansa
      { title: 'Dilan 1990', author: 'Pidi Baiq', publishedYear: 2014, categoryId: 8, shelfId: 4 },
      { title: 'Rindu', author: 'Tere Liye', publishedYear: 2015, categoryId: 8, shelfId: 4 },

      // 9. Misteri
      { title: 'Detektif Conan', author: 'Gosho Aoyama', publishedYear: 1994, categoryId: 9, shelfId: 1 },
      { title: 'Pembunuhan di Orient Express', author: 'Agatha Christie', publishedYear: 1934, categoryId: 9, shelfId: 1 },

      // 10. Saintek
      { title: 'Fisika Dasar', author: 'Halliday & Resnick', publishedYear: 2010, categoryId: 10, shelfId: 5 },
      { title: 'Pengantar Teknologi Informasi', author: 'Ari Saputra', publishedYear: 2022, categoryId: 10, shelfId: 5 },
    ])
  }
}
