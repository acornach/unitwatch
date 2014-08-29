class AddBlurbToChapters < ActiveRecord::Migration
  def change
    add_column :chapters, :blurb, :string
  end
end
