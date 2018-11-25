require 'rails_helper'

describe "/named_images", type: :request do
  it 'returns the named images' do
    NamedImage.create!(name: "Keith", image_path: "/keith_image.gif")

    get "/named_images"

    expect(response.status).to eq(200)
  end
end