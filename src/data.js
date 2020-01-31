const COMPANY = "at Technology Corp ";
const SKILLS = "my superior technology skills";
const OUTCOME = "ensure a high level of efficiency and productivity";


export default {
    resumeName:"General Resume | Ian Murphy",
    resumeVersion:"2.3.0",
    applicant:"Ian Murphy",
    role:"Full Stack Engineer",          //what you would consider yourself, this can be the position applied for
    website:"http://isogen.net",                       //your personal website
    linkedin:"linkedin.com/in/ian-m-murphy/",   
    email:"ian@isogen.net",
    phone:"(503) 830 - 2275",
    github:"github.com/3jackdaws",  
    objective:`Seeking a position ${COMPANY} where I can apply ${SKILLS} to ${OUTCOME}.`,                                                              //for tailored resumes
    profile:`Results driven, perfectionist, multi-language web application engineer who is highly motivated, flexible, and team oriented.`,    //for non-specific resumes    
    experience:[                    //professional experience
        {
            company:"Daimler Trucks NA",
            title:"Web Application Engineer",
            from:"Mar 2019",
            to:"Present",
            description:"Designed and developed a high availabilty, performance-oriented technical service document delivery application and worked closely with out-of-country developers to integrate with experimental document delivery services. Ensured customer satisfaction of commercial vehicle information applications and microservices through the creation of automated end to end tests and the standardization of development and deployment procedures.  Maintained legacy application security compliance and performed necessary remediation steps.",
            results:[
                "Decrease in deployment validation times for critical applications"
            ],
            technologies:[
                "Spring Boot",
                "WebSphere",
                "Vue.js",
                "Urban Code",
                "Dojo Toolkit",
                "ASP Classic :(",
                "C#",
            ]
        },
        {
            company:"Intel w/ Cinder Solutions",
            title:"Automation Engineer",
            from:"Jan 2019",
            to:"Mar 2019",
            description:"Automated validation processes for Intel's Dynamic Tuning product.  Triaged and debugged failing tests.",
            results:[

            ],
            technologies:[
                "C#",
                "Jenkins",
                "BDD",
                "Gherkin",
            ]
        },
        {
            company:"Daimler Trucks NA",
            title:"Cloud Automation Intern",
            from:"Jun 2018",
            to:"Dec 2018",
            description:"Lead efforts to consolidate steps involved in decommissioning enterprise infrastructure and developed self-service VM decommissioning tools. Was tasked with evaluating and supplying recommendations for the purchase of third party software amounting to more than $200k. ",
            results:[
                "Solved the infrastructure decommissioning \"million dollar problem\".",
                "Greater than 90% reduction in time to decommission VMs",
            ],
            technologies:[
                "Django",
                "jQuery",
                "Vue.js",
                "Azure",
                "Docker",
                "Kubernetes",
                "vmWare",
            ]
        },
        {
            company:"Tektronix",
            title:"Software Engineer Intern",
            from:"Jun 2017",
            to:"Dec 2017",
            description:"Designed and developed self-service developer tools for product licensing, visual API testing, and building evaluation software. Dockerized high-performance video network monitoring appliance software. Created Cloud provider images (AMIs) from marketplace base OS images for network video monitoring products.",
            results:[
                "98% reduction in developer time spent obtaining Product licenses",
                "99% reduction in Product software package build time",
            ],
            technologies:[
                "Python",
                "JavaScript",
                "PHP",
                "PostgreSQL",
                "Docker",
                "AWS",
            ]
        },
        {
            company:"Vobile, Inc",
            title:"R&D Intern",
            from:"Dec 2016",
            to:"Jan 2017",
            description:"Oversaw office-wide Windows 10 workstation upgrades. Performed out of box setup and installation of new workstations. ",
            technologies:[
                "Python",
                "Docker",
            ]
        },
        {
            company:"Vobile, Inc",
            title:"R&D Intern",
            from:"Jun 2016",
            to:"Sep 2016",
            description:"Accelerated internal documentation software migration by designing format conversion scripts in Python. Dockerized inventory managment software. Performed intra-office tech support.",
            technologies:[
                "Python",
                "Docker",
            ]

        },
    ],
    education:[
        {
            type:"BS",
            subject:"Software Engineering",
            school:"Oregon Institute of Technology",
            date:"2018",
            summary:"GPA 3.61 · Emplaced a solid foundation for analyzing problems and providing practical solutions.  Courses included Software Testing, Data Structures, Design Patterns, Operating Systems, Embedded Networking, and Advanced Unix."
        }
    ],
    skills:[
        {
            name:"Docker",
            level:5,
            sub:[
                "Docker Compose",
                "Multistage Builds",
            ]
        },
        {
            name:"Python",
            level:5,
            sub:[
                "Django/Rest Framework",
                "Flask",
                "Asyncio",
            ]
        },
        {
            name:"Java",
            level:4,
            sub:[
                "Spring Boot",
                "J2EE",
                "WebSphere",
                "JSP",
            ]
        },
        {
            name:"Testing",
            level:4,
            sub:[
                "Hardware Validation",
                "Nightwatch.js",
                "BDD/Gherkin",
                "Selenium",
            ]
        },
        {
            name:"JavaScript",
            level:4,
            sub:[
                "Node.js",
                "Vue.js",
            ]
        },
        {
            name:"AWS",
            level:2,
            sub:[
                "EC2",
                "ECS",
                "Fargate",
            ]
        },
        {
            name:"C/C++",
            level:3.5,
            
        },
        {
            name:"C#",
            level:3,
            sub:[
                "SpecFlow",
                "Xamarin",
                "Unity",
            ]
        },
        {
            name:"Jenkins",
            level:3,
            desc:"Experience using Jenkins to automate software distribution and site reliability tests."
        },
        {
            name:"Git",
            level:3,
            desc:"Experience with using CLI Git and GitLab to collaborate on a team and control software versions."
        },
        {
            name:"RESTful API Design",
            level:4,
            desc:"Extensive experience designing and developing RESTful APIs for Web Applications and Services."
        },
        {
            name:"SQL",
            level:3,
            sub:[
                "Postgres",
                "MySQL",
                "SQL Server",
            ]
        },
        {
            name:"Kubernetes",
            level:3,
            sub:[
                "Rancher",
            ]
        },
    ],
    projects:[      // this just fills up space on the second page, idk what else to put here ¯\_(ツ)_/¯
        {
            title:"Soundcloud-Lib",
            category:"API Circumvention Library",
            url:"https://github.com/3jackdaws/soundcloud-lib",
            description:"Created after Soundcloud deleted my approved API app so that my Discord bot project could continue to play music in voice channels. Scrapes a public API key from the Soundcloud site and uses it to access the private API.",
            features:[
                "No API key required",
                "Supports Asyncio",
                "Creates an MP3 with embedded metadata (title, artist, album art)"
            ],
            technologies:[
                "python",
                "asyncio",
            ]
        },
        {
            title:"Sling",
            category:"Collaboration Website",
            url:"https://github.com/NeonAesthetic/slingapp-net",
            description:"A room based sharing and collaboration site that features, Text, Audio, and Video Chat, File Sharing, and Desktop sharing via a Chrome extension.  Most realtime communication went over WebSockets, but video and audio data was transmitted peer to peer.  Anyone could make or join a room without an account and room access was granted via share codes.",
            features:[
                "Securely share Text, File, Audio, Webcam, and Desktop data within a Room",
                "Accountless creation and permanent deletion of Rooms",
            ],
            technologies:[
                "PHP",
                "JavaScript",
                "WebRTC",
                "WebSockets",
            ]
        },
        {
            title:"PyCodeExec",
            category:"Arbitrary Code Execution Library",
            url:"https://github.com/3jackdaws/pycodeexec",
            description:"Poorly named library that allows for the safe execution of code from several supported languages via Docker.  This python library spins up a heavily restricted Docker container and executes the provided code.",
            features:[
                "Safely execute and return output from arbitrary code",
                "Supports Asyncio",
            ],
            technologies:[
                "Python",
                "Docker",
                "Asyncio"
            ]
        },
        {
            title:"resume-generator",
            category:"Simple Resume Management Tool",
            url:"https://github.com/3jackdaws/resume-generator",
            description:"A tool I created to allow me to generate custom tailored resumes for different positions.  This resume you are looking at right now was generated with this tool.",
            features:[
                "Uses a data file to populate a template",
                "Everything I could possibly want to change is a parameter in that data file",
            ],
            technologies:[
                "Vue.js",
                "HTML",
                "Lots of CSS",
            ]
        },

    ]
};