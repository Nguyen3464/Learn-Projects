adhdally
shipcolumn

# pr review

    -tag will and trish in slack
    -trello: card url
    -github: githim pr link

# initial commit

    -dont need to make pull request
    -ping instructors
    - github url of initial commit

# creating initial api

    -refer to sylabus

    - post github classroom link
    - $ rails new cat-tinder-backend -d postgresql -T // create application with postgresql database rspec testing
    - $ rails db:create // create database
    - $ bundle add rspec-rails //package manager
    - $ rails generate rspec:install
    - Add the remote from your GitHub classroom repository //copy $ git remote add origin from classroom link
    - Create a default branch (main)
    - $ git add .
    - $ git commin -m "inital commit"
    - $ git push origin main
    - $ rails server //run server localhost:3000
    - $ rails generate resource Cat name:string age:integer enjoys:text image:text
    - $ rails db:migrate
    - $ psql // to check database on local
    - $ \l // to check database on local
    - rspec spec // check rspec test status for errors

# import seeds file for starter data

    - seeds.rb
    - Cats = [
        {
            name:'kevin',
            age:9 ,
            enjoys:'talks to dogs that walk by',
            image:'url'
        }
        {
            name:'mister',
            age:12,
            enjoys:'stealing human food',
            image:'url'
        }
        {
            name:'luna',
            age:5,
            enjoys:'eating house plants and breaking things',
            image:'url'
        }
        {
            name:'maki',
            age:1,
            enjoys:'talking to himself',
            image:'url'
        }
    ]

    cats.each do |value|
        Cat.create value
        puts "creating cat #{cat}"
    end

    - $ rails db:seed
    - rails c
    - Cats.all // to check instances of Cats from seed files.  If adding new seeds, drop database and reseed database.

# CORS

    - class ApplicationController < ApplicationController::Base
    - skip_before_action :verify_authenticity_token
      end //bc we are reciving data from react this token authenticity restricts other outside data from being commited to database
    - Gemfile
    -  gem 'rack-cors', :require => 'rack/cors'
    - create a file in the config folder initializer
    - cors.rb(folder)
    - Rails.application.config.middleware.  insert_before 0, Rack::Cors do

allow do
origins '\*' # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]

end
end - $bundle

# switching driver

    - $ rails db:create
    - $ rails db:migrate
    - $ rails db:seed

# API Endpoints

    - create an endpoint for every crud action
    - checkout branch api-endpoints
    - class CatsController < ApploccationController

        def index
            cats = Cat.all
            render json: cats
        end

        def create
            cat = Cat.create(cat_params)
            render json: cat
        end

        def update

        end

        def destroy

        end

        private
        def cat_params
            parmas.require(:cat).permit(:name, :age, :enjoys, :image)
        end

    end

# Testing End Points

    - spec<request<cats_spec.rb
    - test live in testing database, seprate from developing database
        - RSpec.describe "Cats", type: :request do
            describe "GET /index" do
                it"gets a list of cats" do
                    Cat.create({
                        name:'Goku',
                        age:12,
                        enjoys:'gormet meals',
                        image:'https://tse1.mm.bing.net/th?id=OIP.ybNQplkD9tiQyUnYAu7tUQHaE8&pid=Api&P=0'
                    })
                    # make out request to specific end point
                    get '/cats'

                    # convert response to json
                    cat = JSON.parse(response.body)
                    expect(response).to have_http_status(200)
                    expect(cat.length).to eq 1
                end
            end

            describe "POST" /create" do
                it "create a cat"
                # create method need params
                cat_params = {
                    cat: {
                        name:'Goku',
                        age:12,
                        enjoys:'gormet meals',
                        image:'https://tse1.mm.bing.net/th?id=OIP.ybNQplkD9tiQyUnYAu7tUQHaE8&pid=Api&P=0'
                    }
                }
                # make the request to the specific endpoint
                post "/cats", params: cat_params
                expect(response).to have_http_status(200)
                cat = Cat.first
                expect(cat.name).to eq 'Kevin'
                expect(cat.age).to eq 9
                expect(cat.enjoys).to eq ''gormet meals'
                expect(cat.image).to eq 'https://tse1.mm.bing.net/th?id=OIP.ybNQplkD9tiQyUnYAu7tUQHaE8&pid=Api&P=0'
            end
            end
        end

    - rspec --> good failure --> then add code in def index to get pass
    - $ -f d // to see test that fails or pass

