require 'rails_helper'

RSpec.feature "Games", type: :feature, js: true do
  scenario 'Playing the game' do
    When 'a user starts the game' do
      visit '/'
      expect(page).to have_content 'Welcome to the Game'
      page.find('[data-start-button]').click
    end

    Then 'the game commences' do
      expect(page).to have_content 'This is round 1'
      expect(page).to have_selector('img')
      expect(page).to have_selector('textarea')
      page.find("textarea").fill_in(with: "Michael")
      expect(page).to_not have_content "CORRECT"
      expect(page).to_not have_content "NEXT"
      page.find("textarea").fill_in(with: "Matt")
      expect(page).to have_content "CORRECT"
      expect(page).to have_content('NEXT')
      page.find("[data-test-next]").click
      expect(page).to have_content 'This is round 2'
      expect(page.find("textarea").value).to eq ""
    end
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
