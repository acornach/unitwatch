class UnitsController < ApplicationController
	respond_to :json

  def index
    respond_with Unit.all
  end
	
  def create
	respond_with Unit.create(unit_params)
  end
  
  def show
	@unit = Unit.find(params[:id])
	@chapters = @unit.chapters
  end
  
  def destroy
	respond_with Unit.destroy(unit_params)
  end
  
  private
  def unit_params
	params.require(:unit).permit(:title)
  end
  
end
