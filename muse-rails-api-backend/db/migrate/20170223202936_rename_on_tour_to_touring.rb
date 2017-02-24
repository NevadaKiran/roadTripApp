class RenameOnTourToTouring < ActiveRecord::Migration[5.0]
  def change
    rename_column :artists, :on_tour, :touring
  end
end
