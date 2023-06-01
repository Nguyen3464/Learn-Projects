# Authentication vs Authorization

    - Authentication: is personal to you
    - Authorization: allows you to log in

    $ rails new apartment-app-backend -d postgresql -T
    $ cd in directory
    $ rails db:create
    $ bundle add rspec-rails
    $ rails generate rspec:install
    $ bundle add devise
    $ rails generate devise:install
    $ raills generate devise User
    $ rails db:migrate
    $ rails c
    $ User.all to check table in database
    $ rails generate resource Aparment street:string unit:string city:string state:string square_fottage:number price:string:bedrooms:integer bathroom:float pets:string image:text user_id:integer
    $ rails db:migrate
    - class User < ApplicationRecord
        has_many :apartments

    - class Apartment < ApplicationRecord
        belongs_to :user

    - seeds.rb
    user1 = User.where(email: "tsting1@example.com").first_or_create(password: "password", password_confirmation: "password")  //quiries database to see if this submited entry is unique, if so create, if not do not create

    user2 = User.where(email: "tsting2@example.com").first_or_create(password: "password", password_confirmation: "password")

    user1.create
    user2.create

    $ rails db:seed
    $ rails c // test 
    user1.create
    user2.create

    apartment1 = [
        {
            street: 'streetName',
            unit: '90',
            city: 'cityName',
            state: 'stateName',
            square_footage: 1000,
            price: '1800',
            bedroom: 2,
            bathroom: 1.5,
            pets: 'yes!',
            image: 'image.url'
        },
        {
            street: 'streetName',
            unit: '100',
            city: 'cityName',
            state: 'stateName',
            square_footage: 1500,
            price: '2100',
            bedroom: 4,
            bathroom: 2.0,
            pets: 'yes!',
            image: 'image.url'
        }
    ]

    apartment2 = [
        {
            street: 'streetName',
            unit: '200',
            city: 'cityName',
            state: 'stateName',
            square_footage: 1400,
            price: '1600',
            bedroom: 3,
            bathroom: 1.5,
            pets: 'yes!',
            image: 'image.url'
        }
    ]

    apartments1.each do |apartment|
        user1.apartments.create(apartment)
        put "cresting: #{apartment}"
    end

    apartments2.each do |apartment|
        user1.apartments.create(apartment)
        puts "cresting: #{apartment}"
    end

    $ rails db:seed
    $ rails c
    $ User.all // check User
    $ Apartment.all // check appartments relation to User

    $ git checkout -b main
    $ add remote github files
    $ git add .
    $ git commit -m "initial commit"
    $ git push origin main
    $ 

