module PageFragments
  module Welcome
    def start_game
      browser.find('[data-start-button]').click
    end
  end
end
