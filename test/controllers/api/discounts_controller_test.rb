require 'test_helper'

class Api::DiscountsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_discounts_index_url
    assert_response :success
  end

  test "should get show" do
    get api_discounts_show_url
    assert_response :success
  end

  test "should get create" do
    get api_discounts_create_url
    assert_response :success
  end

  test "should get update" do
    get api_discounts_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_discounts_destroy_url
    assert_response :success
  end

end
