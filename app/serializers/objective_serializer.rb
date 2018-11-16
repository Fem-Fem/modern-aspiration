class ObjectiveSerializer < ActiveModel::Serializer
  attributes :id, :description
  belongs_to :goal
end
