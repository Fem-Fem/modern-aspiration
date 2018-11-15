class Goal < ApplicationRecord
  has_many :objectives, dependent: :destroy
end
