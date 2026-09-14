export interface ITeamMember {
  id: string;
  name: string;
  designation: string;
  logo: string;
  category: string;
}

export const teamSectionData = {
  badge: 'Team Members',
  title: 'Meet the Team Making Things Happen Every Day',
  description:
    'Our team is made up of passionate professionals who bring their expertise and creativity to every project.',

  tabs: [
    'Administration',
    'IT Department',
    'MIS Team',
    'Helpdesk Executive',
    'Digital Marketing Team',
    'Sales Team',
    'Medical Auditors',
  ],

  members: {
    Administration: [
      {
        id: 'tm-001',
        name: 'Durges Sahu',
        designation: 'Director & CEO',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869254/Gloitel/Profile%20G/ChatGPT_Image_Jun_10_2026_03_20_20_PM_jxpzth.png',
      },
      {
        id: 'tm-002',
        name: 'Janak Sahu',
        designation: 'HR Admin',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789210309/Gloitel/Profile%20G/495e281966f3f9a9c58071e169393b333928ef4e_pfdkw0.png',
      },
      {
        id: 'tm-003',
        name: 'Prashant Dewangan',
        designation: 'Accountant',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205066/Gloitel/Profile%20G/Prashant_lqlpvt.png',
      },
    ],

    'IT Department': [
      {
        id: 'tm-004',
        name: 'Manish Sahu',
        designation: 'Business Consultant',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_02_32_PM_eguhmv.png',
      },
      {
        id: 'tm-005',
        name: 'Mohnish Nishadraj',
        designation: 'Product Manager',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869258/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_06_53_03_PM_rqf0cd.png',
      },
      {
        id: 'tm-006',
        name: 'Zafaryab Khan',
        designation: 'Technical Lead',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_06_16_PM_iabgqm.png',
      },
      {
        id: 'tm-007',
        name: 'Shippu Sharma',
        designation: 'Sr. Software Engineer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869254/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_08_46_PM_w7t6fc.png',
      },
      {
        id: 'tm-008',
        name: 'Moraj Dhwaj',
        designation: 'Sr. Software Engineer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869257/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_06_58_58_PM_nrh6ve.png',
      },
      {
        id: 'tm-009',
        name: 'Yashwant Sonkar',
        designation: 'Software Engineer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869258/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_06_55_13_PM_a2hint.png',
      },
      {
        id: 'tm-010',
        name: 'Manash Dewangan',
        designation: 'Full Stack Developer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869257/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_06_56_46_PM_bc3fmm.png',
      },
      {
        id: 'tm-011',
        name: 'Rahul Sahu',
        designation: 'QA Engineer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869254/Gloitel/Profile%20G/ChatGPT_Image_Jun_11_2026_01_12_24_PM_g7qeof.png',
      },
      {
        id: 'tm-012',
        name: 'Sarang Sursaut',
        designation: 'Full Stack Developer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789210309/Gloitel/Profile%20G/495e281966f3f9a9c58071e169393b333928ef4e_pfdkw0.png',
      },
      {
        id: 'tm-013',
        name: 'Sajjan Pandey',
        designation: 'Java Developer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205067/Gloitel/Profile%20G/Sajjan_nhodv2.png',
      },
      {
        id: 'tm-014',
        name: 'Ayushman Mishra',
        designation: 'Java Developer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205071/Gloitel/Profile%20G/Ayushman_gm7mzq.png',
      },
      {
        id: 'tm-015',
        name: 'Ritesh',
        designation: 'Java Developer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205071/Gloitel/Profile%20G/Ritesh_ngyu4w.png',
      },
      {
        id: 'tm-016',
        name: 'Deepak Saini',
        designation: 'Frontend Developer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205071/Gloitel/Profile%20G/Deepak_g290u4.png',
      },
      {
        id: 'tm-017',
        name: 'Shivdeep Mishra',
        designation: 'Frontend Developer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205071/Gloitel/Profile%20G/Sachin_f1ehto.png',
      },
      {
        id: 'tm-018',
        name: 'Yugal Kishor',
        designation: 'Sr. UI/UX Designer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205067/Gloitel/Profile%20G/Yugal_ugp0nh.png',
      },
      {
        id: 'tm-019',
        name: 'Anshul Khanna',
        designation: 'UI/UX Designer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205070/Gloitel/Profile%20G/Anshul_nthmwk.png',
      },
    ],

    'MIS Team': [
      {
        id: 'tm-020',
        name: 'Ritesh Kumar Tandi',
        designation: 'Manager',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205066/Gloitel/Profile%20G/Rithesh_vk1n6o.png',
      },
      {
        id: 'tm-021',
        name: 'Pradeep Kumar',
        designation: 'Project Manager',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205067/Gloitel/Profile%20G/Pradeep_ew5xro.png',
      },
      {
        id: 'tm-022',
        name: 'Shubham Kumar',
        designation: 'Project Manager',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205065/Gloitel/Profile%20G/WhatsApp_Image_2026-09-12_at_1.44.35_PM_c6sfqc.jpg',
      },
      {
        id: 'tm-023',
        name: 'Amit Kumar Charde',
        designation: 'Sr. MIS Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205067/Gloitel/Profile%20G/Amit_kjiavd.png',
      },
      {
        id: 'tm-024',
        name: 'Archana Ekka',
        designation: 'MIS Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205071/Gloitel/Profile%20G/Archana_sootmq.png',
      },
      {
        id: 'tm-025',
        name: 'Vedvyas Sahu',
        designation: 'MIS Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789213085/Gloitel/Profile%20G/19d78570d91f5aabccd4f0c2412ceca07a2526a5_lqnfsc.png',
      },
      {
        id: 'tm-026',
        name: 'Love Kumar',
        designation: 'MIS Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205067/Gloitel/Profile%20G/Love_hyo1is.png',
      },
    ],

    'Helpdesk Executive': [
      {
        id: 'tm-027',
        name: 'Chandani Manikpuri',
        designation: 'Helpdesk Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205071/Gloitel/Profile%20G/ChatGPT_Image_Sep_12_2026_12_26_44_PM_lccgpb.png',
      },
      {
        id: 'tm-028',
        name: 'Payal Patel',
        designation: 'Helpdesk Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205074/Gloitel/Profile%20G/payal_Patel1_wcbkha.png',
      },
      {
        id: 'tm-029',
        name: 'Neelam Verma',
        designation: 'Helpdesk Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205075/Gloitel/Profile%20G/Neelam_qaoirk.png',
      },
      {
        id: 'tm-030',
        name: 'Nikita Xalxo',
        designation: 'Helpdesk Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205075/Gloitel/Profile%20G/nikita_s39fig.png',
      },
      {
        id: 'tm-031',
        name: 'Himanshee Awsariya',
        designation: 'Helpdesk Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205072/Gloitel/Profile%20G/Aishwariya_gjctcl.png',
      },
      {
        id: 'tm-032',
        name: 'Anjali Manikpuri',
        designation: 'Helpdesk Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205072/Gloitel/Profile%20G/Anjali_kuo3yr.png',
      },
    ],

    'Digital Marketing Team': [
      {
        id: 'tm-033',
        name: 'Prince Dewangan',
        designation: 'Helpdesk Executive',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205064/Gloitel/Profile%20G/Prince_psck93.jpg',
      },
      {
        id: 'tm-034',
        name: 'Rashi Jain',
        designation: 'Video Editor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205065/Gloitel/Profile%20G/Rashi_kyrolj.jpg',
      },
      {
        id: 'tm-035',
        name: 'Shilpi Thakur',
        designation: 'Team Member',
        logo: '',
      },
    ],

    'Sales Team': [
      {
        id: 'tm-036',
        name: 'Arjun Soni',
        designation: 'Team Member',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205065/Gloitel/Profile%20G/Arjun_bndzv3.jpg',
      },
      {
        id: 'tm-037',
        name: 'Vivek Mishra',
        designation: 'Team Member',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205064/Gloitel/Profile%20G/Viviek_mpbc9x.jpg',
      },
    ],

    'Medical Auditors': [
      {
        id: 'tm-038',
        name: 'Dr. Rakesh Sharma',
        designation: 'Sr. Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209570/Gloitel/Profile%20G/Dr._Rakesh_Sharma_gnud95.png',
      },
      {
        id: 'tm-039',
        name: 'Dr. Harish Chaudhary ',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205065/Gloitel/Profile%20G/Dr._Harish_Chaudhary._rggduh.png',
      },
      {
        id: 'tm-040',
        name: 'Dr. Jagritee Patel',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209570/Gloitel/Profile%20G/Dr._Jagritee_Patel_hwjmse.png',
      },
      {
        id: 'tm-041',
        name: 'Dr. Satyendra Sahu',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209570/Gloitel/Profile%20G/Dr._Satyendra_Sahu_ek3sqn.png',
      },
      {
        id: 'tm-042',
        name: 'Dr. Vishal Agrawal',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209570/Gloitel/Profile%20G/Dr._Vishal_Agrawal_zdjlw0.png',
      },
      {
        id: 'tm-043',
        name: 'Dr. Swaraj Ratn Panigrah',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209570/Gloitel/Profile%20G/Dr._Swaraj_Ratn_Panigrahi_r2eno8.png',
      },
      {
        id: 'tm-044',
        name: 'Dr. Harish Chaudhary',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205065/Gloitel/Profile%20G/Dr._Harish_Chaudhary._rggduh.png',
      },
      {
        id: 'tm-045',
        name: 'Dr. Rahul Singhrol',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209569/Gloitel/Profile%20G/Dr._Rahul_Singhrol_grtmii.png',
      },
      {
        id: 'tm-046',
        name: 'Dr. Sandhya Kanwar',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209569/Gloitel/Profile%20G/Dr._Sandhya_Kanwar_cx2hzl.png',
      },
      {
        id: 'tm-047',
        name: 'Dr. Thaneshwar sahu',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209569/Gloitel/Profile%20G/Dr._Thaneshwar_sahu_cruaxa.png',
      },
      {
        id: 'tm-048',
        name: 'Dr. Aishwarya Thakur',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209569/Gloitel/Profile%20G/Dr._Aishwarya_Thakur_w3hqgg.png',
      },
      {
        id: 'tm-049',
        name: 'Dr. Sahil Agrawal',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209569/Gloitel/Profile%20G/Dr._Sahil_Agrawal_cuf5z4.png',
      },
      {
        id: 'tm-050',
        name: 'Dr. Laxmi Dansena',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209569/Gloitel/Profile%20G/Dr._Laxmi_Dansena_lazsf0.png',
      },
      {
        id: 'tm-051',
        name: 'Dr.Sangram Keshari ',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209568/Gloitel/Profile%20G/Dr._Sangram_Keshari_qka6mb.png',
      },
      {
        id: 'tm-052',
        name: 'Dr.Bhupendra Gathe',
        designation: 'Medical Auditor',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789209568/Gloitel/Profile%20G/Dr._Bhupendra_Gathe_l2gvde.png',
      },
    ],
  },
};
