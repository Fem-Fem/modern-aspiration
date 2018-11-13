class GoalSerializer < ActiveModel::Serializer
  attributes :id, :aim, :strategy, :category
  has_many :objectives
end
