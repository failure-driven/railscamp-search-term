require 'rails_helper'

RSpec.feature "Games", type: :feature, js: true do
  scenario 'Visiting the game' do
    visit '/'
    expect(page).to have_content 'Welcome to the Game'

    page.find('[data-start-button]').click
    expect(page).to have_content 'This is round 1'
    pending "waiting to do the img"
    expect(page).to have_selector('img')
  end
end

