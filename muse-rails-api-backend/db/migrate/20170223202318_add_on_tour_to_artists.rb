class AddOnTourToArtists < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :on_tour, :boolean
  end
end
