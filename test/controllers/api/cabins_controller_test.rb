require 'test_helper'

class Api::CabinsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cabins_index_url
    assert_response :success
  end

  test "should get show" do
    get api_cabins_show_url
    assert_response :success
  end

  test "should get create" do
    get api_cabins_create_url
    assert_response :success
  end

  test "should get update" do
    get api_cabins_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_cabins_destroy_url
    assert_response :success
  end

end
