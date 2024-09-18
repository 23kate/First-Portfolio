import { nanoid } from 'nanoid';
import { FaFigma, FaFileExcel, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import Picture1 from '../src/assets/Picture1.jpg'; // Adjust the path as necessary

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Experienced in HTML and CSS with a commitment to continuously enhancing skills to create visually appealing and responsive websites.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Possess foundational knowledge in JavaScript and am actively learning to build interactive and dynamic web applications, with a strong willingness to expand expertise and improve functionality',
  },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <FaFigma className='h-16 w-16 text-emerald-500' />,
    text: 'Experienced in designing with Figma and committed to continuously learning and exploring other design tools to improve skills and create more effective and visually appealing designs',
  },
  {
    id: nanoid(),
    title: 'Adaptable Project Manager',
    icon: <FaFileExcel className='h-16 w-16 text-emerald-500' />,
    text: 'While I am still exploring specific project management tools like Jira or Confluence, I am highly organized and capable of managing projects and documentation manually or through simpler tools like Google Docs and Sheets. I am eager to learn advanced tools and methodologies such as Agile and Scrum to further enhance my ability to collaborate effectively in team environments and deliver successful IT projects.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: Picture1,
    title: 'Capstone Project',
    text: 'The project for Little Haven Psychological Services successfully addressed the clinic’s needs by enhancing their booking, counseling, data management, and confidentiality processes. By employing Agile Development methodologies, the researchers delivered a reliable, secure, and user-friendly web application. The system received positive feedback from the clinic’s team during beta testing, with only minor adjustments needed, demonstrating effective integration of technology to improve business operations.',
},

  
];
