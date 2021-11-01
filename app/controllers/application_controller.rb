class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

  def authorize
    @user = User.find_by[id: session[:user_id]]
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless @user
  end
end
