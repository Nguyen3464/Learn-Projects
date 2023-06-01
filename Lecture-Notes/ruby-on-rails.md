# Ruby on Rails

    ##Learning Objectives
        
        can recall the command to create a new Rails application
        
        can recall the command to start the application server
        
        can view the Rails boilerplate page in the browser
        
        can navigate a Rails application to find the model, controller, views, db, gemfiles
        
        can recall the parts of MVC architecture
        
        can give examples of the technologies making up the MVC architecture
        
    ##Vocabulary

        Ruby on Rails: Rails is a server side framework that uses ruby

        MVC: Model View Controller frameworks follow the MVC archetectural patterns. MVC orginizes Model, View, Controller aspects of the framework.

        Model: Model is the database layer

        View: Visual representation of the data

        Controller: Controllers act like a switch board. It states what data should be collected form the model and constructs the View

        Sequal lite, mini test. are build it testing methods

        we will use PostgressSQL and RSpec

    ## Create an application

        check rails version
            -  rails -v
        
        create rails app

            - $ rails new intro_app // applicationName

            - $ rails new intro_app -d postgresql -T // drops squual lite and mini test and uses postgresql

        index into rails app directory
        open folder

        create database

            - $ rails db:create
            - $ psql \l to check if database was added to local list of databases

        run rails server

            - $ rails s

        run rails in broswer
    
            - In browser --> localhost: 3000 in the search bar

            -rails does not hot refresh.

    ## Files to consider

        - model
        - controller
        - view
        - inside routes
            - db folder
        - gemsfile






