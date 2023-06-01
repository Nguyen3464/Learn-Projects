# Rails Active Records Assocications

    ## Learning Objectives
        
        Exploring associations between models
        
        Understanding the purpose of a foreign key

    ##Vocabulary
        
        has_many: 
        
        belongs_to:
        
        foreign key: foreign keys allow association of instance from one table to instances of another table with instance id value

        
        dre.credit_cards.create(number: '123456789', experationdate: '01/2025')

    
    ## Core concepts

        - relationship between tables
        - has_many: 
        - belongs_to:
        - Every table has a primate key - id:numbers
        - forgien key --> refrences to another table's primary key

    ##  Setup

        $ rails generate associations model Cohort

        $ rails generate Student name:string cohort_id:integer

        $ rails db:migrate

    ## Databases

    ## Model Classes
yarn

                    

