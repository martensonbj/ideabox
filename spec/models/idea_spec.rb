require 'rails_helper'

RSpec.describe Idea, type: :model do

before do
  long_body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet dui sed blandit feugiat. Nulla congue nibh vel lobortis commodo. Quisque sed arcu eu est facilisis maximus. Proin tristique nulla sem, id mollis lorem scelerisque vitae. Curabitur et placerat ligula. Integer sit amet faucibus diam. Integer congue, est at rutrum auctor, erat diam condimentum nibh, sed placerat nisi ligula a quam. Ut condimentum ut lacus non tincidunt. Nullam convallis, lectus sit amet placerat porta, nulla sem tincidunt mi, vel suscipit justo mauris placerat dui. Curabitur et ex laoreet, commodo ante in, accumsan leo. Morbi sit amet lacinia neque, at finibus sapien. Etiam in diam risus."
  @long_idea = Idea.create(title: "Title", body: long_body)
  @idea = Idea.create(title: "This Title", body: "Newest of Bodies")
end

it "has a default quality of swill" do
  expect(@idea.quality).to eq("swill")
end

it "must have a title" do
  expect(Idea.all.count).to eq 2
  Idea.create(body: "This thing doesn't work")
  expect(Idea.all.count).to eq 2
end

it "must have a body" do
  expect(Idea.all.count).to eq 2
  Idea.create(title: "Bad Title")
  expect(Idea.all.count).to eq 2
end

it "has a body of over 100 words stored in the database" do
  length = @long_idea.body.split(' ').length
  length.should be > 100
end

end
