class CreateAuthors < ActiveRecord::Migration[5.0]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :birthday
      t.string :hometown
      t.string :genre

      t.timestamps
    end
  end
end
