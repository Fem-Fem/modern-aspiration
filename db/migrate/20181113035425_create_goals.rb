class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :aim
      t.string :category
      t.string :strategy

      t.timestamps
    end
  end
end
