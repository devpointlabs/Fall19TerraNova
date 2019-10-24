class Api::ImagesController < ApplicationController
#   before_action :authenticate_user!
  before_action :set_image, only: [:show, :update, :destroy]

  # GET /images
  def index
    render json: Image.all
  end

  # GET /images/1
  def show
    render json: @image
  end

  # POST /images
  def create
    @image = Image.new(image_params)
    binding.pry
    if @image.save   
      render json: @image, status: :created, location: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /images/1
  def update
    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /images/1
  def destroy
    @image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
        binding.pry
      @image = Image.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def image_params
        binding.pry
      params.require(:image).permit(:group, :fileimg)
    end
end