# Validation

    - spec<models<cat_spec.rb
    require 'rails_helper'

    RSpec.describe Cat, type :model do
        it'should validate name exisit in the extry' do
            cat = Cat.create(age:3, enjoys:'sleeping and more sleeping', image:'url')
            expect(cat.errors[:name]).to_not be_empty
        end

        it 'should validate age existin the entry' do
            cat = Cat.create(name:'kevin', enjoys:'sleeping and more sleeping', image:'url')
            expect(cat.errors[:age]).to_not be_empty
        end

        it 'should validate enjoys exisit in the entry' do
            cat = Cat.create(name:'kevin', age:1, image:'url')
            expect(cat.errors[:enjoys]).to_not be_empty
        end

        it 'should validate url exisit in the entry' do
            cat = Cat.create(name:'kevin', age:1, enjoys:'sleeping and more sleeping')
            expect(cat.errors[:image]).to_not be_empty
        end

        # test for length
        it 'should have an enjoys statment >= 10' do
            cat = Cat.create(name:'kevin', age:1, enjoys:'lessthan10', image:'url')
            expect(cat.errors[:enjoy]).to_not be_empty
        end
    end

    -model<cat.rb

    class Cat < ApplicationRecord
        validates :name, :age, :enjoys, :image presence: true

        validates :enjoys, length:{ minimum: 10 }
    end

    -request<cat_spec.rb

    describe 'cannot create a vat without valid attributes' do
        it 'cannot create a cat without a name' do
            cat_params = {
                cat: {
                    age:2,
                    enjoys:'thisislongerthan10characters',
                    image:'url'
                }
            }
        post '/cats', params: cat_params
        cat = JSON.parse(reponse.body)
        expect(response).to have_http_status(422)
        expect(cat['name']).to include "can't be blank"
        end

        it 'cannot create a cat without an age' do
            cat_params = {
                cat: {
                    name:'kevin',
                    enjoys:'suff',
                    image:'url'
                }
            }
            post '/cats', params: cat_params
            cat = JSON.parse(response.body)
            expect(response).to have_http_status(422)
            expect(cat['age']).to include "can't be blank"
            end
        end

        #update
        describe "cannot update a cat without valid attributes" do
            it 'cannot update a cat without a name' do
                #create a cat with a all attribute
                cat_params = {
                cat: {
                    name:'kevin',
                    age:2,
                    enjoys:'suff',
                    image:'url'
                    }
                }
                post '/cats', params: cat_params
                #call on cat
                cat = Cat.first

                #update by creating new params for update
                update_params = {
                    cat: {
                        name:'',
                        age:2,
                        enjoys:'suff',
                        image:'url'
                    }
                }
                patch "/cats#{cat.id}", params: update_params
                update_cat = JSON.parse(respoinse.body)
                expect(respoinse).to have_http_status(422)
                expect(update_cat['name']).to incliude "can't be blank"
                end
            end
        end
    end

        - $ rails c
        - create an instance of cat without name to see if instance is created cat.create name:'123', age:'123'
        then check cat.errors for rest
        cat = cat.errors('name') --> name: "can't be blank"

        request spec = plural
        model = singilar

# Adding params to Controller for update, validations

    - controller<cats_controller.rb
    class CatsController < ApploccationController

        def create
            cat = Cat.create(cat_param)
            if cat.valid?
                render json: cat
            else
                render json: cat.errors, status: 422
            end

        def update
            cat = Cat.find(params[:id])
            cat.update(cat_params)
            if cat.valid?
                render json: cat
            else
                render json: cat.errors, status 422
            end
        end
    end

