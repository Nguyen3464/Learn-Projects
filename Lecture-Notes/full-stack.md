# Full-stack Rails

    ## Learning Objectives
        can apply database queries to controller methods
        can follow RESTful naming conventions
        can create a flow of information from view to database back to view
        can implement CRUD in a Rails application
        can create routes with correct parameters for RESTful conventions
        can apply strong params method to controller
        can permit appropriate params
        can apply private keyword to project methods

    ##Vocabulary

        - CRUD
        - RESTful routes
        - MVP
        - require
        - permit
        - private

    ## Steps

        - create the app on desktop
            - $rails new full-stack-rails -d postgresql -T
            - $cd into folder
            - $rails db:create
            - bundle add rspec-rails
            - $rails g rspec:install
            - $ rails g model Book name:string read:string
            - $rails db:migrate
            - $rails g controller Book
            - $rails s
            - add http to browser
            -open local terminal cmd + t
            - $rails c
            - $Book.all
            Book.create(name:'Brave New World' read: 'yes')
            - #Book.create(name: 'Moby Dick', read: 'no')
            - $Book.create(name: 'Outsider', read: 'yes')
            - $Book.all

            Controller method

            ## index actions// index is a list of all things
            - get request
            - read CRUD action
            - controller method: holds the active record query
            -route: defines the url and calls the index method
            -view iterated over the active record array, added html for some structure

            ## show actions // displays one item
            - get request
            - REad CRUD actions
            -controller action
            -route: add parameters, and aliaes
            -view: linked back to home, and from home to  book

            ## new action // gets user data using a form
            - display a form
            - http verb --> get request
            - CRUB --> read
            -controll: use .new method
            - route: re order route
            - view: added links to the form

            ## create // adds content from the form to the database
            - http verb --> POST request
            -CRUD action --> create
            -controller: redirect to books_path
            -route-
            -view

            ## destroy //
            - view <p><%= button_to 'remove book', delete_book_path(@book), method: 'delete' %></p>

            ## edit





                class BookController < ApplicationController

                    //index
                    def index
                        @books = Book.all // active record quiries stored in an instance variable to see all the books
                    end

                    //show
                    def show
                        @book = Book.find(params[:id])
                    end

                    //new
                    def new
                        @book = Book.new
                    end

                    //edit
                    def edit
                        @book = Book.find(param[:id])
                    end

                    //create
                    def create
                        @book = Book.create(book_params) // pass in strong params as argument
                        if @book.valid?
                            redirect_to books_path
                        end
                    end

                    //update
                    def update
                        @book = Book.find(params[:id]) // show, update, destroy, needs a param id
                        @book.update(book_params)
                        if @books.valid?
                            redirect_to book_path
                        end
                    end

                    //destroy
                    def destroy
                        @book = Book.find(params[:id])
                        if @book.destroy
                            redirect_to books_path
                        end
                    end

                    
                    private // private limits where method can called.  the methods defined below private can only be called in the controller

                    private
                    //create strong params, that limits user imput
                    def book_params // controlername_params
                        params.require(:book).permit(:name, :read) //:book matches controller, user can only submit :name and :read as an entry
                    end

                    end
                end
            
            - Routes
                Rails.application.routes.draw do
                    //index, setting root, as: alias
                    root 'books#index'
                    get 'books/:id' => 'books#index, as: 'books' //book#controllermethod

                    //new
                    get 'books/new' => 'book#new', as: 'new_book'

                    //show params is a hash, when passing the symbol :id you get the value of the key, as: alias
                    get 'book/:id' =>'book#show', as: 'book' //acts as a variable to links_to in html.erb

                    //create
                    post 'books' => 'book#create'

                    //edit
                    get 'books/:id/edit' => 'book#edit', as: 'edit_book'

                    //patch/update
                    patch 'book/:id' => 'book#update'

                    //delete
                    delete 'books/id' => 'book#destroy', as: 'delete_book'

                end

            - View
                - new file index.html.erb // same name as the method name
                //index
                - index.html.erb
                    <h2>My reading tracker</h2>
                    <ul>
                        <% @books.each do |value| %>   <-- the alias in route gets passed as parameters in .each
                        <li><%= link_to value.name, aliasname_path(value) %></li> // link to take 2 argument, (aliasNamewith:as)_path(value) 
                        <% end %>
                    </ul>
                    <h5><%= link_to 'Add book', new_book_path %></h5>

                //show
                - show.html.erb
                    <h3><%= @book.name %></h3>
                    <h4> Have i read this book yet? <%= @book.read %></h4>
                -call id in params browser
                    <h5><%= link_to 'Back to landing page books', books_path %></5>
                    <h5><%= link_to 'update book', edit_books_path(@book) %></5>

                // destroy // you need to add ", method: 'delete'"
                    <p><%= button_to 'remove book', delete_book_path(@book), method: 'delete' %></p>

                // new // guides.ruby.org form helpers
                - new.html.erb

                    <h1> Add a Book </h1>
                    <%= form_with model: @book do |form| do %>
                    <% form.label :name %>
                    <% form.text_field :name %>
                    <% form.label :read %>
                    <% form.text_field :read %>
                    <%= form.submit "submit" %>

                // edit 
                - edit.html.erb

                    <h1> Edit a Book </h1>
                    <%= form_with model: @book, method: :patch do |form| do %> //pass in ", method: :patch"
                    <%= form.label :name %>
                    <%= form.text_field :name %>
                    <%= form.label :read %>
                    <%= form.text_field :read %>
                    <%= form.submit "update" %>

                    <p><%= link_to 'back to books', books_path %></p>


        - connect the repo
            - $git remote add ...
            - $git checkout -b main
            - $git add .
            - $git commit -m "initial commit"
            - $ git push origin main