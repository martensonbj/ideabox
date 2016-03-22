class Api::V1::IdeasController < Api::V1::BaseController

def create
  respond_with :api, :v1, Idea.create(idea_params)
end

def update
  respond_with Idea.update(params[:id], idea_params)
end

def destroy
  respond_with Idea.destroy(params[:id])
end

private

def idea_params
  params.require(:idea).permit(:title, :body, :quality)
end

end
