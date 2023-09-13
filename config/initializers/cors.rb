Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # where your request comes from (react app's IP address)
    origins "http://localhost:3000/"

    resource "",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end