class AddCompletedToGoals < ActiveRecord::Migration[5.2]
  def change
    add_column :goals, :completed, :integer, default: 0
  end
end
