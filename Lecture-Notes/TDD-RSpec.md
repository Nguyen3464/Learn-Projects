# TDD- RSpec

    ##Learning Objectives

        can define behavior driven development
        can define RSpec
        can define gem
        can explain the purpose of the describe, it, and expect statements in a test block
        can write an RSpec test

    ##Vocabulary

        behavior driven development (BDD): 
        gem:
        RubyGems:
        RSpec:
        specs:
        domaine specific language: DSL are specicialized for testing specific task.  in this case specialized for testing ruby code
        rubygems.org for gem

    ## Make Directory ruby-rspec

        - make 2 files
            - book.rb --> template for creating many instance of book, for data and behavior
            - book_spec.rb --> all the test live in this file
                - require 'rspec' --> are files required to run test.  similar to import react from react
                - require_relative 'book.rb' --> give access to book.rb 
            - $ gem instal rspec --> downloads rspec gem

        ## rspec.info for ---> documentation
            - RSpec expectation
            - Built in matchers

    ## book_spec.rb Syntax

        describe 'Class' do
            it 'does stuff' do
                expect .matcher
            end
        end

        two types of expect syntax.
        -data syntax use ()
        -method syntax use {}
    ////////////////////////////

        describe 'Book' do
            it 'when a book is instantiated or created' do
                expect{ Book.new }.not_to raise_error
            end
        end

        - to run test 
            -rspec fileName

        rspec book_spec.rb

        Class book
        end

    ////////////////////////////

    ## Data expect syntax 
        - create a tile for book class

        describe 'Book' do
            it 'when a book is instantiated or created' do
                expect{ Book.new }.not_to raise_error
            end

            it 'has a title' do
            // provide an instance of a book
            my_book = book.new
            my_book.title = 'Brave New World'
            expect(my_book.title).to be_a String
            expect(my_book.title).to eq 'Brave New World'
            end
        end

        class Book
            attr_accessor :title
            def initialize
            @title = title
            end
        end
    
    ////////////////////////

    ## create an author

        describe 'Book' do
            it 'when a book is instantiated or created' do
                expect{ Book.new }.not_to raise_error
            end

            it 'has a title' do
            // provide an instance of a book
            my_book = book.new
            my_book.title = 'Brave New World'
            expect(my_book.title).to be_a String
            expect(my_book.title).to eq 'Brave New World'
            end

            it 'has an author' do
            my_book = book.new
            my_book.author = 'Aldous Huxley'
            expect(my_book.author).to be_a String
            expect(my_book.author).to eq 'Aldous Huxley'
            end
        end
    
        class Book
            attr_accessor :title :author
            def initialize
            @title = title
            @author = author
            end
        end

    ## Add page 1

        describe 'Book' do
            it 'when a book is instantiated or created' do
                expect{ Book.new }.not_to raise_error
            end

            it 'has a title' do
            // provide an instance of a book
            my_book = book.new
            my_book.title = 'Brave New World'
            expect(my_book.title).to be_a String
            expect(my_book.title).to eq 'Brave New World'
            end

            it 'has an author' do
            my_book = book.new
            my_book.author = 'Aldous Huxley'
            expect(my_book.author).to be_a String
            expect(my_book.author).to eq 'Aldous Huxley'
            end

            it 'starts on page 1' do
            my_book = Book.new
            expect(my_book.page).to eq 1
            expect(my_book.page).to be_a Integer
            end
        end
    
        class Book
            attr_accessor :title :author :page
            def initialize
            @title = title
            @author = author
            @page = 1
            end
        end

    ////////////////////////

    ## Method Expect Syntax, add method called read

        describe 'Book' do
            it 'when a book is instantiated or created' do
                expect{ Book.new }.not_to raise_error
            end

            it 'has a title' do
            // provide an instance of a book
            my_book = book.new
            my_book.title = 'Brave New World'
            expect(my_book.title).to be_a String
            expect(my_book.title).to eq 'Brave New World'
            end

            it 'has an author' do
            my_book = book.new
            my_book.author = 'Aldous Huxley'
            expect(my_book.author).to be_a String
            expect(my_book.author).to eq 'Aldous Huxley'
            end

            it 'starts on page 1' do
            my_book = Book.new
            expect(my_book.page).to eq 1
            expect(my_book.page).to be_a Integer
            end

            it 'can read pages' do
                my_book = Book.new
                expect{ my_book.read 5}.to change { my_book.page }.from(1).to(6)
            end

        end
    
        class Book
            attr_accessor :title :author :page
            def initialize
            @title = title
            @author = author
            @page = 1
            end

            def read (pages_read)
                @page += pages_red
            end
        end



    ## create a super class

        -create a another file
        import file in book_respec.rb
        require_relative library.rb

        -book_respec.rb
        describe 'Book' do
            it 'when a book is instantiated or created' do
            expect{ Book.new }.not_to raise_error
        end

            it 'has a title' do
                 // provide an instance of a book
                my_book = book.new
                my_book.title = 'Brave New World'
                expect(my_book.title).to be_a String
                expect(my_book.title).to eq 'Brave New World'
            end

            it 'has an author' do
                my_book = book.new
                my_book.author = 'Aldous Huxley'
                expect(my_book.author).to be_a String
                expect(my_book.author).to eq 'Aldous Huxley'
            end

            it 'starts on page 1' do
                my_book = Book.new
                expect(my_book.page).to eq 1
                expect(my_book.page).to be_a Integer
            end

            it 'can read pages' do
                my_book = Book.new
                expect{ my_book.read 5}.to change { my_book.page }.from(1).to(6)
            end

        end
    
        -book.rb
        class Book
            attr_accessor :title :author :page
            def initialize
            @title = title
            @author = author
            @page = 1
            end

            def read (pages_read)
                @page += pages_red
            end
        end

        describe 'Library' dp
            it 'has to be real' do
                expect{Library.new}.not_to raise_error
            end

            it 'has an array of books' do
                my_libary = Libary.new
                expect(my_libary.book_collection).to be_a Array
            end

            it 'can add books to the array' do
                brave = Book.new
                hamlet = Book.new
                my_libary = Libary.new
                my_libary.add_books(brave)
                my_libary.add_books hamlet
                expect(my_libary.book_collection).not_to be_empty
                expect(my_libary.book_collection).toq contain_exactly(brave, hamlet)
            end

        end



        -libarary.rb
        class Libary
            attr_accessor :book_collection
            def initialize
                @book_collection = []
            end

            def add_books (book)
                @book_collection << book
        end

    ## Refactor 

        before :each do
            @book = book.new
        end
        
        describe 'Book' do
            it 'when a book is instantiated or created' do
            expect{ Book.new }.not_to raise_error
        end

            it 'has a title' do
                 // provide an instance of a book
                my_book = book.new
                my_book.title = 'Brave New World'
                expect(my_book.title).to be_a String
                expect(my_book.title).to eq 'Brave New World'
            end

            it 'has an author' do
                my_book = book.new
                my_book.author = 'Aldous Huxley'
                expect(my_book.author).to be_a String
                expect(my_book.author).to eq 'Aldous Huxley'
            end

            it 'starts on page 1' do
                my_book = Book.new
                expect(my_book.page).to eq 1
                expect(my_book.page).to be_a Integer
            end

            it 'can read pages' do
                my_book = Book.new
                expect{ my_book.read 5}.to change { my_book.page }.from(1).to(6)
            end

        end
    
        -book.rb
        class Book
            attr_accessor :title :author :page
            def initialize
            @title = title
            @author = author
            @page = 1
            end

            def read (pages_read)
                @page += pages_red
            end
        end

        describe 'Library' dp
            it 'has to be real' do
                expect{Library.new}.not_to raise_error
            end

            it 'has an array of books' do
                my_libary = Libary.new
                expect(my_libary.book_collection).to be_a Array
            end

            it 'can add books to the array' do
                brave = Book.new
                hamlet = Book.new
                my_libary = Libary.new
                my_libary.add_books(brave)
                my_libary.add_books hamlet
                expect(my_libary.book_collection).not_to be_empty
                expect(my_libary.book_collection).toq contain_exactly(brave, hamlet)
            end

        end



        -libarary.rb
        class Libary
            attr_accessor :book_collection
            def initialize
                @book_collection = []
            end

            def add_books (book)
                @book_collection << book
        end