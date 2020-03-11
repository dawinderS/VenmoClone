class Api::RequestsController < ApplicationController

  def create
    @request = current_user.requests.new(request_params)

    if @request.save
      amt = @request.amount
      payer = User.find_by(id: params[:request][:payer_id])
      current_user.update(venmo_credit: current_user.venmo_credit + amt)
      if payer.venmo_credit < amt
        payer.update(venmo_credit: 0)
      else
        payer.update(venmo_credit: current_user.venmo_credit - amt)
      end
      render '/api/requests/show'
    else
      render json: @requests.errors.full_messages, status: 401
    end
  end

  def index
    @requests = Request.all
    render '/api/requests/index'
  end

  def show
    @request = Request.find(params[:id])
    render '/api/requests/show'
  end

  def destroy
    
  end

  private

  def request_params
    params.require(:request).permit(:user_id, :payer_id, :amount, :description)
  end

end
