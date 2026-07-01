import FlowPredictorImage from './assets/images/FlowPredictor.jpg'


const logotext = "MAIJA";
const meta = {
    title: "Maija Rikala",
    description: "I’m Maija Rikala, a software engineering student in Finland",
};

const introdata = {
    title: "I’m Maija Rikala",
    animated: {
        first: "I love coding", //change this
        second: "I have also studied astronomy",
        third: "I will figure this out",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Intern",
        where: "University of Turku, Department of Physics and Astronomy",
        date: "2021",
    },
    {
        jobtitle: "Research Assistant",
        where: "University of Turku, Department of Physics and Astronomy",
        date: "2022",
    },
    {
        jobtitle: "Research Assistant",
        where: "University of Turku, Department of Physics and Astronomy",
        date: "2023",
    },
];

const skills = [{
        name: "Python",
        value: 80,
    },
    {
        name: "Java",
        value: 70,
    },
    {
        name: "Javascript",
        value: 50,
    },
    {
        name: "React",
        value: 50,
    },
    {
        name: "C",
        value: 50,
    },
    {
        name: "C#",
        value: 70,
    },
];

//const services = [{
//        title: "UI & UX Design",
//        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//    },
//    {
//        title: "Mobile Apps",
//        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//    },
//    {
//        title: "Wordpress Design",
//        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//    },
//];

const dataportfolio = [{
        img: FlowPredictorImage,
        description: "University Capstone course project.",
        link: "https://capstone.utu.fi/en-FlowPredictor",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "test@gmail.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/MaijaRikala",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    //services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};