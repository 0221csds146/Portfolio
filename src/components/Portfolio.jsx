import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Brain, Sparkles, Github, Linkedin, Mail, ExternalLink, Filter, Moon, Sun, ChevronDown, Menu, X, Award, Briefcase, BookOpen, MessageSquare, TrendingUp, BarChart3, Phone } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hi! I'm Rajeev's AI assistant. Ask me about his projects, skills, or experience!", sender: 'bot' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const roles = [
    "Data Science Enthusiast 📊",
    "Exploring AI and MLOps 🤖",
    "Turning Data into Insights 💡",
    "Building Intelligent Systems 🧠"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting && currentIndex <= currentRole.length) {
        currentText = currentRole.substring(0, currentIndex);
        setTypedText(currentText);
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        currentText = currentRole.substring(0, currentIndex);
        setTypedText(currentText);
        currentIndex--;
      }
      
      if (currentIndex === currentRole.length + 1) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };
    
    const timer = setInterval(type, isDeleting ? 50 : 150);
    return () => clearInterval(timer);
  }, [roleIndex]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      icon: '💻',
      title: 'Programming Languages',
      skills: ['Python', 'SQL', 'Java']
    },
    {
      icon: '📊',
      title: 'Data Visualization',
      skills: ['Power BI', 'Tableau', 'Matplotlib / Seaborn']
    },
    {
      icon: '🗄️',
      title: 'Databases & Tools',
      skills: ['MySQL', 'MongoDB']
    },
    {
      icon: '🧠',
      title: 'Analytics & ML',
      skills: ['Machine Learning', 'Statistical Analysis', 'Data Mining']
    },
    {
      icon: '📈',
      title: 'Business Tools',
      skills: ['Advanced Excel', 'Google Analytics']
    },
    {
      icon: '☁️',
      title: 'Cloud & Other',
      skills: ['AWS S3', 'Git / GitHub', 'Kubernetes']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'MLOps Project - Vehicle Insurance Data Pipeline',
      subtitle: 'Domain: Machine Learning | Functions: Data Engineering & MLOps',
      icon: '🚗',
      description: 'A robust end-to-end MLOps pipeline designed for managing vehicle insurance data — covering data ingestion, transformation, model training, and deployment with CI/CD automation.',
      highlights: [
        'Developed automated data ingestion from MongoDB to ML pipeline',
        'Implemented data validation, transformation, and model training modules',
        'Deployed ML model using AWS S3, EC2, ECR, and GitHub Actions',
        'Enabled CI/CD workflow with Docker integration for seamless deployment'
      ],
      tags: ['Python', 'MongoDB', 'AWS', 'Docker', 'GitHub Actions', 'Scikit-learn'],
      type: 'mlops',
      github: 'https://github.com/0221csds146/MLOPS_CAPSTONE-_PROJECT',
      demo: null
    },
    {
      id: 2,
      title: 'RockyBot – Research Tool',
      subtitle: 'AI-powered News Insight Engine',
      icon: '🤖',
      description: 'Built an interactive news research assistant using Google Gemini and Streamlit. RockyBot allows users to extract, analyze, and query multiple news articles intelligently using LLM-driven question-answering.',
      highlights: [
        'Multi-article processing and content extraction via scraping and LangChain loaders',
        'Semantic search using vector embeddings (FAISS)',
        'Natural language Q&A with contextual memory and random prompts',
        'Visual metrics dashboard and quick insights with chat history'
      ],
      tags: ['Streamlit', 'LangChain', 'Google Gemini API', 'FAISS', 'BeautifulSoup', 'Plotly'],
      type: 'ai',
      github: 'https://github.com/0221csds146/RockyChatBot',
      demo: 'https://rockychatbot-excvfduu7xfp6izkh2rouw.streamlit.app/'
    },
    {
      id: 3,
      title: 'Sales Data Analysis',
      subtitle: 'Domain: FMCG | Functions: Sales & Finance',
      icon: '📈',
      description: 'Comprehensive analysis of the Atliq Hardware Sales, focusing on market penetration, growth opportunities, and competitive landscape for strategic decision-making.',
      highlights: [
        'Identify high and low-performing cities based on profit margin',
        'Track revenue and profit changes from 2017 to 2020',
        'View revenue and profit contribution by market',
        'Analyze revenue and profitability by customer'
      ],
      tags: ['Power BI', 'Excel', 'Power Query', 'MySQL'],
      type: 'data',
      github: 'https://github.com/0221csds146/Sales_Insights_Dashboard',
      demo: 'https://app.powerbi.com/links/sVVbYdvNz_?ctid=61363c43-8420-43ca-8f82-801627e16cdf&pbi_source=linkShare'
    },
    {
      id: 4,
      title: 'Smart Assistant',
      subtitle: 'Domain: GenAI | Functions: Research Summarization & QA',
      icon: '📚',
      description: 'An AI-powered research assistant built with Streamlit, LangChain, and Groq (LLaMA3) — designed to summarize uploaded PDFs/TXT, answer document-based questions with source references.',
      highlights: [
        'Upload and process .pdf / .txt research documents',
        'AI-generated concise summaries with source citations',
        'Document Q&A with conversational memory buffer',
        '"Challenge Me" mode: logic-based MCQs + feedback',
        'Fast inference using Groq LLaMA3; semantic search via FAISS'
      ],
      tags: ['Streamlit', 'LangChain', 'Groq (LLaMA3)', 'FAISS', 'PyPDF2', 'Python'],
      type: 'ai',
      github: 'https://github.com/0221csds146/EZ_Gen_Ai_project',
      demo: 'https://ezgenaiproject-rajeevkumar.streamlit.app/'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted, input:', chatInput); // Debug log
    
    if (!chatInput.trim()) {
      console.log('Empty input, returning');
      return;
    }
    
    const userMessage = chatInput.toLowerCase();
    const userText = chatInput;
    
    console.log('Processing message:', userText); // Debug log
    
    // Add user message immediately
    setChatMessages(prev => {
      const newMessages = [...prev, { text: userText, sender: 'user' }];
      console.log('Updated messages:', newMessages); // Debug log
      return newMessages;
    });
    
    // Clear input immediately after adding message
    setChatInput('');
    
    // Simple keyword-based responses
    let botResponse = "That's interesting! Feel free to explore my projects and skills sections for more details.";
    
    if (userMessage.includes('project') || userMessage.includes('work')) {
      botResponse = "I've worked on 4 major projects: MLOps Vehicle Insurance Pipeline, RockyBot (AI Research Tool), Sales Data Analysis Dashboard, and Smart Assistant. Check out the Projects section to see them in detail!";
    } else if (userMessage.includes('skill') || userMessage.includes('technology') || userMessage.includes('tech')) {
      botResponse = "My key skills include Python, SQL, Machine Learning, Power BI, Tableau, AWS, Docker, and Kubernetes. I specialize in Data Science and MLOps!";
    } else if (userMessage.includes('experience') || userMessage.includes('background') || userMessage.includes('education')) {
      botResponse = "I'm a final-year Computer Science student from NIET, passionate about data science and AI. I've completed several end-to-end projects in data analytics and machine learning.";
    } else if (userMessage.includes('contact') || userMessage.includes('reach') || userMessage.includes('email') || userMessage.includes('phone')) {
      botResponse = "You can reach Rajeev at Kumarr22470@gmail.com or call +91 7703834624. He's also active on LinkedIn and GitHub!";
    } else if (userMessage.includes('mlops') || userMessage.includes('insurance') || userMessage.includes('vehicle')) {
      botResponse = "The MLOps Vehicle Insurance project is a complete pipeline using MongoDB, AWS (S3, EC2, ECR), Docker, and GitHub Actions for CI/CD. It covers data ingestion, transformation, model training, and deployment!";
    } else if (userMessage.includes('rocky') || userMessage.includes('news') || userMessage.includes('research tool')) {
      botResponse = "RockyBot is an AI-powered news research assistant built with Google Gemini, Streamlit, and LangChain. It uses FAISS for semantic search and can analyze multiple news articles intelligently!";
    } else if (userMessage.includes('sales') || userMessage.includes('dashboard') || userMessage.includes('power bi')) {
      botResponse = "The Sales Data Analysis project analyzes Atliq Hardware Sales using Power BI, MySQL, and Excel. It tracks revenue, profit margins, and market performance from 2017-2020!";
    } else if (userMessage.includes('smart') || userMessage.includes('assistant') || userMessage.includes('pdf')) {
      botResponse = "Smart Assistant is an AI tool built with Groq LLaMA3 and Streamlit. It summarizes PDFs, answers document questions, and generates MCQs using FAISS vector search!";
    } else if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
      botResponse = "Hello! 👋 I'm here to help you learn about Rajeev's work. Ask me about his projects, skills, or how to contact him!";
    } else if (userMessage.includes('resume') || userMessage.includes('cv') || userMessage.includes('download')) {
      botResponse = "You can download Rajeev's resume from the hero section or directly from this link: https://drive.google.com/file/d/1MXZhixxO0x1v4qdcrUxd3Rjpis09PaDi/view";
    } else if (userMessage.includes('who') || userMessage.includes('about')) {
      botResponse = "Rajeev Kumar is a Computer Science student specializing in Data Science from NIET. He's passionate about solving data problems using Python, SQL, and MLOps. He has built several end-to-end projects in data analytics and AI!";
    } else if (userMessage.includes('github')) {
      botResponse = "You can find all of Rajeev's projects on GitHub at: https://github.com/0221csds146";
    } else if (userMessage.includes('linkedin')) {
      botResponse = "Connect with Rajeev on LinkedIn: https://www.linkedin.com/in/rajeev-kumar-690541167/";
    }
    
    console.log('Bot response:', botResponse); // Debug log
    
    // Add bot response after a short delay
    setTimeout(() => {
      setChatMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      
      // Scroll to bottom
      setTimeout(() => {
        const chatContainer = document.getElementById('chatMessages');
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }, 800);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-purple-600' : 'bg-purple-400'}`} style={{top: '10%', left: '10%'}}></div>
        <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`} style={{top: '60%', right: '10%', animationDelay: '1s'}}></div>
        <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-pink-600' : 'bg-pink-400'}`} style={{bottom: '10%', left: '50%', animationDelay: '2s'}}></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-purple-500" size={24} />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Rajeev Kumar
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${activeSection === item ? 'text-purple-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 ${activeSection === item ? 'text-purple-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="text-6xl mb-4 animate-bounce">👋</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Hi, I'm Rajeev Kumar
          </h1>
          <div className="text-2xl md:text-3xl mb-8 h-12">
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className={`text-lg md:text-xl mb-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm a final-year Computer Science student passionate about solving data problems using Python, SQL, and MLOPS. 📈
          </p>
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I've built several end-to-end projects and aspire to work in data analytics and AI. 🔍
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
              Explore My Work
            </button>
            <a href="https://drive.google.com/file/d/1MXZhixxO0x1v4qdcrUxd3Rjpis09PaDi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 rounded-full font-semibold border-2 ${darkMode ? 'border-purple-500 hover:bg-purple-500/10' : 'border-purple-600 hover:bg-purple-50'} transition-all transform hover:scale-105 inline-flex items-center gap-2`}>
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com/0221csds146" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
              <Github className="text-purple-500" size={28} />
            </a>
            <a href="https://www.linkedin.com/in/rajeev-kumar-690541167/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
              <Linkedin className="text-purple-500" size={28} />
            </a>
            <a href="mailto:Kumarr22470@gmail.com" className="transform hover:scale-110 transition-transform">
              <Mail className="text-purple-500" size={28} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto text-purple-500" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
               <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-full p-2 mb-6">
                {/* Glowing Aura */}
                <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-40 animate-pulse"></div>

                {/* LinkedIn Profile Picture */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
                  <img
                    src={profilePic}
                    alt="Rajeev Kumar"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

            </div>
            <div>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a Computer Science (Data Science) undergraduate from NIET, with a strong passion for uncovering insights from data to solve real-world problems.
              </p>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                My journey began with a curiosity for numbers and patterns, which evolved into hands-on experience through academic projects and self-driven learning.
              </p>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I've successfully completed several data analysis projects that reflect my analytical thinking, technical skills, and commitment to continuous growth.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I enjoy transforming raw data into actionable insights. Explore my portfolio to see how I solve complex data challenges with practical, results-oriented solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all transform hover:-translate-y-2`}>
                <div className="text-5xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className={`text-center py-2 px-3 rounded-lg ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100'}`}>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'ai', 'mlops', 'data'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} hover:shadow-2xl transition-all transform hover:-translate-y-2`}>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{project.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} mb-4`}>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-start`}>
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-500 hover:text-purple-400 transition-colors">
                        <Github size={18} className="mr-2" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-500 hover:text-pink-400 transition-colors">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <p className={`text-lg mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm always excited to discuss data projects and opportunities
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="mailto:Kumarr22470@gmail.com" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all transform hover:-translate-y-2 flex items-center gap-4`}>
              <Mail className="text-purple-500" size={32} />
              <div className="text-left">
                <p className="font-semibold">Email</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kumarr22470@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/rajeev-kumar-690541167/" target="_blank" rel="noopener noreferrer" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all transform hover:-translate-y-2 flex items-center gap-4`}>
              <Linkedin className="text-purple-500" size={32} />
              <div className="text-left">
                <p className="font-semibold">LinkedIn</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rajeev Kumar</p>
              </div>
            </a>
            <a href="https://github.com/0221csds146" target="_blank" rel="noopener noreferrer" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all transform hover:-translate-y-2 flex items-center gap-4`}>
              <Github className="text-purple-500" size={32} />
              <div className="text-left">
                <p className="font-semibold">GitHub</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>@0221csds146</p>
              </div>
            </a>
            <a href="tel:+917703834624" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all transform hover:-translate-y-2 flex items-center gap-4`}>
              <Phone className="text-purple-500" size={32} />
              <div className="text-left">
                <p className="font-semibold">Phone</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+91 7703834624</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Rajeev Kumar. All rights reserved.
          </p>
          <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Made with ❤️ using AI
          </p>
        </div>
      </footer>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 animate-pulse"
      >
        {showChatbot ? <X size={28} className="text-white" /> : <MessageSquare size={28} className="text-white" />}
      </button>

      {/* Chatbot Window */}
      {showChatbot && (
        <div className={`fixed bottom-24 right-6 w-96 h-[500px] rounded-2xl shadow-2xl z-50 flex flex-col ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Brain size={24} className="text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-white/80">Ask me anything!</p>
              </div>
            </div>
            <button onClick={() => setShowChatbot(false)} className="text-white hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" id="chatMessages">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none' 
                    : darkMode 
                      ? 'bg-gray-700 text-gray-100 rounded-bl-none' 
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                }`}>
                  <p className="text-sm break-words">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleChatSubmit} className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about projects, skills..."
                autoComplete="off"
                className={`flex-1 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              <button 
                type="submit"
                disabled={!chatInput.trim()}
                className={`w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform ${!chatInput.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="text-white text-xl font-bold">→</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Portfolio;