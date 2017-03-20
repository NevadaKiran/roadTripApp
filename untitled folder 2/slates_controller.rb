class SlatesController < ApplicationController
  before_action :authenticate_user!

  def index
    slates = current_user.slates
    render json: slates
  end

  def show
    slate = current_user.slates.find(params[:id])
    render json: slate
  end

  def create
    slate = current_user.slates.create(slate_params)
    render json: slate
  end

  private
  def slate_params
    params.require(:slate).permit(:president, :president_reasons,
                                  :us_senate, :us_senate_reasons,
                                  :us_congress, :us_congress_reasons,
                                  :nv_senate, :nv_senate_reasons,
                                  :nv_assembly, :nv_assembly_reasons,
                                  :city_council1, :city_council1_reasons,
                                  :city_council2, :city_council2_reasons,
                                  :judge1, :judge1_reasons,
                                  :judge2, :judge2_reasons,
                                  :judge3, :judge3_reasons,
                                  :issue1, :issue1_reasons,
                                  :issue2, :issue2_reasons,
                                  :issue3, :issue3_reasons)
  end
end
