require 'rails_helper'

RSpec.feature "creates an idea", type: :feature do
  fixtures :ideas
  scenario "A user creates an idea", :js => true do
     visit root_path

     expect(page).to_not have_content "Title0"
     expect(page).to_not have_content "Body0"

     fill_in 'idea-title', with: "Title0"
     fill_in 'idea-body', with: "Body0"
     find('#save-idea').click
     sleep(0.25)
     expect(page).to have_content "Title0"
     expect(page).to have_content "Body0"
 end
end
