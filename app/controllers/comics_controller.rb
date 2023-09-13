class ComicsController < ApplicationController

  def show
  end

  def index
    @comics = Comics.all
    # in descending order
    # @comics = Comics.order(created_at: :desc)

    render json: @comics
  end

  def new
    # @comics = Comics.new(comics_params)
    # @comics.save
  end

  def edit
  end

  def create
  end


  private

  def comics_params
    params.require(:comic).permit(:title,
      :description, 
      :issue_number, 
      :author,  
      :illustrator, 
      :release_date, 
      :publisher, 
      :price, 
      :read
    )
  end

end