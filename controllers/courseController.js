const fetchCourses = async () => {
    return [
        {
            name: "JavaScript Basics",
            category: "Programming",
            description: "Learn the fundamentals of JavaScript.",
            image: "https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=612x612&w=0&k=20&c=H9FI5X3ZBQIyEijvhJc-jv5McwCh-BxqQPxee9Aoa08=",
            actual_price_usd: 100,
            sale_price_usd: 50,
            sale_end: "2025-02-28",
            url: "https://www.codecademy.com/learn/introduction-to-javascript"
        },
        {
            name: "Python for Beginners",
            category: "Programming",
            description: "A complete Python course for beginners.",
            image: "https://math.duke.edu/sites/math.duke.edu/files/styles/large/public/images/Featured%20Courses%20MTH%20260%20Python%20Programming%20in%20Math%20image.jpg.png?itok=kTIwZdBL",
            actual_price_usd: 120,
            sale_price_usd: 60,
            sale_end: "2025-03-05",
            url: "https://www.udemy.com/course/python-launchpad-data-structures-io-beginners/"
        },
        {
            name: "Machine Learning Basics",
            category: "Data Science",
            description: "Understand the basics of ML and AI.",
            image: "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=",
            actual_price_usd: 150,
            sale_price_usd: 80,
            sale_end: "2025-03-10",
            url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-machine-learning1"
        },
        {
            name: "Web Development Masterclass",
            category: "Web Development",
            description: "Full-stack web development course.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFm1hirHNyESgtOyPi8jz8Dsgs3VZD8YwHOA&s",
            actual_price_usd: 200,
            sale_price_usd: 100,
            sale_end: "2025-04-01",
            url: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
        },
        {
            name: "Cybersecurity Essentials",
            category: "Security",
            description: "Learn how to protect systems from cyber threats.",
            image: "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
            actual_price_usd: 130,
            sale_price_usd: 65,
            sale_end: "2025-04-15",
            url: "https://skillsbuild.org/students/course-catalog/cybersecurity",  
        },
        {
            name: "Data Structures & Algorithms",
            category: "Programming",
            description: "Master DSA with hands-on practice.",
            image: "https://i.ytimg.com/vi/Qmt0QwzEmh0/maxresdefault.jpg",
            actual_price_usd: 180,
            sale_price_usd: 90,
            sale_end: "2025-03-25",
            url: "https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/",  
        },
        {
            name: "Verbal",
            category: "Verbal",
            description: "Learn the basics of Verbal",
            image: "https://www.adriasolutions.co.uk/wp-content/uploads/2024/03/Effective-communication-in-teams-1024x538.webp",
            actual_price_usd: 220,
            sale_price_usd: 0,
            sale_end: "2025-05-01",
            url: "https://alison.com/psychometric-test/aptitude/verbal",
        },
        
        {
            name: "C Language",
            category: "Programming",
            description: "Learn basics of C",
            image: "https://datapro.in/uploads/1a73de2b9ea968a014158e1af9839dc0.png",
            actual_price_usd:100,
            sale_price_usd:0,
            sale_end: "2025-04-9",
            url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/c-for-beginners1",
        },
        {
            name: "Unity Game Engine",
            category: "Game Design",
            description: "Learn Unity Engine",
            image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/266464619/original/3d39d90ff76de29cccfd703457a7cbb5fc4adb47/program-code-create-games-in-unity.png",
            actual_price_usd:350,
            sale_price_usd:0,
            sale_end: "2025-02-9",
            url: "https://learn.unity.com/course/create-with-code",
        },
        {
            name: "SQL",
            category: "Programming",
            description: "Learn basics of Sql",
            image: "https://www.simplilearn.com/ice9/app/IntroductiontoSQL_360x194.jpg",
            actual_price_usd:150,
            sale_price_usd:0,
            sale_end: "2025-01-9",
            url: "https://www.codecademy.com/learn/learn-sql",
        },
        {
            name: ".NET",
            category: "Programming",
            description: "Learn basics of .NET",
            image: "https://datatas.com/wp-content/uploads/2024/02/is-net-for-c-only.png",  
            actual_price_usd:200,
            sale_price_usd:0,
            sale_end: "2025-03-10",
            url: "https://learn.microsoft.com/en-us/training/dotnet/",
        },
        {
            name: "Aptitude",
            category: "Aptitude",
            description: "Learn basics of Aptitude",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerW4Ht1X7rh0esUlW1pe9nXTChxHLCvcNGQ&s",  
            actual_price_usd:100,
            sale_price_usd:0,
            sale_end: "2025-02-20",
            url: "https://www.meritstore.in/lesson/general-aptitude-course/",
        },
        {
            name: "Data Science",
            category: "Programming",
            description: "Learn basics of Data Science",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXZmD7tUQ1TwhBVpMH24XUrqwJntVGDoimA&s",  
            actual_price_usd:150,
            sale_price_usd:0,
            sale_end: "2025-04-10",
            url: "https://skillsbuild.org/students/course-catalog/data-science",
        },
        {
            name: "Java",
            category: "Programming",
            description: "Learn basics of Java",
            image: "https://c8.alamy.com/comp/WANAEX/3d-rendered-illustration-of-the-word-java-WANAEX.jpg",  
            actual_price_usd:200,
            sale_price_usd:0,
            sale_end: "2025-01-10",
            url: "https://www.codecademy.com/learn/learn-java",
        },
        {
            name: "C++",
            category: "Programming",
            description: "Learn basics of C++",
            image: "https://www.simplilearn.com/ice9/app/IntroductiontoC360x194.jpg",  
            actual_price_usd:120,
            sale_price_usd:0,
            sale_end: "2025-03-25",
            url: "https://www.w3schools.com/cpp/",
        },
    ];
};


exports.renderCoursesPage = async (req, res) => {
    try {
        const courses = await fetchCourses();  // Fetch courses (ensure this function is defined)
        const user = req.user || null;  // Get user from session or authentication

        res.render("courses", { courses, user });  // Pass user to EJS
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.render("courses", { courses: [], user: null });  // Ensure user is always defined
    }
};