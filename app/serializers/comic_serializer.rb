class ComicSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :description,
             :issue_number,
             :author,
             :illustrator,
             :release_date,
             :publisher,
             :price,
             :read
end
