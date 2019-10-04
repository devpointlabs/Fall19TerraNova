require 'test_helper'

class Api::PaymentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_payments_index_url
    assert_response :success
  end

  test "should get show" do
    get api_payments_show_url
    assert_response :success
  end

  test "should get create" do
    get api_payments_create_url
    assert_response :success
  end

  test "should get update" do
    get api_payments_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_payments_destroy_url
    assert_response :success
  end

end
