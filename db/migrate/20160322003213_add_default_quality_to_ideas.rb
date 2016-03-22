class AddDefaultQualityToIdeas < ActiveRecord::Migration
  def change
    change_column_default :ideas, :quality, default: 2
  end
end
