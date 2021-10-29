class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :profile_img, :password_digest
end
