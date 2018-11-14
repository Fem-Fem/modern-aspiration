class ObjectivesController < ApplicationController
  def index
    @objectives = Objective.all
    render json: @objectives
  end

  def show
    @objective = Objective.find(params[:id])
    render json: @objective, status: 200
  end

  def create
    @objective = Objective.create(objective_params)
    render json: @objective, status: :created
  end

  def destroy
    @objective = Objective.find(params[:id])
    if @objective.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private
  def objective_params
    params.require(:objective).permit(:aim, :strategy, :category)
  end
end
