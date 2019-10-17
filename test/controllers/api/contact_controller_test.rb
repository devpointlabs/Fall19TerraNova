require 'test_helper'

class Api::ContactControllerTest < ActionDispatch::IntegrationTest
  test "should get contact" do
    get api_contact_contact_url
    assert_response :success
  end

end
