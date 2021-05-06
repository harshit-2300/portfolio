import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Harshit Srivastava',
  subtitle: 'I am a full stack web developer and a competitive programmer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello my name is Harshit srivastava a sophomore student at PDPM Indian Institute of Information Technology,Design and Manufacturing,Jabalpur having a good acadmic record over the years with a GPA of 8.4.I am a PERN stack developer and prefer to learn on the go by building projects. I have multiple projects which helped me to get a decent hand on developing web apps.',
  paragraphTwo:
    'Equipped with an inquisitive mindset, I am often the one to explore things outside my comfort zone to learn more. Being an efficient programmer with apposite problem solving skills, I have practised over 400 questions from Codechef, Codeforces, GeeksForGeeks, and Hackerrank which helped me achieve a strong grasp over concepts of data structures and algorithms. Currently, I hold a rating of 1812 at Codechef (harshit__2300). I function well independently and in synergy with my peers.',
  paragraphThree:
    'Being proficient in English speaking with good communication skills I love sharing ideas with different people with different mindsets.',

  resume: 'https://app.luminpdf.com/viewer/6093b84f13724b0011c1fe5f', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smartbrain-1.png',
    title: 'Smart-brain',
    info:
      'A web app developed using PERN stack a robust app where machine learning clarifai api called to dectect face in a image also the user login credentials are encrypted using bcrypt and stores in a secured manner in PostgreSQL database',
    info2: '',
    url: 'https://smart-brain-2300.herokuapp.com/',
    repo: 'https://github.com/harshit-2300/smartbrain-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bloodbank.png',
    title: 'Blood-donation',
    info:
      'A blood donation management application which helps all the  blood banks to manage the blood donated at various camps and keeping track of the amount of blood donated also when a patient needs blood he can simply go to the app to request for blood and request for the blood will be emailed to all the donors who can donate moreoever REST api is used to manage the normal,admin and the data entry users it is a robust app which can effectively be used to manage data',
    info2: '',
    url: '',
    repo: 'https://github.com/harshit-2300/blood_bank', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'miniquora.png',
    title: 'Mini-quora',
    info:
      'A blogging website where one can post whatever he likes the backend is made on node js using mysql as the database moreover ejs template has been used for frontend in addition to this cloudinary api is called to store the images posted by the users',
    info2: '',
    url: '',
    repo: 'https://github.com/harshit-2300/mini-quora', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'robofriends1.png',
    title: 'Robofriends',
    info:
      'A simple user friendly react app which parses JSON to display various cards and search for the cards using states in react',
    info2: '',
    url: 'https://harshit-2300.github.io/robofriends/',
    repo: 'https://github.com/harshit-2300/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'srivastavaharshit333@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '#',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '#',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/harshit-srivastava-5099b3190/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/harshit-2300',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