# Frontend Intro

# Create React App

    - $ yarn create react-app cat-tinder-frontend
    - $ cd cat-tinder-frontend
    - $ git remote add origin
    - $ git checkout -b main
    - $ get branch -d master
    - $ git add .
    - $ git commit -m "initial commit"
    - $ git push origin main
    - $ git checkout -b frontend-structure

# create folders

src

# Apps.js

    import React, { useState } from "react"
    import { Routes, Route } from 'react-router-dom'
    import Header from './components/Header'
    import Home from './components/Home'
    import CatIndex from './components/CatIndex'
    import CatShow from './components/CatShow'
    import CarNew from './components/CarNew'
    import CatEdit from './components/CatEdit'
    import NotFound from './components/NotFound'
    import Footer from './components/Footer'
    import mockCats from './mockCats'
    import './App.css'
    const App = () => {

        const [cats, setCats] = useState (mockCats)
        console.log(cats)

        return (
            <>
                <h3>App</h3>
                <Header />

                // wrap pages that are rendered on other pages in <routes>

                <Routes>
                <Route path="/" element={<Home />} /> // wrap individual routes with 2 arguments, path to hosted url localhost:3000, element is route
                <Route path="/catindex" element={<CatIndex />} />
                <Route path="/catshow" element={<CatShow />} />
                <Route path="/catnew" element={<CatNew />} />
                <Route path="/catedit" element={<CatEdit />} />
                <Route path="*" element={<NotFound />} /> // notfound needs to be at bottom of routes
                </Routes>

                <Footer />
            <>
        )
    }

    export defult App

# mockCats.js

    const mockCats = [
        {
            id: 1
            name: 'kevin1',
            age: 9,
            enjoys: 'sleeping on porch'
            image: 'url'
        }
        {
            id: 2
            name: 'kevin2',
            age: 9,
            enjoys: 'sleeping on porch'
            image: 'url'
        }
        {
            id: 3
            name: 'kevin3',
            age: 9,
            enjoys: 'sleeping on porch'
            image: 'url'
        }
    ]

    export default mockCats

# components folder

# Footer.js

    import React from "react
    const Footer = () => {
        return (
            <>
                <h3>footer</h3>
            <>
        )
    }

    export defult Footer

# Header.js

    import React from "react"
    const Header = () => {
        return (
            <>
                <h3>Header</h3>
            <>
        )
    }

    export defult Header

# assets folder

# pages folder

# Home.js

    import React from "react"
    const Home = () => {
        return (
            <>
                <h3>Home</h3>
            <>
        )
    }

    export defult Home

# CatIndex.js

    import React from "react"
    const CatIndex = () => {
        return (
            <>
                <h3>CatIndex</h3>
            <>
        )
    }

    export defult CatIndex

# CatNew.js

    import React from "react"
    const CatNew = () => {
        return (
            <>
                <h3>CatNew</h3>
            <>
        )
    }

    export defult CatNew

# CatShow.js

    import React from "react"
    const CatShow = () => {
        return (
            <>
                <h3>CatShow</h3>
            <>
        )
    }

    export defult CatShow

# CatEdit.js

    import React from "react"
    const CatEdit = () => {
        return (
            <>
                <h3>CatEdit</h3>
            <>
        )
    }

    export defult CatEdit

# NotFound.js

    import React from "react"
    const NotFound = () => {
        return (
            <>
                <h3>NotFound</h3>
            <>
        )
    }

    export defult NotFound

# Add React Strap Library

    - $ yarn add bootstrap
    - $ yarn add reactstrap
    - $ yarn add react-router-dom

    - in index.js

        src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'

        import { BrowserRouter } from "react-router-dom" // add this import

        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>

# Testing

    - Vocabulary

        - static tests: testing for syntax errors
        - unit tests: testing individual line of code
        - integration tests: test how code works with legacy code
        - end to end tests: test how user flows through navigation
        - Jest:
        - React Testing Library:
        - assertion:

