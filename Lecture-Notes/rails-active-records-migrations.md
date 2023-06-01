# Rails Active Records Migration

    ##Learning Objectives
    
        Using a Rails generate command to modify the database

    ##Vocabulary

        - migrations: migration is used to alter the structure of the database, columns, key: values, otherwise know as the schema

        - model: ruby class that is used to represendt data.  single word in PascaleCase

    ##Useful Commands

        - Refrences rubyonrails.org for methods
        - $ rails help
        - syllabus
        
        $ rails generate migration action_name_here
        
        $ rails db:migrate
        
        add_column :table_name, :column_name, :datatype
        
        change_column :table_name, :column_name, :datatype
        
        rename_column :table, :old_column, :new_column 
        
        remove_column :table_name, :column_name

    ## Create Rails Database

        - $ rails new app_name -d postgresql -T
        - index into working directory
        - $ rails db:create
        - $ rails s
        - go to localhost:3000 in browser
        - $ rail generate model ClassName column:datatype column:datatype
        - $ rails db:migrate

    ## How to drop rails database

        - Generatate a model
            - $ rails c // opens rails console
            - $ rails generate model PartyAdgenda role:string name:string // generate model creates a model and a migration
            - $ rails db:migrate // any time a change is made to files run db:migrate to accept the file, schema will appear after
            - model table uses snake_case and is plural--> rails syntatical sugar 
            
        - preform a migration
            - used to alter the structure of the database

        -CRUD actions on data entries
            - $ rails c // rails console
            - $ ModelName.create(columnname: 'entrie', columnname: 'entrie') // create entries or instances of the class or represented as rows in the table

        -update
            - variablename = ModelName.find_by(columnname: 'queryvalue') // store the active record query in a variable
            - variablename.update(columnname: 'newvalue') // use .update and provide a new value to update the value in the instance

    ## Migration Adding a column

        - any time a change is made to files run db:migrate to accept the file
        - exit out of rails console to run in local terminal
        - $ rails generate migration DescritionOfColumnAddedToModelName
        - locate migration file^ inside rails app folder, add change definition to change method in the migration file

            -structure: 
            class DescritionOfColumnAddedToModelName
                def change
                    add_column :table_name_plural, :column_name, :datatype
                end
            end

        -Update schema with migrations
            - rails db:migrate

        -instances prior to migrations will have no value nil, to add vaue use update method

    ## Drops Rails Database

        - $ rails db:drop // removes test
        - $ cd .. // index out of the application folder
        - $ rm -rf <nameofrailsapp>

        this removes the database from the local hard.

        - $ psql
        - $ \l // check database on local
        - $ \q // exit database display
        


