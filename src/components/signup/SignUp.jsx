import React from 'react'
import useSignUpForm from './CustomHooks'
import database from '../../config/firebase'
import Input from '../input'
import { Radio, RadioGroup, FormGroup } from 'rsuite'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import { signup } from '../../config/firebase'


//TODO: find a way to not type ..

const Signup = () => {
    const signup = () => {
        alert(`User Created!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}`)
    }
    function handleTakePhoto(dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto')
    }

    const {  inputs, handleInputChange, handleSubmit } = useSignUpForm(signup)
    const [showForm, setShowForm] = React.useState(0)

    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                function (position) {
                    setShowForm(1) //shows signuppage
                    console.log('Latitude is :', position.coords.latitude)
                    console.log('Longitude is :', position.coords.longitude)
                },
                function (error) {
                    alert(JSON.stringify(error))
                    setShowForm(1)
                    if (error.code == error.PERMISSION_DENIED) console.log('you denied me :-(')
                }
            )
        }
    }, [])

    return (
        <>
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input label="First Name" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />

                        <Input label="Last Name" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
                    </div>
                    <div>
                        <Input
                            Label="Age"
                            type="number"
                            name="age"
                            onChange={handleInputChange}
                            value={inputs.age}
                            placeholder="Select your age"
                            required
                        />
                    </div>
                    <div>
                        <Input onChange={(e) => this.handleChange(e)} type="number" name="minAge" placeholder="Minimum age " />
                        <Input onChange={(e) => this.handleChange(e)} type="number" name="maxAge" placeholder="Maximum age " />
                    </div>
                    <div>
                        <Input label="Email" type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                    </div>
                    <div>
                        <Input label="Password" type="password" name="password1" onChange={handleInputChange} value={inputs.password1} />
                    </div>
                    <div>
                        <Input label="Re-enter Password" type="password" name="password2" onChange={handleInputChange} value={inputs.password2} />
                    </div>
                    <div>
                        <FormGroup controlId="radioList">
                            <RadioGroup name="radioList">
                                <p>Gender</p>
                                <Radio value="Female">Female</Radio>
                                <Radio value="Male">Male</Radio>
                            </RadioGroup>
                        </FormGroup>
                    </div>
                    <Camera
                        onTakePhoto={(dataUri) => {
                            handleTakePhoto(dataUri)
                        }}
                    />
                    {/* WRONG WAY*/}
                    {/*<Camera onTakePhoto={handleTakePhoto}/>*/} {/* RIGHT WAY*/}
                    <button type="submit">Sign Up</button>
                </form>
            ) : (
                <div> You must share your location</div>
            )}
        </>
    )
}
export default Signup
