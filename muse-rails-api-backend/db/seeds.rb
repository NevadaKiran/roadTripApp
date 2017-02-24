# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all

rihanna = Artist.new(name: "Rihanna", albums: 6, hometown: "Barbados", img: "http://mccarthyamp.com/wp-content/uploads/2016/02/23445669273_bfc7c4062b_b.jpg")
taylor = Artist.new(name: "Taylor Swift", albums: 8, hometown: "Nashville", img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png")
billy = Artist.new(name: "Billy Joel", albums: 14, hometown: "Long Island", img: "https://images-na.ssl-images-amazon.com/images/I/81RgoBLQOKL._SY355_.jpg")
drake = Artist.new(name: "Drake", albums: 4, hometown: "Toronto", img: "http://images.complex.com/complex/image/upload/t_in_content_image/drake-thank-me-later-album-cover_o6ek33.jpg")
beyonce = Artist.new(name: "Beyonce", albums: 6, hometown: "Houston", img: "http://www.fuse.tv/image/571c26a6017704456e00001b/816/545/beyonce-lemonade-album-cover-full.jpg")

[rihanna, taylor, billy, drake, beyonce].each { |artist| artist.save }

Song.create(artist_id: rihanna.id, title: "Umbrella", genre: "Pop")
Song.create(artist_id: taylor.id, title: "Shake It Off", genre: "Pop")
Song.create(artist_id: billy.id, title: "Pressure", genre: "Rock")
Song.create(artist_id: drake.id, title: "Hotline Bling", genre: "Rap")
Song.create(artist_id: beyonce.id, title: "Lemonade", genre: "R&B")

king = Author.new(name: "Stephen King", birthday: "09-21-1947", hometown: "Portland", genre: "Horror")
tolkien = Author.new(name: "JRR Tolkien", birthday: "01-03-1892", hometown: "Bloem", genre: "Fantasy")
martin = Author.new(name: "GRR Martin", birthday: "09-20-1948", hometown: "NJ", genre: "Fantasy")

[king, tolkien, martin].each { |author| author.save }
