class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :quality, presence: true
  validates :body, presence: true
  
  enum quality: [:genius, :plausible, :swill]
end
