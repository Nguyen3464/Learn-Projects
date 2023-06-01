    ## Learning Objectives
        can conceptualize the flow of data from route to controller to view
        can define ERB
        can use correct Ruby syntax to create navigation
        can describe the purpose of an instance variable
        can describe the anatomy of a route
        can modify a route to expect one or more parameters
        can identify the data type of parameters
        can recognize parameters as a hash
        can extract values from params in the controller

    ## Process

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
        
    ##Vocabulary
        
        - controller: Controller is the coordinates that interact between the user, the view, and the model, controllers are a class and use PascaleCasing
        
        - view: View is the return from the request and rendered as UI
        
        - routes: Route is the flow of data extraction from database or server
        
        - erb:
        
        - root:
        
        - link_to
        
        - params: params is a hash that adds information to a url
        
        - instance variable

    ## Create a Controller

        - $ rails generate controller Home
        - $ rm helper file
        
    ## Create a method in controller

        class ControllerName < ApplicationController

            def greeter // render html basic 
                render html: 'Hey there movie lover'
            end            
            
            def movie // render html basic 
                render html: 'Slept on movie of the day: High Tension'
            end 

            def movie_recomendation // create method that calls on the view
                @recomendation = 'These are movies that I promiss you will enjoy'
                @movie = ["Kingdom Come", "Anything produced by A24", "John Wick 4"] // making ul dynamic
            end

            def landing // create method for links to landing page
            end
        end

    ## Create a route

        - inside config folder
            -routes.rb

            Rails.application.routes.draw do
                
                // http verb / route(URL) / hash rocket / controller# / controllermethod

                // route for html render
                get '/greeter' => 'home#greeter'

                //route for html render
                get '/movie' => 'home#methodname'

                // route for view
                get '/movie_recomendation' => 'home#movie_recomendation'

                //route for landing page link
                get '/landing' => 'home#landing'
                root to: 'home#landing'

            end

    ## Render A View

        - inside apps/views/home

            //create html erb file, embeded ruby, allows for ruby files to be embeded and to read ruby logic and use html tags
            - method_name_.html.erb

            - <h1>Need a movie to watch?</h1>

            <h2>Here are some movies to check out</h2>

            // syntax to call instance variable <%=instance_variable%>
            <p> <%= @recomendation %> </p>

            //Syntax to dynamically call instance variable
            <ul>
                <% @movie.each do |value| %>
                    <li> <%= value %> </li>
                <% end %>
            </ul>

            // create a view for root page for landing page

            - newfile-->landing.html.erb

            <h1>welcome to your favorite movie site</h1>

            // emebed landing route
            <%= link_to 'Greeter, "/greeter" %>
            <br/>
            <%= link_to 'Movie of the Day', '/movie' %>
            <br/>
            <%= link_to 'Movie Recomendation','/recomendations'%>

    ## Request-respose cycle

        - request
            - action: http verb: post, get, put, patch, delete
            - location: url
        - response
            - code: 100, 200, 300, 400, 500
            - payload: html

    ## Params

        controller --> route --> view
        - Controller
        class ControllerName < ApplicationController

            def github_user --> look at sylabus for definition
                @logged_in = params[:logged_in]
                if @logged_in == 'true'
                    @user = params[:username]
                else
                    @user = 'please log in'
                end
                @user = params[:username] <-- adding a param
            end
        end

        - Browser
        - in browser pass value to hash
        --> ?username=Sarah
        http://localhost:3000/github_user?username=Sarah
        httpL//locoalhost:3000/cubed?number=3
        - Route
        -->/:username adding a param to the routes makes the page unique and will only render if route's git verb matches is what its expecting on the browser or view

        Rails.application.routes.draw do
            get 'github_user/:username/:logged_in' => 'git_hub_user_account#github_user'
        end

        - erb
        <h1> username: <%= @user %> </h1>
        <h1> <%= @logged_in %> </h1>
    ## 



        


