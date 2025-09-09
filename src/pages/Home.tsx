import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/ui/tech-badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink, Users, DollarSign, Zap } from 'lucide-react';
import TypewriterText from '@/components/TypewriterText';

const Home = () => {
  const roles = ['UCLA Student', 'Esports Player', 'Pickleball Enthusiast', 'Mathematician'];
  
  const techSkills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C/C++', 'SQL'],
    frontend: ['React', 'HTML/CSS', 'Next.js'],
    backend: ['Node.js', 'Express', 'Flask', 'PostgreSQL', 'Firebase'],
    tools: ['Git/GitHub', 'AWS', 'Docker', 'Linux/Unix', 'PyTorch']
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="hero-gradient">JASON</span> Tran
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-muted-foreground">
              Software Engineer & <TypewriterText words={roles} className="text-primary" />
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground mb-12">
              Mathematics of Computation student at UCLA, passionate about full-stack development, 
              data science, and AI/ML. Currently building scalable solutions at ACM and UCLA Life Sciences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transition-all duration-300">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                <a href="https://drive.google.com/file/d/1xmxh9w7Q2pb4PtTDAgEta2GP6DpP71Lx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              <Button asChild variant="ghost" size="icon" className="hover:text-primary">
                <a href="https://github.com/Jsontran5/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:text-primary">
                <a href="https://www.linkedin.com/in/jason-tran-145890252/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:text-primary">
                <a href="mailto:jsontran5@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Favorite Creation - WingstopFreeFries */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16">
            My Favorite <span className="hero-gradient">Invention</span>
          </h3>
          
          <Card className="overflow-hidden glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Info */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2">WingstopFreeFries</h4>
                  <p className="text-primary font-semibold">Open-Source Coupon Generator</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  An automated tool that extracts coupon codes from restaurant surveys, 
                  helping users save money on their favorite meals. Built with Python, 
                  Selenium automation, and deployed on AWS.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold hero-gradient">2,200+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-accent-warm" />
                      <span className="text-2xl font-bold hero-gradient">$11K+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">User Savings</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <TechBadge variant="primary">Python</TechBadge>
                  <TechBadge variant="primary">Selenium</TechBadge>
                  <TechBadge variant="accent">Flask</TechBadge>
                  <TechBadge variant="secondary">AWS EC2</TechBadge>
                  <TechBadge variant="secondary">Firebase</TechBadge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-accent-warm to-accent hover:shadow-lg transition-all duration-300"
                  >
                    <a href="https://wingstopfreefries.xyz" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Site
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
              
              {/* Project Preview */}
              <div className="relative bg-gradient-to-br from-accent-warm/20 to-accent/20 flex items-center justify-center p-8 lg:p-12">
                <div className="relative">
                  {/* Browser Mockup */}
                  <div className="bg-card rounded-lg shadow-2xl overflow-hidden max-w-md w-full">
                    <div className="bg-muted/50 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-destructive"></div>
                        <div className="w-3 h-3 rounded-full bg-accent-warm"></div>
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                      </div>
                      <div className="flex-1 bg-muted rounded text-xs px-3 py-1 text-center text-muted-foreground">
                        wingstopfreefries.xyz
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="text-4xl mb-4">🍗</div>
                      <h5 className="font-bold text-lg mb-2">WingstopFreeFries</h5>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get free fries with every order
                      </p>
                      <div className="bg-primary/20 rounded-lg p-3 mb-4">
                        <p className="text-xs font-mono">SAVE15OFF</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <Zap className="w-3 h-3 text-accent-warm" />
                        <span>Instant coupon generation</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating stats */}
                  <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-xs text-muted-foreground">Live Stats</div>
                    <div className="font-bold text-primary">2,200+ saves</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16">
            Technical <span className="hero-gradient">Expertise</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Languages */}
            <Card className="p-6 glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <h4 className="text-lg font-bold mb-4 text-primary">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {techSkills.languages.map((skill) => (
                  <TechBadge key={skill} variant="primary">{skill}</TechBadge>
                ))}
              </div>
            </Card>

            {/* Frontend */}
            <Card className="p-6 glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <h4 className="text-lg font-bold mb-4 text-accent">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {techSkills.frontend.map((skill) => (
                  <TechBadge key={skill} variant="accent">{skill}</TechBadge>
                ))}
              </div>
            </Card>

            {/* Backend */}
            <Card className="p-6 glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <h4 className="text-lg font-bold mb-4 text-accent-warm">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {techSkills.backend.map((skill) => (
                  <TechBadge key={skill} variant="secondary">{skill}</TechBadge>
                ))}
              </div>
            </Card>

            {/* Tools */}
            <Card className="p-6 glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <h4 className="text-lg font-bold mb-4 text-muted-foreground">Tools & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {techSkills.tools.map((skill) => (
                  <TechBadge key={skill} variant="secondary">{skill}</TechBadge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">
            Let's <span className="hero-gradient">Connect</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaboration or have questions about my projects? 
            I'm always open to meaningful conversations about technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transition-all duration-300"
            >
              <a href="mailto:jsontran@ucla.edu">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <Link to="/contact">
                View Contact Info <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;