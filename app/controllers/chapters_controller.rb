class ChaptersController < ApplicationController
  respond_to :json

  def index
  	@unit = Unit.find(params[:unit_id])
    @chapters = @unit.chapters
    respond_with @chapters
  end
  
  def show
	@unit = Unit.find(params[:unit_id])
    @chapters = @unit.chapters
	render 'unitview.html.erb'
  end
  
  def create
	respone_with Chapter.create(unit_params)
  end
  
  def destroy
	respond_with Chapter.destroy(unit_params)
  end
  
  private
  def unit_params
	params.require(:chapter).permit(:title)
  end
end
