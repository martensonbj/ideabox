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

  describe "DELETE destroy" do
    it "deletes an idea" do
      idea = Idea.first
      ideas = Idea.all
      get :index, format: :json

      expect(ideas.count).to eq 4

      delete :destroy, format: :json, id: idea.id
      expect(ideas.count).to eq 3
    end
  end

  describe "POST create" do
    it "creates an idea" do
      title = "New Idea"
      body = "New idea body"
      post :create, format: :json, idea: {title: title, body: body}

      json_response = JSON.parse(response.body, symbolize_names: true)
      expect(response).to have_http_status(201)
      expect(json_response[:title]).to eq("New Idea")
      expect(json_response[:body]).to eq("New idea body")
      expect(json_response[:quality]).to eq("swill")
    end
  end

  # describe "PUT update" do
  #   it "updates an idea" do
  #     idea = ideas(:idea_1)
  #     title = "Edited Idea"
  #
  #     put :update, format: :json, idea: {title: title}, id: idea.id
  #
  #     json_response = JSON.parse(response.body, symbolize_names: true)
  #     expect(json_response[:title]).to eq("Edited Idea")
  #     expect(json_response[:body]).to eq idea.body
  #   end
  # end

end
