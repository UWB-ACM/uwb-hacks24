import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
}
    from 'mdb-react-ui-kit';

function Register() {
    return (
        <MDBContainer fluid className='bg-dark'>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol>

                    <MDBCard className='my-4'>

                        <MDBRow className='g-0'>

                            <MDBCol md='6' className="d-none d-md-block">
                                <MDBCardImage src='https://media.segd.org/s3fs-public/styles/galleryformatter_slide/public/UW-W-MCD-1.jpg?itok=mjQ0LrD2' alt="Sample photo" className="rounded-start" fluid/>
                            </MDBCol>

                            <MDBCol md='6'>

                                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                    <h3 className="mb-5 text-uppercase fw-bold">Student registration form</h3>

                                    <MDBRow>

                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
                                        </MDBCol>

                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                                        </MDBCol>

                                    </MDBRow>

                                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='text'/>

                                    <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                                        <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                                        <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                                        <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                                        <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                                        <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Pref not to say' inline />
                                    </div>


                                    <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form4' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='Institutional affiliation (school, employer...)' size='lg' id='form5' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='How did you hear about us?' size='lg' id='form6' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='What country and timezone (EST, PST, MST...) are you located in?' size='lg' id='form4' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='Do you have a team? Going solo?' size='lg' id='form5' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='School' size='lg' id='form6' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='Race' size='lg' id='form4' type='text'/>
                                    <MDBInput wrapperClass='mb-4' label='Is there anything else you would like us to know?' size='lg' id='form5' type='text'/>


                                    <div className="d-flex justify-content-end pt-3">
                                        <button type="button" className="btn btn-secondary">Secondary</button>
                                        <button type="button" className="btn btn-primary">Primary</button>
                                        {/*<MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>*/}
                                    </div>

                                </MDBCardBody>

                            </MDBCol>
                        </MDBRow>

                    </MDBCard>

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Register;