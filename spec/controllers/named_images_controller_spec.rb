require 'rails_helper'

RSpec.describe NamedImagesController, type: :controller do
  it 'returns a 200' do
    get :index

    expect(response.status).to eq(200)
  end
end
