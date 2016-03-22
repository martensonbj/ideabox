class ChangeColumnDefaultIdeas < ActiveRecord::Migration
  def change
    change_column_default(:ideas, :quality, 2)
  end
end
