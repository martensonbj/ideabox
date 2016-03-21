class ChangeDescriptionToBodyInIdeas < ActiveRecord::Migration
  def change
    rename_column :ideas, :description, :body
  end
end
