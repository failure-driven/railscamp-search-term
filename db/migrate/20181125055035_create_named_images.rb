class CreateNamedImages < ActiveRecord::Migration[5.2]
  def change
    create_table :named_images do |t|
      t.string :name
      t.string :image_path

      t.timestamps
    end
  end
end
