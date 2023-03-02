import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
// import Container from '../components/Container';
const TermAndConditions = () => {
  return (
    <>
        <Meta title={"Term&Conditions"}/>
        <BreadCrumb title="Term&Conditions"/>
        <Container className='policy-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'>
                            
                        </div>
                    </div>
                </div>
        </Container>
       
    </>
  )
}

export default TermAndConditions


//      <Container className="policy-wrapper py-5 home-wrapper-2">
//             <div className="row">
//             <div className="col-12">
//                 <div className="policy"></div>
//             </div>
//             </div>
//       </Container> 