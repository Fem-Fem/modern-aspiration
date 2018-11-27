class GoalSerializer < ActiveModel::Serializer
  attributes :id, :aim, :strategy, :category, :completed
  has_many :objectives
end