# Validations

    // use the let method ot set user as a variable, create a user and assign to a :user variable
    
    //Validations: exclude the attribute that your testing for in the it statement, user_id is being assigned through User and does not need to be tested for.  Validate for each attribute

    let(:user) { User.create(email: 'testing@example.com, password: 'password', password_confermation: 'password')}

    it "should have valid street" do
        apartment = user.apartments.create(
            unit: '200',
            city: 'cityName',
            state: 'stateName',
            square_footage: 1400,
            price: '1600',
            bedroom: 3,
            bathroom: 1.5,
            pets: 'yes!',
            image: 'image.url'
        )
        expect(apartment.errors[:street]).to include "can't be blank"
    end

    //test in rails console to for expected failure, and passing test

# Sign in, Sign up


    const Sign In = () => {
        const handleSubmit =() => {
            console.log(somthing)
        }
        return(
            <form>
            //import form from react strap
            </form>
        )
    }

    const Sign Up = () => {
        const handleSubmit =() => {
            console.log(somthing)
        }
        return(
            <form>
            //import form from react strap
            </form>
        )
    }

    //add routes to App.js
    const App = () => {
        const [currentUser, setCurrentUser] = useState(mockUser[0]) // fake login, so pass in a user to simulate user logged in
        const [apartments, setApartments] = useState(mockApartments)
        console.log(currentUser)
        console.log(apartments)
        return(
            <header current_user={currentUser}>
            <Routes>
                <Route path="/signin element={<SignIn />}>
                <Route path="/signup element={<SignUp />}>
                <Route path="/show/:id" element={<ApartmentIndex apartments={apartments} />} >
                <Route path="/apartmentprotectedindex element="{ApartmentProtectedIndex apartment={apartments} current_user={currentUser} />} >
            </Routes>
        )
    }
# ApartmentProtectedIndex

    //rename to MyApartments
    import { Card, CardBody, CardTitle, CardSubtitle, Button }
    import { NavLink } from "react-router-dom"

    const ApartmentProtectedIndex = ({apartments, current_user}) => {
        //use .filter() to find all apartments belonging to user

        const myApartments = apartments?.filter(apartment => current_user?.id = apartment.user_id)
        console.log(apartment)
        console.log(current_user)
        return{
            <>
                ApartmentProtectedIndex.map()
                <card reactstrap import>
            </>
        }
    }

    export default ApartmentProtectedIndex

# Conditional Rendering Through Navigation
    
    const Navigation = ({current_user}) => {
        console.log("nav: ", current_user)
        return(
            {current_user && 
            <>
            <NavLink to="/apartmentprotectedindex">MyListing</NavLink>
            <NavLink to="/apartmentnew">Create Listing</NavLink>
            // add log out function button with redirect
            </>
            }

            {!current_user &&
            <>
            <otherNavLinks>
            view listing
            login in 
            sign up
            </>
            }



        )
    }


    
# JWT with Devise for Authentication

# JWT Backend
    -notes in read me apt-app

    -header is a  small JSON object that tells us what kind of algorithm should be used to encrypt and decrypt the message
    - payload
    - signiature

    - user logs in
    systems creats jwt
    - client stores the token 
    - server verifies authenticity with secret key

    - add gem file
    - update cores $ bundle
    - copy code snipit into cors file
    - disable flash messages api/config/initializer/devise.rb line 256, delete whats in array
    - $ rails g devise :controllers user -c registration sessions
    - controllers/users/registartion copy code snipit for registration pase in file
    - controller/users/session copy code snipit for sessions paste in file
    - $ config/routes.rb , copy code snipt minus private test, * keep resources
    - $ rails db:migrate
    - $ railsdb:reset // drops,creates,migrates
    - $ rails db:migrate as a confirmation
    - vendor folder, create a .env file
    - create variable to store secret key that is generatated for JWT
    - DEVISe_JWT_SECRET_KEY=!@#$!@#@#R#$#@$@#@

    - $ bundle exec brake secret, copy and past ey into DEVISE variable

    - in vendor/gitingnore file
    past add .env

    -configure devise 
    - config/initializer
    - copy paste code step 7

    - Revocation of Token
    - $ rails generate model jwt_denylist
    - db/migrate copy paste code from step 8 into migrate file
    - $ rails db:migrate
    models/user.rb
    replace :recoverable
    with code :jwt
    has_many :apartments

    - $ stops running servers
    lsof -ti:3000 | xargs kill -9 this one stops all servers

# JWT Frontend

    -notes in frontend read me

    app.js

    -comment mock apartment, users

    - current_user state set to null
    - apartment set to empty array

    signup.js

    //hook to refer to input elements in user interface and access and use value
    //import useRef
    //pass ref in return
    // capture data and put into form we can use

    import { useRef } from "react"

    const Signup = () => {

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault() //prevent default behavior and use fetch
        const formData = new FormData(formRef.current)
        //create a variable to store a new instance of formData
        const data = Object.formEntries(formData)
        //
        const userInfo = {
            "user": { email: data.email, password: data.password}
        } //create a variable that JWT can utilize
        
    } 


    return(
        <form ref={formRef} onSubmit={handleSubmit}>
    )
    }

    signUp.js

        import { useRef } from "react"

    const Signup = () => {

    const formRef = useRef()
    const handleSubmit = () => {
        const formData = new FormData(formRef.current)
        //create a variable to store a new instance of formData
        const data = Object.formEntries(formData)
        //
        const userInfo = {
            "user": { email: data.email, password: data.password}
        } //create a variable that JWT can utilize
        
    } 


    return(
        <form ref={formRef} onSubmit={handleSubmit}>
    )
    }

    app.js

    const url = "http://localhost:3000"

    local storage allows to store keyvalue pairs, and remains after browser is closed

    - set item stores value in local storage
        const login = (userInfo) => {
            fetch(`${url}/login`, {
                body: JSON.stringify(userInfo),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/son"
                },
                method: 'POST
            })
            .then(response => {
                //store token
                localStorage.setItem("token", response.header.get("Authorization"))
                return response.json()
            })
            .then(payload => {
                setCurrentUser(payload)
            })
            .catch(error => console.log('login errors:', error))
        }
        const signUp = (userInfo) => {
            fetch(`${url}/signup`, {
                body: JSON.stringify(userInfo),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/son"
                },
                method: 'POST
            })
            .then(response => {
                //store token
                localStorage.setItem("token", response.header.get("Authorization"))
                return response.json()
            })
            .then(payload => {
                setCurrentUser(payload)
            })
            .catch(error => console.log('login errors:', error))
        }


    <Route pass login to login page as props>

    login.js
    pass props
    call login props in handlesubmit

    import useNavigate


    login(userInfo)
    navigate('/')
    e.target.reset()// clear form after handlesubmit is called

    - get item retireves it
    - remove item removes it
    -



    


    


