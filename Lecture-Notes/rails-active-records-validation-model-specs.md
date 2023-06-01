# Active Record Validations and Model Specs

    ##Learning Objectives
        
        can explain the purpose of model validations
        
        can use correct syntax for Rails built in validations
        
        can use correct syntax for custom validations
        
        can define test-driven development
        
        can install RSpec into a Rails application
        
        can utilize test-driven development to ensure accuracy of model validations
    
    ##Vocabulary

        validations

        specs

        test driven development (TDD)

    ## Process


        Create a new Rails app in the appropriate folder: $ rails new validations -d postgresql -T

        $ cd validations

        Create a database: $ rails db:create

        Add the dependencies for RSpec:

        $ bundle add rspec-rails

        $ rails generate rspec:install

        Generate the model with appropriate columns and data types

        $ rails db:migrate

        Begin the rails server: $ rails server

        In a browser navigate to: http://localhost:3000

    ## RSpec test

        require 'rails_helper'

        RSpec.descibe Animal, type: model do
            it 'is valid with valid attributes' do
                cat = Animal.create(name: 'Kevin', age: 9)
                expect(cat).to be_valid
            end


            // check for name attribute
            it 'is not valid without a name' do
                cat = Animal.create(age: 9)
                expect(cat.errors[:name]).to_not be_empty
            end
            
            // check for age attribute
            it 'is not valid without an age' do
                cat = Animal.create(name: 'Mr. Kits')
                expect(cat.errors[:age]).to_not be_empty
            end

            //check for length <2 && >20
            it 'is not valid if name is outside the range of 2-20 characters' do
                cat = Animal.create(name: 'X', age: 5)
                expect(cat.error[:name]).to_not be_empty

                long_cat = Animal.create(name: 'DSAFGDSGDSFDSFDSSD+20characters, age: 9)
                expect(long_cat.error[:name]).to_not be_empty
            end

            // add a column for this example
            it 'is not valid without a phone number' do
                dog = Animal.create(name:'Theo', age:4)
                expect(dog.errors[:phone]).to_not be_empty
            end

            it 'is not valid with dublicate phone number' do
                dog = Animal.create(name:'Kita', age:12, phone:'555-555')

                duplicatephone = Animal.create(name:'Jojo', 
                age:12, phone:'555-555')
                expect(dupelicatephone.error[:phone]).to_not be_empty
            end
        end

    ## Add attribue validations

        class Animal < ApplicationRecord
            // name, age, phone attribute
            validates :name, :age, phone presence: true //helper method
           
            // name length attribute
            validate :name, length: { in: 2..20 }

            // phone# duplicate
            validates :phone, :uniqueness: true
        end

    ## Add length validation


            

            