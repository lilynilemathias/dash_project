require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :database => "contactlist"
})

ActiveRecord::Base.logger = Logger.new(STDOUT)