# Package manager Testing Library

    - Jest:
    - React Testing Library: provides method to help write test, simulates user interaction, to insure UI behaves as desire.  RTI provides virtual doms.
    - $ git checkout -b test-coverage
    - $ yarn test --> continues to run until manual exiting
    - $ ctl + c to exit

# App.test.js

    - create folder in src _test_

    import { render, screen } from '@testing-libary/react'
    import App from './App'

# _test_ Folder

    - create a test file
    - Home.test.js
    - Header.test.js
    - Footer.test.js
    - NotFound.test.js

    # generic test structure
    describe('my function or componnet', () => {
        it('does the following', () => {
            expect()
        })
    })

    - Arrange:
    - Act:
    - Assert:

# Home Testing Coverage

# Home.test.js Unit Test

    import { screen, render } from '@testing-libaray/react'
    import Home from '../pages/home'

    describe("<Home />", () => {
        it('renders the home page for the user"), () => {
            //Arrange
            render(<Home />)
            //Act - act on that condition
            const element = screen.getByText("Its like Tinder but for Cats!") // testing for element rendered on screen
            //Assert - what is expected
            expect(element).toBeInTheDocument()
            // tool to check html rendered on page and gived you appropriate tool to test element
            screen.logTestingPlaygroundURL
            //tool to check html rendered on page
            screen.debug()
        }
    })

    import React from "react"
    const Home = () => {
        return (
            <>
                <h3>Home</h3>
            <>
        )
    }

    export defult Home

# NotFound Testing Coverage

    import { screen, render } from '@testing-libaray/react'
    import NotFound from '../components/NotFound'

    describe("<NotFound />", () => {
        it('renders the NotFound page for the user"), () => {
            //Arrange
            render(<NotFound />)

        }
    })

    import React from "react"
    const NotFound = () => {
        return (
            <>
                <h3>NotFound</h3>
            <>
        )
    }

    export defult NotFound

# Header Testing Coverage

    import { screen, render } from '@testing-libaray/react'
    import Header from '../page/Header'
    import userEvent from "@testing-library/user-event"

    describe("<Header />", () => {
        it('renders the Header page without error"), () => {
            //Arrange
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            )
            const indexLink = screen.getByText(/meet the cats/)i
            expect(indexLink).toBeInTheDocument()

            or
            expect(screen.getByText(/meet the cats/)i)
            expect(indexLink).toBeInTheDocument()
        }

        it('Header has clickable links', () => {
            //Arrange
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            )
            //Act
            //set up section action
            //test click on link - userEvent
            userEvent.click(screen.getByText("Meet the Cats"))
            or
            userEvent.click(screen.getByText("Meet the Cats"), { exact: false }
            or
            userEvent.click(screen.getByText(/meet the cats/)i))
            expect(screen.getByText("Meet the Cats!")).toBeInTheDocument()
            screen.logTestingPlaygroundURL()

        })
    })

    import React from "react"
    import { BrowserRouter } from 'react-router-dom'

    const Header = () => {
        return (
            <>
                <h3>Header</h3>
            <>
        )
    }

    export defult Header

# Footer Testing Coverage

    import { screen, render } from '@testing-libaray/react'
    import Footer from '../Page/Footer'

    describe("<Footer />", () => {
        it('renders the Footer page for the user"), () => {
            //Arrange
            render(<Footer />)
        }
    })


    import React from "react
    const Footer = () => {
        return (
            <>
                <h3>footer</h3>
            <>
        )
    }

    export defult Footer

# CRUD w/ React

# Read Functionality

