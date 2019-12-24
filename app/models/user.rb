class User < ApplicationRecord
    validates :email, :username, :session_token, :password_digest, presence: true
    validates :email, :username, :session_token, uniqueness: true
    validates :bio, length: {maximum: 300}
    # validates :username, length: { minimum: 6 }
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :products, dependent: :destroy


    
    has_one_attached :photo, dependent: :destroy

    has_many :favorites, dependent: :destroy
    has_many :favorite_products, through: :favorites

    after_initialize :ensure_session_token
    attr_reader :password


    def self.find_by_credentials(email, password)
        user = self.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.update(session_token: generate_unique_session_token)
        self.session_token
    end

    private

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def generate_unique_session_token
        self.session_token = self.class.generate_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
end