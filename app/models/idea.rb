class Idea < ActiveRecord::Base
  enum quality: [:genius, :plausible, :swill]
end
