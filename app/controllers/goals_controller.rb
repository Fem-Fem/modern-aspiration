class GoalsController < ApplicationController
  
  def index
    @goals = Goal.all
    render json: @goals
  end

  def show
    @goal = Goal.find(params[:id])
    render json: @goal, status: 200
  end

  def create
    @goal = Goal.create(goal_params)
    render json: @goal, status: :created
  end

  def destroy
    @goal = Goal.find(params[:id])
    @goal.destroy
    render json: @goal
  end

  private
  def goal_params
    params.require(:goal).permit(:aim, :strategy, :category)
  end
end
