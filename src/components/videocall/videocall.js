import React from "react";

export default function VideoCall() {
    return (
        <div>

            <div class="container-fluid">
                <div class="row d-flex">
                    <div class="col-12 col-md-8">
                        <div class="bg-image d-flex  w-100 h-100"
                            style={{backgroundImage: `url('./images/video.png')`,height: '450px;'}}>
                            <div class="text-white text-start title btn-green" style={{alignSelf: 'flex-end;width: -webkit-fill-available',height:' 60px;'}}>
                                <div class="p-2" style={{textAlign: '-webkit-center;'}}>
                                    <div class="d-flex justify-content-around align-items-center w-25">
                                        <span class=""><i class="bi bi-mic-mute-fill fs-3"></i></span>
                                        <span class=""><i class="bi bi-camera-video-off-fill fs-3"></i></span>
                                        <span class="text-danger"><i class="bi bi-telephone-fill fs-3"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">

                        <div class="pt-3 pe-3 overflow-scroll" data-mdb-perfect-scrollbar="true"
                            style={{position:' relative;', height: '350px;'}}>

                            <div class="d-flex flex-row justify-content-start">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                    alt="avatar 1" style={{width:' 45px;', height:' 100%;'}}/>
                                <div>
                                    <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor:' #f5f6f7;'}}>Lorem ipsum
                                        dolor
                                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.</p>
                                    <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                                </div>
                            </div>

                            <div class="d-flex flex-row justify-content-end">
                                <div>
                                    <p class="small p-2 me-3 mb-1 text-white rounded-3 btn-green">Ut enim ad minim veniam,
                                        quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                </div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{width:' 45px;', height:' 100%;'}} />
                            </div>

                            <div class="d-flex flex-row justify-content-start">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                    alt="avatar 1" style={{width:' 45px;', height:' 100%;'}}/>
                                <div>
                                    <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor:' #f5f6f7;'}}>Duis aute
                                        irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                    <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                                </div>
                            </div>

                            <div class="d-flex flex-row justify-content-end">
                                <div>
                                    <p class="small p-2 me-3 mb-1 text-white rounded-3 btn-green">Excepteur sint occaecat
                                        cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                </div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{width:' 45px;', height:' 100%;'}} />
                            </div>

                            <div class="d-flex flex-row justify-content-start">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                    alt="avatar 1" style={{width:' 45px;', height:' 100%;'}} />
                                <div>
                                    <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor:' #f5f6f7;'}}>Sed ut
                                        perspiciatis
                                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                        rem
                                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta
                                        sunt explicabo.</p>
                                    <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                                </div>
                            </div>

                            <div class="d-flex flex-row justify-content-end">
                                <div>
                                    <p class="small p-2 me-3 mb-1 text-white rounded-3 btn-green">Nemo enim ipsam
                                        voluptatem quia
                                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                        qui
                                        ratione voluptatem sequi nesciunt.</p>
                                    <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                </div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{width:' 45px;', height:' 100%;'}} />
                            </div>

                            <div class="d-flex flex-row justify-content-start">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                    alt="avatar 1" style={{width:' 45px;', height:' 100%;'}}/>
                                    <div>
                                        <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7;'}}>Neque porro
                                            quisquam
                                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                            numquam
                                            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                                    </div>
                            </div>

                            <div class="d-flex flex-row justify-content-end">
                                <div>
                                    <p class="small p-2 me-3 mb-1 text-white rounded-3 btn-green">Ut enim ad minima veniam,
                                        quis
                                        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                        commodi
                                        consequatur?</p>
                                    <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                </div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{width:' 45px;', height:' 100%;'}} />
                            </div>

                        </div>

                        <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 3" style={{width:' 45px;', height:' 100%;'}} />
                            <input type="text" class="form-control form-control-lg" id="exampleFormControlInput2"
                                placeholder="Type message" />
                            <a class="ms-1 text-muted"><i class="bi bi-plus-circle-fill fs-4"></i></a>
                            <a class="ms-3 text-muted"><i class="bi bi-emoji-wink fs-4"></i></a>
                            <a class="ms-3"><i class="bi bi-send-fill fs-4"></i></a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}