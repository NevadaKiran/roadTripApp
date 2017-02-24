class RemoveTouringFromArtists < ActiveRecord::Migration[5.0]
  def change
    remove_column :artists, :touring, :boolean
  end
end
