class ObjectiveSerializer < ActiveModel::Serializer
  attributes :id, :description, :completed
  belongs_to :goal
end
