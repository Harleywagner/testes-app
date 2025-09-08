import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { 
  Home, 
  Users, 
  Calendar, 
  Video, 
  BookOpen, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Star,
  Play,
  Instagram,
  Youtube,
  Menu,
  X
} from 'lucide-react';
import './App.css';

// Importar imagens
import logoIcon from './assets/icone3D.png';

function App() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
      const PLAYLIST_ID = 'PLnssO8fvS8oMzEb-ngllBQlJolWsYkRTR';
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${API_KEY}&maxResults=5`);
        const data = await response.json();
        if (data.items) {
          setYoutubeVideos(data.items);
        } else {
          console.error("Error fetching YouTube videos:", data);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchYoutubeVideos();
  }, []);



  // Dados dos eventos
  const events = [
    {
      title: "Culto de Domingo",
      time: "09:00 - 11:00",
      description: "Culto principal com toda a família"
    },
    {
      title: "Reunião de Oração",
      time: "19:30 - 21:00",
      description: "Terças-feiras - Tempo de oração e comunhão"
    },
    {
      title: "Estudo Bíblico",
      time: "19:30 - 21:00",
      description: "Quintas-feiras - Aprofundamento na Palavra"
    },
    {
      title: "Reunião de Jovens",
      time: "19:00 - 21:00",
      description: "Sábados - Encontro da juventude"
    }
  ];

  const Header = () => (
    <header className="church-gradient text-white p-4 sticky top-0 z-50 church-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logoIcon} alt="Igreja Vida em Graça" className="w-12 h-12 animate-float" />
          <div>
            <h1 className="text-lg font-bold">Igreja Vida em Graça</h1>
            <p className="text-sm opacity-90">Transformando Vidas</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="mt-4 space-y-2 animate-in slide-in-from-top duration-300">
          {[
            { id: 'inicio', label: 'Início', icon: Home },
            { id: 'sobre', label: 'Sobre Nós', icon: Users },
            { id: 'eventos', label: 'Eventos', icon: Calendar },
            { id: 'videos', label: 'Vídeos', icon: Video },
            { id: 'cursos', label: 'Cursos', icon: BookOpen },
            { id: 'contato', label: 'Contato', icon: Phone }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id)
                setIsMenuOpen(false)
              }}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                activeTab === id ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  )

  const InicioTab = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="church-gradient text-white p-8 rounded-2xl text-center church-shadow">
        <img src={logoIcon} alt="Igreja Vida em Graça" className="w-24 h-24 mx-auto mb-4 animate-float" />
        <h2 className="text-3xl font-bold mb-2">Bem-vindos!</h2>
        <p className="text-lg opacity-90 mb-6">Uma Igreja Para Todas as Gerações</p>
        <p className="text-base opacity-80">
          Somos uma comunidade diversa e acolhedora, especialmente focada em alcançar jovens e famílias
        </p>
      </div>

      {/* Rádio Online */}
      <Card className="church-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="text-primary" size={24} />
            <span>Rádio Viva em Graça</span>
          </CardTitle>
          <CardDescription>Ouça nossa programação ao vivo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg">
            <iframe 
              src="https://player.srvaudio.com.br/player5/10048" 
              height="60px" 
              width="100%"
              style={{border: 'none', borderRadius: '8px'}} 
              frameBorder="0" 
              scrolling="no"
              title="Rádio Viva em Graça"
            />
          </div>
        </CardContent>
      </Card>



      {/* Próximos Eventos */}
      <Card className="church-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="text-primary" size={24} />
            <span>Próximos Eventos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {events.slice(0, 2).map((event, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="text-primary" size={20} />
                <div>
                  <h4 className="font-semibold">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.time}</p>
                  <p className="text-sm text-gray-500">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const SobreTab = () => (
    <div className="space-y-6">
      <Card className="church-card">
        <CardHeader>
          <CardTitle className="church-text-gradient text-2xl">Quem Somos</CardTitle>
          <CardDescription>Conheça nossa história e missão</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <img src={logoIcon} alt="Igreja Vida em Graça" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Uma Igreja Para Todas as Gerações</h3>
            <p className="text-gray-600">
              Somos uma comunidade diversa e acolhedora, especialmente focada em alcançar jovens e famílias. 
              Nossa missão é transformar vidas através do amor de Cristo, criando um ambiente onde todos 
              podem crescer espiritualmente e encontrar seu propósito.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <Heart className="text-primary mx-auto mb-2" size={32} />
              <h4 className="font-semibold">Nossa Missão</h4>
              <p className="text-sm text-gray-600">Transformar vidas através do amor de Cristo</p>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <Star className="text-accent mx-auto mb-2" size={32} />
              <h4 className="font-semibold">Nossa Visão</h4>
              <p className="text-sm text-gray-600">Ser uma igreja relevante para todas as gerações</p>
            </div>
          </div>
        </CardContent>
      </Card>


    </div>
  )

  const EventosTab = () => (
    <div className="space-y-6">
      <Card className="church-card">
        <CardHeader>
          <CardTitle className="church-text-gradient text-2xl">Nossos Eventos</CardTitle>
          <CardDescription>Participe dos nossos eventos e fortaleça sua fé em comunidade</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="p-4 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-primary mt-1" size={20} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="text-gray-500" size={16} />
                      <span className="text-gray-600">{event.time}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="church-card">
        <CardHeader>
          <CardTitle>Cultos da Semana</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <h4 className="font-semibold">Domingo - Culto Principal</h4>
              <p className="text-sm text-gray-600">09:00 às 11:00 - Culto com toda a família</p>
            </div>
            <div className="p-3 bg-accent/10 rounded-lg">
              <h4 className="font-semibold">Terça-feira - Reunião de Oração</h4>
              <p className="text-sm text-gray-600">19:30 às 21:00 - Tempo de oração e comunhão</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <h4 className="font-semibold">Quinta-feira - Estudo Bíblico</h4>
              <p className="text-sm text-gray-600">19:30 às 21:00 - Aprofundamento na Palavra</p>
            </div>
            <div className="p-3 bg-accent/10 rounded-lg">
              <h4 className="font-semibold">Sábado - Reunião de Jovens</h4>
              <p className="text-sm text-gray-600">19:00 às 21:00 - Encontro da juventude</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const VideosTab = () => (
    <div className="space-y-6">
      <Card className="church-card">
        <CardHeader>
          <CardTitle className="church-text-gradient text-2xl">Nossos Vídeos</CardTitle>
          <CardDescription>Assista às nossas mensagens e acompanhe a vida da nossa comunidade</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="flex space-x-3 p-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                <img 
                  src={video.snippet.thumbnails.default.url} 
                  alt={video.snippet.title}
                  className="w-20 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{video.snippet.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                  <Button size="sm" className="mt-2" variant="outline" onClick={() => window.open(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`, "_blank")}>
                    <Play size={16} className="mr-1" />
                    Assistir
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="church-card">
        <CardHeader>
          <CardTitle>Transmissão ao Vivo</CardTitle>
          <CardDescription>Acompanhe nossos cultos ao vivo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Video className="text-primary mx-auto mb-3" size={48} />
            <h3 className="font-semibold mb-2">Próxima Transmissão</h3>
            <p className="text-gray-600 mb-4">Domingo às 09:00</p>
            <Button className="church-gradient text-white">
              <Play size={16} className="mr-2" />
              Assistir ao Vivo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
  const CursosTab = () => (
    <div className="space-y-6">
      <Card className="church-card">
        <CardHeader>
          <CardTitle className="church-text-gradient text-2xl">Cursos Bíblicos</CardTitle>
          <CardDescription>Aprofunde seus conhecimentos bíblicos com nossos cursos online</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-2">Como Participar:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">1</Badge>
                  <span>Escolha seu curso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">2</Badge>
                  <span>Pague via PIX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">3</Badge>
                  <span>Envie o comprovante</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">4</Badge>
                  <span>Receba sua senha por WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-primary/10 rounded-lg">
              <BookOpen className="text-primary mx-auto mb-3" size={48} />
              <h3 className="font-semibold mb-2">Crescimento Espiritual</h3>
              <p className="text-gray-600 mb-4">Cursos disponíveis para aprofundar sua fé</p>
              <Button className="church-gradient text-white">
                Ver Cursos Disponíveis
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ContatoTab = () => (
    <div className="space-y-6">
      <Card className="church-card">
        <CardHeader>
          <CardTitle className="church-text-gradient text-2xl">Entre em Contato</CardTitle>
          <CardDescription>Venha nos visitar ou entre em contato conosco. Será um prazer recebê-lo!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="text-primary" size={24} />
              <div>
                <h4 className="font-semibold">Localização</h4>
                <p className="text-gray-600">Venha nos visitar em nossa igreja</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="text-primary" size={24} />
              <div>
                <h4 className="font-semibold">Telefone</h4>
                <p className="text-gray-600">Entre em contato conosco</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="text-primary" size={24} />
              <div>
                <h4 className="font-semibold">Horários de Funcionamento</h4>
                <p className="text-gray-600">Domingo: 09:00 - 11:00</p>
                <p className="text-gray-600">Terça: 19:30 - 21:00</p>
                <p className="text-gray-600">Quinta: 19:30 - 21:00</p>
                <p className="text-gray-600">Sábado: 19:00 - 21:00</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-3">Siga-nos nas Redes Sociais</h4>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Youtube className="text-red-600" size={20} />
                <span>YouTube</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Instagram className="text-pink-600" size={20} />
                <span>Instagram</span>
              </Button>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button className="church-gradient text-white w-full">
              <MapPin size={16} className="mr-2" />
              Visite-nos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'inicio': return <InicioTab />
      case 'sobre': return <SobreTab />
      case 'eventos': return <EventosTab />
      case 'videos': return <VideosTab />
      case 'cursos': return <CursosTab />
      case 'contato': return <ContatoTab />
      default: return <InicioTab />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <main className="p-4 pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          {[
            { id: 'inicio', icon: Home, label: 'Início' },
            { id: 'sobre', icon: Users, label: 'Sobre' },
            { id: 'eventos', icon: Calendar, label: 'Eventos' },
            { id: 'videos', icon: Video, label: 'Vídeos' },
            { id: 'cursos', icon: BookOpen, label: 'Cursos' },
            { id: 'contato', icon: Phone, label: 'Contato' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                activeTab === id 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-500 hover:text-primary hover:bg-primary/5'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default App
