class CreateWorks < ActiveRecord::Migration[5.0]
  def change
    create_table :works do |t|
      t.string :name
      t.text :description
      t.string :image
      t.string :link

      t.timestamps
    end
  end
end
