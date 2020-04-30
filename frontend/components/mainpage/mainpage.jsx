import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import TransactionIndexContainer from '../transaction/transaction_index_container';
import TransactionFormContainer from '../transaction/transaction_form_container';
import RequestIndexContainer from '../request/request_index_container';

const Mainpage = ({ currentUser, logout, transactions, fetchTransactions }) => {
  return (
    <div className='mainpage'>
      <NavBarContainer />
      <div className='mainpage-body'>
        <div id='mainpage-holder'>
          <div className='mainpage-col1'>
            <div className='mainpage-create-trans'>
              <TransactionFormContainer />
            </div>
            {/* <div className='mainpage-incomplete-trans'>
            </div> */}
            <div className='mainpage-trans'>
              <TransactionIndexContainer />
            </div>
          </div>
          <div className='user-all'>
            <div className='trans-nav'>
              <strong>User Profile</strong>
              
            </div>
            <div className='mainpage-col2'>
              <div className='mainpage-user-prof'>
                <div className='user-prof-1'>
                  <img className='trans-logo-pic' src="profile-logo.png" />
                  <div>{currentUser.username}</div>
                </div>
                <div className='user-credit'>${currentUser.venmoCredit}</div>
                <div>Friends</div>
              </div>
            </div>
            <div className='mainpage-req'>
              sdfsdfsdfsdf
            </div>
          </div>
        </div>
      </div>
      <div id='footer-replace2'>
        <div id='footer-help5'>Developed by Dawinder Singh</div>
        <div id='footer-help'>
          <a href="https://github.com/dawinderS/" target="_blank" className='atag4'><span>Github</span></a>
          <a href="https://www.linkedin.com/in/dawinder-singh/" target="_blank" className='atag4'><span>LinkedIn</span></a>
          {/* <a href="https://github.com/dawinderS/VenmoPlus" target="_blank" className='atag3'><div>Project Repo</div></a>
          <a href="https://github.com/dawinderS/VenmoPlus/blob/master/README.md" target="_blank" className='atag3'><div>Project ReadMe</div></a> */}
        </div>
      </div>

    </div>
  )
};


export default Mainpage;