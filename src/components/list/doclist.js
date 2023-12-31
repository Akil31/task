import React from "react";

export default function Doclist() {
    return (
        <div class="container-fluid bg">
            <section class="container">
                <div class="py-5">
                    <div class="mb-5">
                        <h3>List Of Available Doctors</h3>
                    </div>
                    <div class="card bg-white p-3 my-3 border-0 shadow-sm" />
                    <div class="row d-flex">
                        <div class="col-6 text-start">
                            <div class="row">
                                <div class="col-2 mx-0 px-0 align-self-center">
                                    <img src="{{doctor.profile_picture}}" alt="mdo" width="45" height="45"
                                        class="rounded-pill mx-auto d-block me-3"/>
                                </div>
                                <div class="col">
                                    {/* <span class="fs-5 me-3">{{ doctor.name }} <span class="{{doctor.online_status}}">{{ doctor.online_status }}</span></span><br>
                                        <span>{{ doctor.specialty[0].name }}</span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-6 align-self-center text-end">
                            <button class="btn btn-green px-5 py-2" routerLink="/videocheck">Connect</button>
                        </div>
      </div>

                </div >
            </section >
        </div >
    )
}