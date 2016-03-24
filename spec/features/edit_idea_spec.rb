require 'rails_helper'

RSpec.feature "edit an idea", type: :feature do
  fixtures :ideas
  scenario "A user edits an idea", :js => true do
     visit root_path
     idea = ideas(:idea_1)
     expect(page).to have_content("Idea Title 1")
     expect(page).to have_content(idea.body)

     within(:css, "div[data-id='#{idea.id}']") do
       find('.edit-idea-modal').click
     end

     within('.modal') do
       fill_in 'edit-idea-title', with: "Edited Idea Title"
       find('#edit-idea').click
     end

     sleep(0.25)
     expect(page).to_not have_content("Idea Title 1")
     expect(page).to have_content("Edited Idea Title")
     expect(page).to have_content(idea.body)
     expect(page).to have_content("Swill")
 end
end
