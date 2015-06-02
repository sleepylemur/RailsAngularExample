class WelcomeController < ApplicationController
  def index
  end

  def pizza
    render json: {pizza: 'is delicious'}
  end
end