import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechBadge } from '@/components/ui/tech-badge';
import { Calendar, MapPin, Users, Shield, Zap } from 'lucide-react';

const Work = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Association of Computing Machinery (ACM)',
      location: 'Los Angeles, CA',
      period: 'Nov. 2024 – Present',
      type: 'Leadership Role',
      achievements: [
        'Implemented RSVP system for membership portal with React, Express, PostgreSQL, designing REST API endpoints for event registration, retrieval, and cancellation, streamlining coordination for 350+ members',
        'Refactored PostgreSQL event database, redesigned UI, and integrated Google OAuth, improving portal security and reducing member login friction for hundreds of active users',
        'Built a reusable website template using TypeScript, React, Next.js to automate site creation for 9 ACM committees, reducing setup time by over 80%, while standardizing branding and improving user experience'
      ],
      technologies: ['React', 'Express', 'PostgreSQL', 'TypeScript', 'Next.js', 'Google OAuth'],
      icon: Users
    },
    {
      title: 'Software Engineer Intern',
      company: 'UCLA Department of Life Sciences Computing',
      location: 'Los Angeles, CA', 
      period: 'Nov. 2023 – Present',
      type: 'Research & Development',
      achievements: [
        'Created an employee directory web app using Slack EVENTS API, Flask, AJAX, enabling real-time status tracking for 30+ staff, streamlining internal communication',
        'Secured departmental REST API with OAuth2 + JWT, controlling access to sensitive research and HR data in Microsoft SQL Server, aligning with university security compliance'
      ],
      technologies: ['Flask', 'Slack API', 'AJAX', 'OAuth2', 'JWT', 'Microsoft SQL Server'],
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="hero-gradient">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building scalable solutions and driving innovation across academic and research environments
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden glass hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
                
                <div className="relative p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[var(--glow-primary)]">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {experience.title}
                          </h3>
                          <h4 className="text-xl text-primary font-semibold">
                            {experience.company}
                          </h4>
                        </div>
                        
                        <div className="flex flex-col lg:items-end gap-2">
                          <Badge variant="outline" className="border-accent text-accent">
                            {experience.type}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {experience.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-4">
                        <h5 className="font-semibold text-foreground flex items-center gap-2">
                          <Zap className="w-4 h-4 text-accent" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li 
                              key={achievementIndex}
                              className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-foreground">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <TechBadge key={tech} variant="primary">
                              {tech}
                            </TechBadge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skills Highlight */}
        <Card className="mt-16 p-8 glass">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Core <span className="hero-gradient">Competencies</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Full-Stack Development</h4>
              <p className="text-sm text-muted-foreground">React, Express, PostgreSQL, REST APIs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Security & Authentication</h4>
              <p className="text-sm text-muted-foreground">OAuth2, JWT, API Security</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-warm/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-warm" />
              </div>
              <h4 className="font-semibold mb-2">System Architecture</h4>
              <p className="text-sm text-muted-foreground">Database Design, API Development</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Work;