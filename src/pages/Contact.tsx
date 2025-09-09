import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'jsontran5@gmail.com',
      description: 'Best for professional inquiries',
      href: 'mailto:jsontran5@gmail.com',
      highlight: true
    },
    {
      icon: Github,
      title: 'GitHub',
      detail: '@Jsontran5',
      description: 'Check out my code and projects',
      href: 'https://github.com/Jsontran5'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      detail: 'Jason Tran',
      description: 'Connect professionally',
      href: 'https://www.linkedin.com/in/jason-tran-145890252/'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Los Angeles, CA',
      description: 'UCLA Campus & Surrounding Area'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="hero-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact Information */}
          <Card className="p-8 glass">
            <h3 className="text-2xl font-bold mb-4">
              Let's <span className="hero-gradient">Connect</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're interested in collaboration, have questions about my projects, 
              or just want to chat about technology, I'm always open to meaningful conversations.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline" className="border-primary text-primary">Open to Work</Badge>
              <Badge variant="outline" className="border-accent text-accent">Collaboration</Badge>
              <Badge variant="outline" className="border-accent-warm text-accent-warm">Mentorship</Badge>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                const content = (
                  <div className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    method.highlight 
                      ? 'bg-gradient-to-r from-primary/20 to-primary-glow/20 border border-primary/30 hover:shadow-[var(--shadow-primary)] hover:scale-105' 
                      : 'hover:bg-muted/10'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      method.highlight ? 'bg-primary/30' : 'bg-primary/20'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${method.highlight ? 'text-primary' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className={`text-sm font-medium ${method.highlight ? 'text-primary' : 'text-primary'}`}>
                        {method.detail}
                      </p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                    {method.highlight && (
                      <div className="text-xs bg-primary/20 px-2 py-1 rounded text-primary font-medium">
                        Preferred
                      </div>
                    )}
                  </div>
                );

                if (method.href) {
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block transition-transform duration-200"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={index}>{content}</div>;
              })}
            </div>
          </Card>

          {/* Availability */}
          <Card className="p-8 glass">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-accent" />
              Current Availability
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Full-time Opportunities</span>
                <Badge variant="outline" className="border-accent text-accent">After June 2026</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Internships</span>
                <Badge variant="outline" className="border-primary text-primary">Available</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Collaboration</span>
                <Badge variant="outline" className="border-primary text-primary">Always Open</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;