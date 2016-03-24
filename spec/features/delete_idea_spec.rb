require 'rails_helper'

RSpec.feature "creates an idea", type: :feature do
  fixtures :ideas
  scenario "A user creates an idea", :js => true do
     visit root_path
     idea = ideas(:idea_1)
     expect(page).to have_content(idea.title)
     expect(page).to have_content(idea.body)

     within(:css, "div[data-id='#{idea.id}']") do
       find('.delete-idea').click
     end

     sleep(0.25)
     expect(page).to_not have_content(idea.title)
     expect(page).to_not have_content(idea.body)
 end
end
