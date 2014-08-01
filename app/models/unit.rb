class Unit < ActiveRecord::Base
	has_many :chapters
	validates :title, presence: true,
						length: { minimum: 5}
end
