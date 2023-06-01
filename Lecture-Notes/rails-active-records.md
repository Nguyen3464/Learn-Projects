# Rails Active Records

    ## Learning Objectives

        can define ORM

        can differentiate between a database and an ORM

        can visualize a database as a collection of rows and columns

        can recall the command to generate a model

        can differentiate between terminal and Rails console

        can recall basic Active Record data types

        can equate models with classes

        can recognize that the schema cannot be updated directed

        can use appropriate Active Record syntax to perform CRUD actions on a model

    ## Vocabulary
        
        ORM
        
        Active Record
        
        Generate commands
        
        Model class
        
        Migrations
        
        Database schema
        
        Rails console
        
        Primary key

    ## Fullstack

        - MVC model, view, controller 
            -philosiphy model stores data, view renders markup, controller comunicates between model and view

    ## Active Record

        - Active Records is a gem that allows rails application communicate with database
        ruby <--> postgresSQL

        - ORM object relational mapper are translator between languages

    ## Steps to create a rails app

        - open new app
            - $ rails new active-records -d postgresql -T // drops sqllite for postgresql, make room for RSpec
            -index into working directory
            - $ rails db:create  // creates database that lives on local it was created on, it connects to rails app.
            - $ rails s // starts rails app server
            - navigate to local host in browser localhost:3000

    ## Generate Model

            - $ rail generate model ClassName day:string date:date event:string
                // rail generators creates class, columns -->columnsName:datatype,

            - $ rails db:migrate
                // takes timestape file and executes method inside of the class and creates the schema, never modify a database file directly, only through migrations

    ## Add data into model from rails terminal

            - $ rails c
            // opens up rails console, uses active record to translate into database.  this allows us to insert data into our empty database

            - $ ClassName.all // views all data within database.  In the terminal its using ruby code and translating it to SQL

            - $ ClassName.create(day: 'Wednesday', date: '2023-04-12', event: 'Office Hours')<-- pases in a hash that follows schema instance variables with key:value give the database the first instance

            - ClassName.find(id#) // finds item by id

    ## Data types:

            :binary, :boolean,:date, :datetime, :decimal, :float, :integer, :bigint, :primary_key, :references, :string, :text, :time,:timestamp

    ## CRUD Actions

        ## create

            - ClassName.create(day: 'Wednesday', date: '2023-04-12', event: 'Office Hours') // creates instance of class or another row on the class table in the database

        ## read

            - ClassName.find(id#) // finds item by id
            - ClassName.where(day: 'Wednesday') // finds data what meets 'Wednesday' value
        
        ## update

            - updateName = ClassName.first // create a variable to isolate instance to be updated
            - updateName.update(event: 'Really awesome office hours') // updates key's value

        ## delete

            - ClassName.find // find instance
            - value.destroy // deletes key's value


