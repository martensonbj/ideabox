require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  fixtures :ideas

  describe "GET index" do
    it "finds all ideas" do
      get :index, format: :json
      json_response = JSON.parse(response.body, symbolize_names: true)
      expect(response).to have_http_status(200)
      expect(json_response.count).to eq 4
      expect(json_response.first).to include(:title)
      expect(json_response.first).to include(:body)
      expect(json_response.first).to include(:quality)
    end
  end

  xdescribe "DELETE destroy" do
    it "deletes an idea" do
      idea = Idea.first
      get :index, format: :json

      json_response = JSON.parse(response.body, symbolize_names: true)
      binding.pry
      expect(json_response.count).to eq 4

      delete :destroy, format: :json, id: idea.id
      expect(json_response.count).to eq 3
    end
  end

  describe "POST create" do
    it "creates an idea" do
      title = "New Idea"
      body = "New idea body"
      post :create, format: :json, title: title, body: body

      json_response = JSON.parse(response.body, symbolize_names: true)
      binding.pry
      expect(response).to have_http_status(201)
      expect(json_response[:title]).to eq("Puppy")
      expect(json_response[:body]).to eq("A big one")
      expect(json_response[:quality]).to eq("swill")
    end
  end

end
