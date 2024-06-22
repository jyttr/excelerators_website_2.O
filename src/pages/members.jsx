import React from 'react'

import "../css/members.css"

export default function Members() {


  const members = [
    ['Amal Salih J', 'panel', 'Manager', 'amal_salih.jpeg'],
    ['Hari T', 'panel', 'Manager', 'hari_t_25.jpeg'],
    ['Sreehari V B ', 'panel', 'Manager (Ebike Captian )', 'sreehari_25.jpeg'],
    ['Deepu R', 'panel', 'Design Head', 'deepu_25.jpg'],
    ['Pranav kp', 'panel', 'Production head ', 'pranav_kp.jpeg'],
    ['Shifa Sherin', 'panel', 'Treasurer', 'shifa_25.jpg'],
    ['Nithya A S', 'subpanel', '', 'nithya_as_26.jpg'],
    ['Navadeep Satheesh', 'subpanel', '', 'navadeep_26.jpeg'],
    ['Akshay Baburaj ', 'technical team', '', 'akshay_baburaj_26.jpg'],
    ['J Maheshwari ', 'technical team', '', 'mahi_26.jpeg'],
    ['Vishnu Kumar B', 'technical team', '', 'nithya_as_26.jpg'],
    ['Jineesh C ', 'technical team', '', 'jineesh_26.jpeg'],
    ['Nikhil c', 'Media', '', 'nikhil_c_26.jpg'],
    ['Alex Benny', 'technical team', '', 'alex_benny_27.jpg'],
    ['Yadhukrishna A ', 'technical team', '', 'yadhukrishna_26.jpg'],
    ['Mehdabin E N ', 'technical team', '', 'nithya_as_26.jpg'],
    ['S A SOORYA NARAYAN ', 'technical team', '', 'sooryanarayanan_26.jpg'],
    ['SHUHAIB', 'technical team', '', 'shuhaib_26.jpg'],
    ['Rohit Jayan ', 'technical team', '', 'rohth_jayan_26.jpg'],
    ['GOKUL O K PILLAI ', 'technical team', '', 'gokul_25.jpg'],
    ['Vignesh s s panicker ', 'technical team', 'Member ', 'vignesh_26.jpg'],
    ['Ananthakrishnan K ', 'Media', '', 'ananthakrishnan_26.jpg'],
    ['Junaid n v', 'technical team', '', 'junaid_26.jpg'],
    ['Abhay v', 'Media', '', 'abhay_26.jpeg'],
    ['Muhammed Fawas T ', 'technical team', '', 'fawas_27.jpg'],
    ['Anjana Vijaya Kumar ', 'technical team', 'Auto electrical ', 'anjana_vijay_26.jpg'],
    ['KARTHIK C ', 'technical team', '', 'karthik_c.jpg'],
    ['Abhiram k', 'technical team', '', 'abhiram_26.jpg'],
    ['Anshil', 'technical team', '', 'anshil_26.jpg'],
    ['Aditya Jayan', 'technical team', '', 'aditya_jayan.jpg'],
    ['Mohamed Akther ', 'technical team', '', 'akther_26.jpg'],
    ['Eldhose Joy ', 'technical team', '', 'eldhose_joy_26.jpg'],
    ['ASLAM ARIF K A', 'technical team', '', 'aslam_arif.jpg'],
    ['S Vidyasagar ', 'technical team', 'Electrical  head ', 'vidya_sagar.jpg'],
    ['DEVARAJ P', 'technical team', '', 'devraj_26.jpeg'],

  ]

  return (
    <div id = "members_page">

      {/* <h1>TEAM</h1> */}

      <div class="members_page_grid">

        {
          members.map((member) => {

            return (
              <div class="members_page_singleMember" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div class="member_page_profile_pic">
                  <img src={require(`../res/all_images/members/${member[3]}`)} alt="" />
                </div>
                <div class="members_page_details">
                  <h3 className = "members_page_name"  >{member[0]}</h3>
                  {/* <h4>{member[1]}</h4> */}
                  <h4 className='members_page_role' >{ (member[1]=="panel")?member[2]:member[1] }</h4>
                </div>
              </div>

            )

          })
        }







      </div>

    </div>
  )
}
