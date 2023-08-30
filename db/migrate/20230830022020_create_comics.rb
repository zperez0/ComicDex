class CreateComics < ActiveRecord::Migration[7.0]
  def change
    create_table :comics do |t|
      t.string :title
      t.text :description
      t.integer :issue_number
      t.string :author
      t.string :illustrator
      t.date :release_date
      t.string :publisher
      t.decimal :price
      t.boolean :read, default: false
      t.timestamps
    end
  end
end
