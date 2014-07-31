class UnitsController < ApplicationController
	respond_to :json

  def index
    respond_with Unit.all
  end

end
