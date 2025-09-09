import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TechBadge } from '@/components/ui/tech-badge';
import { GraduationCap, BookOpen, Target, Heart, Award, Calendar, Gamepad2, Trophy, Play } from 'lucide-react';

const Personal = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Systems', 
    'Data Science & Machine Learning',
    'Computer Networks',
    'Operating Systems',
    'Object-Oriented Programming',
    'Computer Security',
    'Real Analysis',
    'Statistics'
  ];

  const interests = [
    { title: 'Artificial Intelligence & Machine Learning', icon: Award },
    { title: 'Full-Stack Development', icon: Target },
    { title: 'Data Science & Analytics', icon: BookOpen },
    { title: 'Competitive Gaming & Esports', icon: Gamepad2 },
    { title: 'Open Source Contributions', icon: Heart }
  ];

  const favoriteClips = [
    {
      title: 'Clutch 1v3 Post-Plant on Ascent',
      description: 'Ending of an intense clutch situation in my old team\'s Grand Finals Match',
      thumbnail: 'https://static-cdn.jtvnw.net/twitch-clips/vod-1507502697-offset-19760-preview-480x272.jpg',
      duration: '0:30'
    },
    {
      title: 'Clutch retake at UCLA\'s Winter Tryouts',
      description: 'Pros Don\'t Fake or Do They?',
      thumbnail: 'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/08/retake-smoke.jpg?q=50&fit=crop&w=825&dpr=1.5',
      duration: '0:32'
    },
    {
      title: 'Solo IceBox Retake',
      description: '1v4 retake to prevent enemy match point',
      thumbnail: 'https://i.imgur.com/9PY9pMu.jpeg',
      duration: '0:30'
    },
    {
      title: 'Calm Aim',
      description: 'lil calm aim on bonus round',
      thumbnail: 'https://i.imgur.com/KF4mGNS.jpeg',
      duration: '0:38'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about mathematics, computation, and building technology that makes a difference
          </p>
        </div>

        {/* Education Section */}
        <Card className="mb-12 overflow-hidden glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
          <div className="relative p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[var(--glow-primary)]">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">University of California, Los Angeles</h3>
                    <p className="text-xl text-primary font-semibold">B.S in Mathematics of Computation</p>
                    <p className="text-lg text-accent">Minor in Data Science Engineering</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="border-accent text-accent mb-2">UCLA '26</Badge>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 lg:justify-end">
                      <Calendar className="w-4 h-4" />
                      Masters Planned
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course) => (
                        <TechBadge key={course} variant="secondary">
                          {course}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground">Academic Focus</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Combining rigorous mathematical foundations with practical computer science applications, 
                      specializing in algorithms, data analysis, and computational problem-solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Interests & Passions */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Interests & <span className="hero-gradient">Passions</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 glass hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{interest.title}</h4>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Gaming & Esports Section */}
        <Card className="mb-12 overflow-hidden glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-50" />
          <div className="relative p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center shadow-lg">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Gaming & Esports</h3>
                  <p className="text-xl text-accent font-semibold">UCLA Esports Valorant Team Member</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Gamepad2 className="w-4 h-4 text-accent" />
                      Favorite Hobby
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Video games have been my passion since childhood. I love the strategic thinking, 
                      teamwork, and quick decision-making required in competitive gaming.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge variant="accent">Valorant</TechBadge>
                      <TechBadge variant="accent">FPS Games</TechBadge>
                      <TechBadge variant="accent">Strategy</TechBadge>
                      <TechBadge variant="accent">Teamwork</TechBadge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground">Competitive Experience</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      As a member of the UCLA Esports Valorant team, I've developed strong communication 
                      skills, strategic thinking, and the ability to perform under pressure, skills that 
                      translate well into software engineering and team collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Favorite Clips Showcase */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Favorite <span className="hero-gradient">Clips</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {favoriteClips.map((clip, index) => (
              <Card 
                key={index}
                className="group overflow-hidden glass hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={clip.thumbnail} 
                    alt={clip.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const clipUrls = [
                        "https://www.twitch.tv/vintriix_/clip/GoodFrailTrufflePrimeMe-cDccZzyHxJ-C7RjX?filter=clips&range=7d&sort=time",
                        "https://drive.google.com/file/d/1VSezpHGhLyw3Ny6faP-jfCgHmFhcZHdr/view?usp=sharing",
                        "https://drive.google.com/file/d/1dbV0hrPVmCVDxTEHrNLtn7vlSo8-Lf0W/view?usp=sharing",
                        "https://drive.google.com/file/d/1JqZe5VxbY61qdWQ0ptPHnOeY55EOmGLR/view?usp=drive_link"
                      ];
                      
                      return (
                        <a
                          href={clipUrls[index]}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${index === 0 ? 'Twitch' : 'Google Drive'} clip in a new tab`}
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </a>
                      );
                    })()}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                      {clip.duration}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {clip.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {clip.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">They don't call me the clutch king for no reason!</p>
            <Button 
              asChild
              variant="outline" 
              className="border-accent/30 hover:bg-accent/10"
            >
              <a href="https://drive.google.com/drive/folders/1OV5v7p1RaDkLdViZvs2Vb7KkbaILz8yo?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Full Highlight Reel
              </a>
            </Button>
          </div>
        </div>

        {/* Personal Philosophy */}
        <Card className="p-8 glass text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              My <span className="hero-gradient">Philosophy</span>
            </h3>
            <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-6">
              "I believe in the power of technology to solve real-world problems and create meaningful impact. 
              Through the intersection of mathematics, computation, and data science, I strive to build solutions 
              that not only work efficiently but also serve the greater good of communities and organizations!"
            </blockquote>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </div>
        </Card>

        {/* Fun Facts */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="text-3xl mb-2">🧮</div>
            <h4 className="font-semibold mb-2">Math Enthusiast</h4>
            <p className="text-sm text-muted-foreground">Love exploring real analysis and computational mathematics</p>
          </Card>
          
          <Card className="p-6 text-center glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="font-semibold mb-2">Innovation Driven</h4>
            <p className="text-sm text-muted-foreground">Always exploring new technologies and frameworks</p>
          </Card>
          
          <Card className="p-6 text-center glass hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="text-3xl mb-2">🌟</div>
            <h4 className="font-semibold mb-2">Community Builder</h4>
            <p className="text-sm text-muted-foreground">Active in ACM and open-source communities</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Personal;