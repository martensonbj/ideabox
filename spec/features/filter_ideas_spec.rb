require 'rails_helper'

RSpec.feature "filters ideas", type: :feature do
  fixtures :ideas
  scenario "A user can filter page by keyword", :js => true do
     visit root_path

     expect(page).to have_content("Idea Title 1")
     expect(page).to have_content("Idea Title 2")
     expect(page).to have_css('.item', count: 4)
     within '.filter' do
       fill_in 'search-ideas', with: '2'
     end

     sleep(0.25)
     expect(page).to have_content("Idea Title 2")
     expect(page).to_not have_content("Idea Title 1")
     expect(page).to have_css('.item', count: 1)
 end
end
