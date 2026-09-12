export interface ITeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  category: string;
}

export const teamSectionData = {
  badge: 'Team Members',
  title: 'Meet the Team Making Things Happen Every Day',
  description:
    'Our team is made up of passionate professionals who bring their expertise and creativity to every project.',

  tabs: [
    'Administration',
    'IT Team',
    'MIS Team',
    'Helpdesk Executive',
    'Creative & Support',
    'Leadership',
    'Medical Auditors',
  ],

  members: {
    Administration: [
      {
        id: 'tm-001',
        name: 'Durges Sahu',
        designation: 'Director & CEO',
        image:
          'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869254/Gloitel/Profile%20G/ChatGPT_Image_Jun_10_2026_03_20_20_PM_jxpzth.png',
      },
      {
        id: 'tm-002',
        name: 'Janak Sahu',
        designation: 'HR Admin',
        image: '/images/team/janak-sahu.jpg',
      },
      {
        id: 'tm-003',
        name: 'Prashant Dewangan',
        designation: 'Accountant',
        image: '/images/team/prashant-dewangan.jpg',
      },
    ],

    'IT Team': [
      {
        id: 'tm-004',
        name: 'Manish Sahu',
        designation: 'Business Consultant',
        image: '/images/team/manish-sahu.jpg',
      },
      {
        id: 'tm-005',
        name: 'Mohnish Nishadraj',
        designation: 'Product Manager',
        image: '/images/team/mohnish-nishadraj.jpg',
      },
      {
        id: 'tm-006',
        name: 'Zafaryab Khan',
        designation: 'Technical Lead',
        image: '/images/team/zafaryab-khan.jpg',
      },
      {
        id: 'tm-007',
        name: 'Shippu Sharma',
        designation: 'Sr. Software Engineer',
        image: '/images/team/shippu-sharma.jpg',
      },
      {
        id: 'tm-008',
        name: 'Moraj Dhwaj',
        designation: 'Sr. Software Engineer',
        image: '/images/team/moraj-dhwaj.jpg',
      },
      {
        id: 'tm-009',
        name: 'Yashwant Sonkar',
        designation: 'Software Engineer',
        image: '/images/team/yashwant-sonkar.jpg',
      },
      {
        id: 'tm-010',
        name: 'Manash Dewangan',
        designation: 'Full Stack Developer',
        image: '/images/team/manash-dewangan.jpg',
      },
      {
        id: 'tm-011',
        name: 'Rahul Sahu',
        designation: 'QA Engineer',
        image: '/images/team/rahul-sahu.jpg',
      },
      {
        id: 'tm-012',
        name: 'Sarang Sursaut',
        designation: 'Full Stack Developer',
        image: '/images/team/sarang-sursaut.jpg',
      },
      {
        id: 'tm-013',
        name: 'Sajjan Pandey',
        designation: 'Java Developer',
        image: '/images/team/sajjan-pandey.jpg',
      },
      {
        id: 'tm-014',
        name: 'Ayushman Mishra',
        designation: 'Java Developer',
        image: '/images/team/ayushman-mishra.jpg',
      },
      {
        id: 'tm-015',
        name: 'Ritesh',
        designation: 'Java Developer',
        image: '/images/team/ritesh.jpg',
      },
      {
        id: 'tm-016',
        name: 'Deepak Saini',
        designation: 'Frontend Developer',
        image: '/images/team/deepak-saini.jpg',
      },
      {
        id: 'tm-017',
        name: 'Sachin Mishra',
        designation: 'Frontend Developer',
        image: '/images/team/sachin-mishra.jpg',
      },
      {
        id: 'tm-018',
        name: 'Yugal Kishor',
        designation: 'Sr. UI/UX Designer',
        image: '/images/team/yugal-kishor.jpg',
      },
      {
        id: 'tm-019',
        name: 'Anshul Khanna',
        designation: 'UI/UX Designer',
        image: '/images/team/anshul-khanna.jpg',
      },
    ],

    'MIS Team': [
      {
        id: 'tm-020',
        name: 'Ritesh Kumar Tandi',
        designation: 'Manager',
        image: '/images/team/ritesh-kumar-tandi.jpg',
      },
      {
        id: 'tm-021',
        name: 'Pradeep Kumar',
        designation: 'Project Manager',
        image: '/images/team/pradeep-kumar.jpg',
      },
      {
        id: 'tm-022',
        name: 'Shubham Kumar',
        designation: 'Project Manager',
        image: '/images/team/shubham-kumar.jpg',
      },
      {
        id: 'tm-023',
        name: 'Amit Kumar Charde',
        designation: 'Sr. MIS Executive',
        image: '/images/team/amit-kumar-charde.jpg',
      },
      {
        id: 'tm-024',
        name: 'Archana Ekka',
        designation: 'MIS Executive',
        image: '/images/team/archana-ekka.jpg',
      },
      {
        id: 'tm-025',
        name: 'Vedvyas Sahu',
        designation: 'MIS Executive',
        image: '/images/team/vedvyas-sahu.jpg',
      },
      {
        id: 'tm-026',
        name: 'Love Kumar',
        designation: 'MIS Executive',
        image: '/images/team/love-kumar.jpg',
      },
    ],

    'Helpdesk Executive': [
      {
        id: 'tm-027',
        name: 'Chandani Manikpuri',
        designation: 'Helpdesk Executive',
        image: '/images/team/chandani-manikpuri.jpg',
      },
      {
        id: 'tm-028',
        name: 'Payal Patel',
        designation: 'Helpdesk Executive',
        image: '/images/team/payal-patel.jpg',
      },
      {
        id: 'tm-029',
        name: 'Neelam Verma',
        designation: 'Helpdesk Executive',
        image: '/images/team/neelam-verma.jpg',
      },
      {
        id: 'tm-030',
        name: 'Nikita Xalxo',
        designation: 'Helpdesk Executive',
        image: '/images/team/nikita-xalxo.jpg',
      },
      {
        id: 'tm-031',
        name: 'Himanshee Awsariya',
        designation: 'Helpdesk Executive',
        image: '/images/team/himanshee-awsariya.jpg',
      },
      {
        id: 'tm-032',
        name: 'Anjali Manikpuri',
        designation: 'Helpdesk Executive',
        image: '/images/team/anjali-manikpuri.jpg',
      },
      {
        id: 'tm-033',
        name: 'Prince Dewangan',
        designation: 'Helpdesk Executive',
        image: '/images/team/prince-dewangan.jpg',
      },
    ],

    'Creative & Support': [
      {
        id: 'tm-034',
        name: 'Rashi Jain',
        designation: 'Video Editor',
        image: '/images/team/rashi-jain.jpg',
      },
      {
        id: 'tm-035',
        name: 'Shilpi Thakur',
        designation: 'Team Member',
        image: '/images/team/shilpi-thakur.jpg',
      },
    ],

    Leadership: [
      {
        id: 'tm-036',
        name: 'Arjun Soni',
        designation: 'Team Member',
        image: '/images/team/arjun-soni.jpg',
      },
      {
        id: 'tm-037',
        name: 'Vivek Mishra',
        designation: 'Team Member',
        image: '/images/team/vivek-mishra.jpg',
      },
    ],

    'Medical Auditors': [
      {
        id: 'tm-038',
        name: 'Rakesh Sharma',
        designation: 'Sr. Medical Auditor',
        image: '/images/team/rakesh-sharma.jpg',
      },
      {
        id: 'tm-039',
        name: 'Abhishek Khandelwal',
        designation: 'Medical Auditor',
        image: '/images/team/abhishek-khandelwal.jpg',
      },
      {
        id: 'tm-040',
        name: 'Jagritee Patel',
        designation: 'Medical Auditor',
        image: '/images/team/jagritee-patel.jpg',
      },
      {
        id: 'tm-041',
        name: 'G Anurag Dora',
        designation: 'Medical Auditor',
        image: '/images/team/g-anurag-dora.jpg',
      },
      {
        id: 'tm-042',
        name: 'Sandhya Kanwar',
        designation: 'Medical Auditor',
        image: '/images/team/sandhya-kanwar.jpg',
      },
      {
        id: 'tm-043',
        name: 'Bhupendra Gathe',
        designation: 'Medical Auditor',
        image: '/images/team/bhupendra-gathe.jpg',
      },
      {
        id: 'tm-044',
        name: 'Suresh Kumar Patel',
        designation: 'Medical Auditor',
        image: '/images/team/suresh-kumar-patel.jpg',
      },
      {
        id: 'tm-045',
        name: 'Sushil Kumar Sahu',
        designation: 'Medical Auditor',
        image: '/images/team/sushil-kumar-sahu.jpg',
      },
      {
        id: 'tm-046',
        name: 'Harish Choudhary',
        designation: 'Medical Auditor',
        image: '/images/team/harish-choudhary.jpg',
      },
      {
        id: 'tm-047',
        name: 'Swaraj Ratn Panigrahi',
        designation: 'Medical Auditor',
        image: '/images/team/swaraj-ratn-panigrahi.jpg',
      },
      {
        id: 'tm-048',
        name: 'Aishwarya Thakur',
        designation: 'Medical Auditor',
        image: '/images/team/aishwarya-thakur.jpg',
      },
      {
        id: 'tm-049',
        name: 'Vishal Agrawal',
        designation: 'Medical Auditor',
        image: '/images/team/vishal-agrawal.jpg',
      },
      {
        id: 'tm-050',
        name: 'Satyendra Sahu',
        designation: 'Medical Auditor',
        image: '/images/team/satyendra-sahu.jpg',
      },
      {
        id: 'tm-051',
        name: 'Priyanshu Pandey',
        designation: 'Medical Auditor',
        image: '/images/team/priyanshu-pandey.jpg',
      },
      {
        id: 'tm-052',
        name: 'Anurag Sharma',
        designation: 'Medical Auditor',
        image: '/images/team/anurag-sharma.jpg',
      },
      {
        id: 'tm-053',
        name: 'Abhishek Parhi',
        designation: 'Medical Auditor',
        image: '/images/team/abhishek-parhi.jpg',
      },
      {
        id: 'tm-054',
        name: 'Rahul Singhrol',
        designation: 'Medical Auditor',
        image: '/images/team/rahul-singhrol.jpg',
      },
    ],
  },
};
