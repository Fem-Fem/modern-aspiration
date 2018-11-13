class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :description
      t.string :category
      t.date :target_date

      t.timestamps
    end
  end
end
