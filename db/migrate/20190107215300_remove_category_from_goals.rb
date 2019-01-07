class RemoveCategoryFromGoals < ActiveRecord::Migration[5.2]
  def change
    remove_column :goals, :category
  end
end
