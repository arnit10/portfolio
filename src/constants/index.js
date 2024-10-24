import project2 from '../assets/BillingSoftware.png'
import project1 from '../assets/TodoImg.png'

export const SUMMARY = "I am a highly motivated and passionate React developer, eager to begin my career in web development. With a strong foundation in JavaScript, React.js, HTML & CSS. I am comfortable using tools like Tailwind CSS to streamline the design process and ensure clean, maintainable code. I enjoy problem-solving, continuously learning new technologies, and working collaboratively in team environments to build effective and efficient solutions."

export const ABOUT = "I am a passionate and dedicated developer with a strong foundation in programming and a focus on front-end technologies like React js and JavaScript. I am committed to building user-friendly and efficient web applications. I thrive on solving complex problems, continuously learning new skills, and staying up-to-date with the latest industry trends. Whether it's creating clean, responsive interfaces or writing maintainable code, I enjoy every aspect of software development and am eager to contribute to innovative projects."

export const PROJECTS = [
    {
        title : "Todo Application",
        image : project1,
        description : " Built a responsive and dynamic UI using React.js and Tailwind CSS. Implemented a CRUD system to allow users to create, edit, and delete tasks. Integrated SQL for efficient task storage and retrieval from the database.",
        technologies : ["React" , "TailwindCSS" , "SQL" ,"HTML" ,"CSS" ]
    },
    {
        title : "Billing Software",
        image : project2,
        description : "Developed an invoicing and inventory management system using Python Focused on building a clean user interface and smooth customer experience.Implemented features for inventory tracking, automatic invoice generation, and sales reports."
        ,technologies : ["Python" ,"SQL"]
    }
]

export const CONTACT = {
    address : "Moradabad , U.P ,India",
    phoneNo : "+91 8266989789",
    email : "arnitchauhan10@gmail.com"
}