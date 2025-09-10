import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TechBadge } from '@/components/ui/tech-badge';
import { ExternalLink, Github, Brain, Utensils, Calendar, Terminal } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Predicting Doordash Deliveries',
      description: 'Machine learning project achieving 87% prediction accuracy for delivery times using advanced ML models and data analysis techniques.',
      period: 'Oct. 2024 – Dec. 2024',
      category: 'Machine Learning',
      achievements: [
        'Built and tuned ML models (logistic regression, decision trees, neural networks) to achieve 87% prediction accuracy',
        'Applied KMeans Clustering and PCA to uncover latent delivery patterns, boosting model precision by 15%',
        'Reduced classification error through advanced feature engineering and hyperparameter optimization'
      ],
      technologies: ['Python', 'NumPy', 'Pandas', 'PyTorch', 'Scikit-Learn', 'KMeans', 'PCA'],
      github: 'https://github.com/Jsontran5/doordashdelivery',
      icon: Brain,
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      title: 'WingstopFreeFries - Coupon Generator',
      description: 'Open-source automation tool that extracts coupon codes from restaurant surveys, generating over $11K in user savings.',
      period: 'Aug. 2023 – Jan. 2024',
      category: 'Web Automation',
      achievements: [
        'Open-sourced a Python & Selenium automation script enabling 2,200+ uses',
        'Generated $11K+ in total user savings through automated coupon extraction',
        'Deployed on AWS EC2 with responsive UI using Flask, HTML, CSS, and JavaScript',
        'Leveraged Firebase and cron jobs for automated daily email parsing and storage'
      ],
      technologies: ['Python', 'Flask', 'Selenium', 'AWS EC2', 'Firebase', 'BeautifulSoup'],
      live: 'https://wingstopfreefries.xyz',
      icon: Utensils,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'UCLA Dance Hub',
      description: 'Dynamic web application for UCLA dance teams to schedule events and manage community interactions with 100+ active users.',
      period: 'Sep. 2023 – Dec. 2023',
      category: 'Full-Stack Web App',
      achievements: [
        'Developed dynamic web application for UCLA dance teams event scheduling',
        'Enabled 100+ users to authenticate, track, and interact with dance teams',
        'Designed responsive UI with React and asynchronous state management',
        'Managed version control with Git using feature branches and pull requests'
      ],
      technologies: ['React', 'Node.js', 'Express', 'Firebase', 'Git'],
      github: 'https://github.com/Jsontran5/UCLA-Dance-Hub',
      icon: Calendar,
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Python Shuf Command',
      description: 'Complete implementation of GNU shuf behavior with comprehensive argument parsing and flexible randomization capabilities.',
      period: 'Oct. 2023',
      category: 'System Programming',
      achievements: [
        'Reproduced GNU shuf behavior with comprehensive argparse implementation',
        'Supported file input, range sequences, and direct CLI input',
        'Implemented flexible randomization for various use cases',
        'Maintained compatibility with original GNU shuf specifications'
      ],
      technologies: ['Python', 'Linux', 'argparse', 'System Programming'],
      github: 'https://github.com/Jsontran5/CS35L/blob/main/assignment2/shuf.py',
      icon: Terminal,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="hero-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of my full-stack applications, machine learning models, and open-source contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden glass hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Icon & Category */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <Badge variant="outline" className="mt-4 border-accent text-accent">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-sm text-muted-foreground">{project.period}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <li 
                              key={achievementIndex}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <TechBadge key={tech} variant="secondary">
                              {tech}
                            </TechBadge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        {project.github && (
                          <Button 
                            variant="outline" 
                            className="border-primary/30 hover:bg-primary/10"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.live && (
                          <Button 
                            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)]"
                            asChild
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <Card className="mt-16 p-8 text-center glass">
          <h3 className="text-2xl font-bold mb-4">
            Explore More on <span className="hero-gradient">GitHub</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover additional projects, contributions, and code samples on my GitHub profile
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)]"
            asChild
          >
            <a href="https://github.com/Jsontran5" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Projects;