# Pass props to CatIndex.js

    import React, { useState } from "react"
    import { Routes, Route } from 'react-router-dom'
    import Header from './components/Header'
    import Home from './components/Home'
    import CatIndex from './components/CatIndex'
    import CatShow from './components/CatShow'
    import CarNew from './components/CarNew'
    import CatEdit from './components/CatEdit'
    import NotFound from './components/NotFound'
    import Footer from './components/Footer'
    import mockCats from './mockCats'
    import './App.css'

    const App = () => {

        const [cats, setCats] = useState (mockCats)
        console.log(cats)

        return (
            <>
                <h3>App</h3>
                <Header />

                // wrap pages that are rendered on other pages in <routes>

                <Routes>
                <Route path="/" element={<Home />} /> // wrap individual routes with 2 arguments, path to hosted url localhost:3000, element is route
                <Route path="/catindex" element={<CatIndex cats={cats}/>} /> //passing cats as props to index
                <Route path="/catshow" element={<CatShow />} />
                <Route path="/catnew" element={<CatNew />} />
                <Route path="/catedit" element={<CatEdit />} />
                <Route path="*" element={<NotFound />} /> // notfound needs to be at bottom of routes
                </Routes>

                <Footer />
            <>
        )
    }

    export defult App

# Add Reactstrap and Call Props

    import React from "react"
    import { CardSubtitle, Card, CardBody, title, button } from "reactstrap

    const CatIndex = ( {cats} ) => {

        console.log('Cat Index props:' {cats})
        return (
            <main>
                {cats?.map((value, index) => { //add ? to  pass test
                    return(
                        <>
                            react bootstrap code
                            // pass in props value.name,value.age,value.image
                        </>
                    )
                })}
            </main>
        )
    }

    export defult CatIndex

# Create _test_ files | _test_<CatIndex.test.js

    import {render, screen} from @testing-libarary/react"
    import {BrowserRouter} from "react-router-dom"
    import CatIndex from "../pages/CatIndex"
    improt mockCats from "../mockCats"

    describe("<CatIndex/>", () => {
        it("renders cat cards without error", () => {
            render(
                <BrowserRouter>
                    <CatIndex cats={mockCats} /> //pass mockCats data
                </BrowserRouter>
            )
            mockCats.forEach(value => {
                const catName = screen.getByText(cat.name)
            }) // iterate over mock cat to get cat.name and hold it in a variable
            expect(catName).toBeInTheDocument()
        })
    })

# Terminal run Test

    - $ yarn test
    - good failure = <catIndex /> render cat
    - add ? to CatIndex.js to pass the test bc react renders to quick and ? states if there are cats map()

# Read Functionality CatShow

        import React, { useState } from "react"
    import { Routes, Route } from 'react-router-dom'
    import Header from './components/Header'
    import Home from './components/Home'
    import CatIndex from './components/CatIndex'
    import CatShow from './components/CatShow'
    import CarNew from './components/CarNew'
    import CatEdit from './components/CatEdit'
    import NotFound from './components/NotFound'
    import Footer from './components/Footer'
    import mockCats from './mockCats'
    import './App.css'

    const App = () => {

        const [cats, setCats] = useState (mockCats)
        console.log(cats)

        return (
            <>
                <h3>App</h3>
                <Header />

                // wrap pages that are rendered on other pages in <routes>

                <Routes>
                <Route path="/" element={<Home />} /> // wrap individual routes with 2 arguments, path to hosted url localhost:3000, element is route
                <Route path="/catindex" element={<CatIndex cats={cats}/>} /> //passing cats as props to CatIndex.js
                <Route path="/catshow/:id" element={<CatShow cat={cats}/>} /> //pass /:id to access id, and {cats} as props to CatShow.js
                <Route path="/catnew" element={<CatNew />} />
                <Route path="/catedit" element={<CatEdit />} />
                <Route path="*" element={<NotFound />} /> // notfound needs to be at bottom of routes
                </Routes>

                <Footer />
            <>
        )
    }

    export defult App

    import React from "react"
    import { useParams } from "react-router-dom"

    // use params takes variable from url and uses it as params
    const CatShow = ({ cats }) => {
        const { id } = useParams()
        console.log("id:, "id)
        let selectedCat = cats.find(value => value.id === +id) // .find iterates over cats and renders cat with matching id. +id changes id to number
        return (
            <main>
                    {selectedCat && (
                        <>
                            <img
                            alt = 'cat pic'
                            src = {selectedCat.image}
                            />

                            <h3>{selectedCat.name} likes {selectedCat.enjoys}</h3>
                        </>
                    )}
            </main>
        )
    }

    export defult CatShow

