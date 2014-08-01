class Chapter < ActiveRecord::Base
	belongs_to :unit
	has_many :bullets
end
