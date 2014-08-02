class BulletsController < ApplicationController
respond_to :json
	def index
		@chapter = Chapter.find(params[:chapter_id])
		@bullets = @chapter.bullets
		respond_with @bullets
	end
end
