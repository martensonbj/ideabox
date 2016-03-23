require 'rails_helper'

RSpec.feature "root page", :type => :feature do
  scenario "it reaches the root page" do
    idea = Idea.create(title: "my idea title", body: "my idea body", quality: 1
    )
    visit "/"

    expect(page.status_code).to eq(200)

    within 'h1' do
      expect(page).to have_text("Idea Bucket")
    end

    within '.filter' do
      expect(page).to have_css("#search-ideas")
    end

    within '#idea-form' do
      expect(page).to have_text('Idea')
      expect(page).to have_text('Body')
      expect(page).to have_css('#save-idea')
    end

    within '.modal' do
      expect(page).to have_css('#edit-idea-title')
      expect(page).to have_css('#edit-idea-body')
      expect(page).to have_css('#edit-idea')
    end
  end
end
