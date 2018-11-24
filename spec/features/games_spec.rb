require 'rails_helper'

RSpec.feature "Games", type: :feature, js: true do
  scenario 'Visiting the game' do
    visit '/'
    expect(page).to have_content 'Welcome to the Game'

    page.find('[data-start-button]').click
    expect(page).to have_content 'This is round 1'
    expect(page).to have_selector('img')
    pending 'no text area yet'
    expect(page).to have_selector('textarea')
  end
end

