require 'rails_helper'

RSpec.feature "Games", type: :feature, js: true do
  scenario 'Visiting the game' do
    visit '/'
    expect(page).to have_content 'Welcome to the Game'

    page.find('button').click
    pending("Haven't written any rounds yet")
    expect(page).to have_content 'This is round 1'
  end
end