# Create _test_ files | _test_<CatShow.test.js

    import {render, screen} from @testing-libarary/react"
    import { MemoryRouter, Routes, Route } from "react-router-dom"
    import CatShow from "../pages/CatIndex"
    improt mockCats from "../mockCats"

    const renderShow = () => {
        render(
           <MemoryRouter initialEntries={["/catshow/1"]}> // single route lives outside of routs on App.js so we need to wrap it in MemoryRoutes to test
                <Routes>
                    <Route path="/catshow/:id" element={<CatShow cat={cats}/>} />
                </Routes>
            </MemoryRouter>
        )
    }

    describe("<CatShow/>", () => {
        it("renders cat cards without error, with enjoys attribute", () => {
            renderShow()
            expect(screen.getByText(`${mockCats[0].name}, likes ${mockCats[0].enjoys}, {exact: false})).toBeInTheDocuments()
        })
    })

# Terminal run Test

    - $ yarn test
    - good failure = <catShow /> render cat

# Read Functionality button --> Navlink

    import React from "react"
    import { CardSubtitle, CardTitle, CardBody, etc..  } from "reactstrap

    const CatIndex = ( {cats} ) => {

        console.log('Cat Index props:' {cats})
        return (
            <main>
                {cats?.map((value, index) => { //add ? to  pass test
                    return(
                        <>
                            react bootstrap code
                            // pass in props value.name,value.age,value.image
                            </CardSubtitle>
                            <Navlink to={`/catshow/${cat.id}`}> //use Navlink from react-router-dom
                        </>
                    )
                })}
            </main>
        )
    }

    export defult CatIndex

# Create Show functionality

    import {useState, React} from "react"
    import { Form, FormGroup, Label, Input, Button } from "reactstrap"
    import { useNavigate } from "react-router-dom" //alows to redirect navigation page

    const CatNew = ({ createCat }) => {

        const navigate = useNavigate()

        const [newCat, setNewCat] = useState({
            name: "",
            age: "",
            enjoys: "",
            image: ""
        })

        const handleChange = (e)//event => {
            //spread operator makes a copt of state object
            //e.target.name will give the us the key for coloumn we are updating based on imput
            //e.target.value will be the new value in state as its being typed in input
            setNewCat({...newCat, [e.target.name]: e.target.value})
        }

        const handleClick = () => {
            createCat(newCat)
            navigate("/catindex") //catindex in router on app.js
        }

        return(
            <>
                <Form>
                    <FormGroup>
                      <Label for="cat-name">
                        Name
                      </Label>
                      <Input id="cat-name"
                       name="name" 
                       placeholder="Enter //name = column name 
                       cat's name"
                       type="text"
                       onChange={handleChange}
                       value={newCat.name}
                        />
                    </FormGroup>
                <Form>
                <Form>
                    <FormGroup>
                      <Label for="cat-age">
                        Age
                      </Label>
                      <Input id="cat-age"
                       name="age" 
                       placeholder="Enter cat's age" //name = column name
                       type="text"
                       onChange={handleChange}
                       value={newCat.age}
                        />
                    </FormGroup>
                <Form>
                <Form>
                    <FormGroup>
                      <Label for="cat-enjoys">
                        Enjoys
                      </Label>
                      <Input id="cat-enjoys"
                       name="enjoys" 
                       placeholder="Enter cat's enjoys"
                       type="text"
                        onChange={handleChange}
                       value={newCat.enjoys}
                        />
                    </FormGroup>
                <Form>
                <Form>
                    <FormGroup>
                      <Label for="cat-image">
                        Image
                      </Label>
                      <Input id="cat-image"
                       name="image" 
                       placeholder="Enter cat's image"
                       type="text" 
                       onChange={handleChange}
                       value={newCat.image}
                       />
                    </FormGroup>
                    <Button onclick={handleClick}>
                        Submit
                    </Button>
                <Form>
            </>
        )
    }

    export default CatNew

    // create a function in app js

    pass function as props and triger invocation

    const createCat = (createdCat) => {
        console.log("created cat: " createdCat)
    }

    in new route in component call

    {CantNew createCat={createCat}}/> //passing function as props

# Test for Show Functionality

    //create a CatNew.test.js

    import { render, screen } from "@testing-libaray/react"
    import CatNew from "../pages/CatNew"
    import { BrowserRouter} from "react-router-dom"


    describe("<CatNew />", () => {
        it("renders the new cat form", () => {
            render(
                <BrowserRouter>
                    <CatNew/>
                </BrowserRouter>    
            )
            const nameInput = screen.getByRole("textbox" { name: /name/i })
            expect(nameInput).toBeInTheDocument()

            const ageInput = screen.getByRole("textbox" { name: /age/i })
            expect(ageInput).toBeInTheDocument()

            const enjoyInput = screen.getByRole("textbox" { name: /enjoys/i })
            expect(enjoysInput).toBeInTheDocument()

            const imageInput = screen.getByRole("textbox" { name: /image/i })
            expect(imageInput).toBeInTheDocument()
            
        })
        // test for form  
        it('a form with entries for name, age, enjoys, image', () => {
            const formName = screen.getByLabelText('label', {name: /name/i} )
            expect(formName.getAttribute("For")).toEqual("name")
        })
    })

# Fetch

    - fetch method that takes argument of url or location, and package of data. Used to connect frontent to backend
    - fetch returns a promise. A Promis is an object that represents the eventual compleation or failure of a asynchonys operation

        - Three states
        - pending
        - can become fulfiled, recieved a payload of data
        - rejected somthing about the fetch went wrong
# Fetch Read

    //comment out mockCats in import
    //remove mockCats from useState ([])

    import { useState, useEffect } from ....
    App.js
    - const App () => {
        
        const [cats, setCats] = useState([])
        useEffect(() => {
            readCat() // gets all the cats imediately
        }), [] //dependency value

        const readCat = () => {
            fetch('http://localhost:3000/cats')
        }//route to all the cat or index,  this is the request
        .then(response => response.json())  //.then is HoF, response is json object, .json converts response into somthing you can use in javascript
        .then(payload => {
            setCats(payload)
        }) // payload returned will be provided to setCats as an argument
        .catch(error => console.log("Cat read error", error))

        const createCat = (createCat) => {
            fetch("http://localhost:3000/cats", {
                body: JSON.stringify(createCat), // changes cat object into string for JSON
                headers : {
                    "Content-Type": "application/json"
                },
                method: "POST" // changes default GET request to POST for create
            })
            .then(response => response.json())
            .then(() => readCat()) //adding to database doesent return a payload use anoynmous function, readCat() will refresh state to include new cat entered
            .catch(error => console.log("Create cat errors: ", error))
        }
        
        const updateCat = (selectedCat, id) => {
            fetch(`http://localhost:3000/cats/${selectedCat.id}`, {
                body: JSON.stringify(selectedCat),
                headers : {
                    "Content-Type": "application/json"
                },
                method: "PATCH"
            })
            .then(response => response.json())
            .then(() => readCat())
            .catch(error => console.log("Update the cat errors: ", errors))
        }

        // need a button, delete update route
        const deleteCat = ((id) => {
            fetch(`http://localhost:3000/cats/@{id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "DELETE"
            })
            .then(response => response.json())
            .then(() => readCat())
            .catch(error => console.log("Delete the cat errors: ", error))
        })
        return(
            <>
                <CawShow cats={cats} deleteCat={deleteCat}>
            </>
        )
    }

# Fetch Create

    - 

# Fetch Update

    - 

# Fetch Delete

    - 