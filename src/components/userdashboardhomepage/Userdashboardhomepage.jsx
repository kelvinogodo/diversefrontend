import React from 'react'
import './userdashboardhomepage.css'
import { RiLuggageDepositLine } from 'react-icons/ri'
import {MdOutlineDone} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
import {FaUser} from 'react-icons/fa'
import {MdOutlineContentCopy} from 'react-icons/md'
import { FiLink } from 'react-icons/fi'
import { FaUsers } from 'react-icons/fa'
import { FaExchangeAlt,FaHandHoldingUsd } from 'react-icons/fa'
import {CgArrowsExchange} from 'react-icons/cg'
import Roadmapp from '../Roadmapp'
import Loader from '../Loader'
const Userdashboardhomepage = ({route}) => {
    const navigate = useNavigate()
    const [clipBoard, setClipBoard] = useState(false)
    const [userData, setUserData] = useState()
    const [loader,setLoader] = useState(false)
    const copy = ()=>{
        navigator.clipboard.writeText(clipRef.current.value)
    }
    const clipRef = useRef(null)
    useEffect(()=>{
        setLoader(true)
        if(localStorage.getItem('token')){
            const getData = async()=>{
                const req = await fetch(`${route}/api/getData`,{
                    headers: {
                    'x-access-token': localStorage.getItem('token')
                    }
                })
                const res = await req.json()
                setUserData(res)

                if (res.status === 'error') {
                    navigate('/login')
                }
                setLoader(false) 
            }
            getData()
        }
        else{
            navigate('/login')
        }
    },[])
  return (
    <div className='homewrapper'>
      {
        loader &&
          <Loader />
      }
    <div className='dashboardhomepage'>
       
        <div className="dashboardhomepagewrapper">
            <div className="welcome-kyc-section">
                <p>wallet Balance</p>
                <div className="username-container">
                    <h2>${userData ? userData.funded : ''}.00 USD</h2>
                </div>
            </div>
                  <div className="dash-btn-container">
                      <button className='dash-btn' onClick={() => navigate('/fundwallet')}>
                          <CgArrowsExchange />deposit
                      </button>
                      <button className='dash-btn' onClick={() => navigate('/withdraw')}>
                          <FaHandHoldingUsd />withdraw
                      </button>
                  </div>   
            <div className="overview-container">
                      <div className="overview-card">
                        <div className="overview-icon-wrapper" onClick={()=>navigate('/myprofile')}>
                        <div className="overview-icon-container">
                            <FaUser />
                        </div>
                        <small>profile</small>
                        </div>
                        <div className="overview-icon-wrapper" onClick={()=>navigate('/plans')}>
                        <div className="overview-icon-container">
                            <RiLuggageDepositLine />
                        </div>
                        <small>invest</small>
                        </div>
                        <div className="overview-icon-wrapper" onClick={()=>navigate('/referrals')}>
                        <div className="overview-icon-container">
                            <FaUsers />
                        </div>
                        <small>referrals</small>
                        </div>
                        <div className="overview-icon-wrapper" onClick={()=>navigate('/transactions')}>
                        <div className="overview-icon-container">
                            <FaExchangeAlt />
                        </div>
                        <small>transactions</small>
                        </div>             
                    </div>
                </div>
            <div className="price-chartt-section">
            <iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" style={{width:"100%",height:"536px",scrolling:"none",marginWidth:"0",marginHeight:"0", frameBorder:"0", border:"0",lineHeight: '14px'}}></iframe>
            </div>
            <div className="referral-section">
                <div className="referral-card1">
                    <div className="referraltext-wrapper">
                        <div className="referral-text-container">
                            <h2>refer us and earn 10% of every downline deposit</h2>
                            <p>Use the bellow link to invite your friends.</p>
                        </div>
                        <button className="invite-btn">invite</button>
                    </div>
                    <div className="click-to-copy-container">
                        <span className='clipboard-btn'>
                            <FiLink />
                        </span>
                        <input type="text" value={userData ? `diversewealth.org/user/${userData.username ? userData.username : userData.referral}` : ''} ref={clipRef}/>
                        <span className={`clipboard-btn ${clipBoard ? <MdOutlineDone /> : ''}` } onClick={()=>{
                            copy()
                            setClipBoard(!clipBoard)
                              }}>   
                            {
                                clipBoard ?
                                <MdOutlineDone /> : <MdOutlineContentCopy />
                            }
                        </span>
                    </div>  
                </div>
                <div className="referral-card1">
                    <div className="referraltext-wrapper">
                        <div className="referral-text-container">
                            <h2>my referral</h2>
                        </div>
                        <div className="referral-text-container small-card">
                            <h2>{userData ? userData.referred.length : '      '}</h2>
                            <p>referred users</p>
                        </div>
                        <div className="referral-text-container small-card">
                            <h2>{userData ? userData.refBonus : '        '} USD</h2>
                            <p>referral commission</p>
                        </div>

                    </div>
                    <img src="/bar4.png" alt="" className="bar4" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Userdashboardhomepage