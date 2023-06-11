import { Button } from 'bootstrap'
import React from 'react'

export default function loginPage() {
    return (
        <div class="container overflow-hidden text-center">
            <div class="row  g-2">
                <div class="col-6">
                    <div class="bg-image d-flex justify-content-center align-items-center w-100 vh-100"
                        style={{ backgroundImage: `url('/images/hero2.png')` }}>
                        <h1 class=" w-50 text-white text-start title">Instapract <br /> User Centric Teleconsulting Expert
                            Opnion Platform.</h1>
                    </div>
                </div>

                <div class="col-6 col-xl-4 offset-xl-1">
                    <div class="text-start py-4">
                        <img src='./images/logo.png'></img>
                    </div>
                    <div class="text-start py-3">
                        <h2 class="h1 fw-bold mb-4 pt-5 pt-md-0">Login</h2>
                        <hr class="hr" style={{ border: '1px solid #257fac;' }} />
                        {/* input */}
                        <div class="form-floating mb-4">
                            <input type="text" id="form3Example3" formControlName="username"
                                class="form-control form-control-lg" placeholder="Enter a valid user name" />
                            <label class="form-label" for="form3Example3">User Name</label>
                        </div>
                        {/* password */}
                        <div class="form-floating mb-3">
                            <input type="password" id="form3Example4" formControlName="password" class="form-control form-control-lg"
                                placeholder="Enter password" />
                            <label class="form-label" for="form3Example4">Password</label>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        {/* <!-- Checkbox --> */}
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="submit" class="btn btn-green btn-lg w-100"
                            style={{ paddingLeft: '2.5rem;', paddingRight: ' 2.5rem;', color: 'white', backgroundColor: '#338BA8' }}>
                            Login</button>


                    </div>
                </div>

            </div>

        </div>
    )
}