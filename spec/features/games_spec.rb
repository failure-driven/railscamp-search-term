require 'rails_helper'

RSpec.feature "Games", type: :feature, js: true do
  scenario 'Visiting the game' do
    visit '/'
    pending 'welcome page not implemented in SPA'
    expect(page).to have_content 'Welcome to the Game'
  end
end

