class UnitsController < ApplicationController
	respond_to :json

  def index
    respond_with Unit.all
  end
	
  def destroy
	respond_with Stock.destroy(unit_params)
  end
  
  private
  def unit_params
	params.require(:unit).permit(:title)
  end
  
end
