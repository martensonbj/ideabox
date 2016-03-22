class HomeController < ApplicationController

  def index
    @ideas = Idea.order(updated_at: :desc)
  end

end
