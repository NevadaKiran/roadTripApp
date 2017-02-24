class AddAliveOrDeadToAuthors < ActiveRecord::Migration[5.0]
  def change
    add_column :authors, :alive, :boolean
  end
end
