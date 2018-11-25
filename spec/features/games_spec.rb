require 'rails_helper'

RSpec.feature "Games", type: :feature, js: true do
  scenario 'Visiting the game' do
    visit '/'
    expect(page).to have_content 'Welcome to the Game'

    page.find('[data-start-button]').click
    expect(page).to have_content 'This is round 1'
    expect(page).to have_selector('img')
    expect(page).to have_selector('textarea')
    page.find("textarea").fill_in(with: "Michael")
    expect(page).to_not have_content "CORRECT"
    expect(page).to_not have_content "NEXT"
    page.find("textarea").fill_in(with: "Matt")
    expect(page).to have_content "CORRECT"
    expect(page).to have_content('NEXT')
    page.find("button").click
    pending "round 2 does not work"
    expect(page).to have_content 'This is round 2'
  end

  context 'Guess name given data for Keith' do
    before do
      NamedImage.create!(name: "Keith", image_path: "/keith_image.gif")
    end

    scenario 'Playing the first turn' do
      pending
      visit '/'
      expect(page).to have_content 'Welcome to the Game'

      page.find('[data-start-button]').click
      expect(page.find("img")[:src]).to eq("http://localhost:5000/keith_image.gif")
    end
  end
end
