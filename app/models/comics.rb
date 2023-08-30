class Comics < ApplicationRecord
  validates :title, presence: true, length: { minimum: 1, maximum: 100 }
  validates :description, presence: true, length: { minimum: 5, maximum: 300 }
  validates :issue_number, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :author, presence: true, length: { minimum: 1, maximum: 100 }
  validates :illustrator, presence: true, length: { minimum: 1, maximum: 100 }
  validates :release_date, presence: true
  validates :publisher, presence: true, length: { minimum: 1, maximum: 100 }
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :read, inclusion: { in: [true, false] }
end