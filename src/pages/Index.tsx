import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'Классический фейерверк',
      description: 'Традиционное шоу с золотыми и серебряными залпами',
      price: 'от 50 000 ₽',
      duration: '5-10 минут',
      icon: 'Sparkles'
    },
    {
      title: 'Премиум шоу',
      description: 'Роскошное представление с музыкальным сопровождением',
      price: 'от 150 000 ₽',
      duration: '15-20 минут',
      icon: 'Crown'
    },
    {
      title: 'Цветной фейерверк',
      description: 'Яркое шоу с разноцветными эффектами',
      price: 'от 80 000 ₽',
      duration: '10-15 минут',
      icon: 'Palette'
    },
    {
      title: 'Низкий фейерверк',
      description: 'Безопасное шоу для закрытых площадок',
      price: 'от 60 000 ₽',
      duration: '5-10 минут',
      icon: 'Flame'
    }
  ];

  const portfolio = [
    {
      title: 'Свадьба в Grand Hotel',
      date: '15 августа 2024',
      image: 'https://cdn.poehali.dev/projects/21097c0d-83be-4aa5-8d8f-30199188f1fe/files/84d9efc1-1e6f-4e75-8a0f-b484994f1ce6.jpg'
    },
    {
      title: 'Корпоратив IT-компании',
      date: '20 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/21097c0d-83be-4aa5-8d8f-30199188f1fe/files/460d4be8-2219-418a-bd6f-2b23b63983e2.jpg'
    },
    {
      title: 'Юбилей ресторана',
      date: '5 сентября 2024',
      image: 'https://cdn.poehali.dev/projects/21097c0d-83be-4aa5-8d8f-30199188f1fe/files/585c76a1-3ebb-437c-94c7-0b3e448a180d.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      event: 'Свадьба',
      rating: 5,
      text: 'Невероятное шоу! Гости были в восторге. Фейерверк стал изюминкой нашей свадьбы.'
    },
    {
      name: 'Дмитрий Сергеев',
      event: 'Корпоратив',
      rating: 5,
      text: 'Профессиональный подход, точность и безопасность. Рекомендуем всем!'
    },
    {
      name: 'Елена Иванова',
      event: 'День рождения',
      rating: 5,
      text: 'Спасибо за волшебный вечер! Фейерверк превзошёл все ожидания.'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-gold" size={32} />
              <h1 className="text-2xl font-bold text-gold">FireWorks Premium</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-silver hover:text-gold transition-colors">Главная</a>
              <a href="#services" className="text-silver hover:text-gold transition-colors">Услуги</a>
              <a href="#portfolio" className="text-silver hover:text-gold transition-colors">Портфолио</a>
              <a href="#reviews" className="text-silver hover:text-gold transition-colors">Отзывы</a>
              <a href="#gallery" className="text-silver hover:text-gold transition-colors">Галерея</a>
              <a href="#contacts" className="text-silver hover:text-gold transition-colors">Контакты</a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={28} />
            </Button>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gold text-dark-navy hover:bg-gold/90 glow-gold">
                  Забронировать
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-gold">Бронирование фейерверка</DialogTitle>
                  <DialogDescription>
                    Заполните форму, и мы свяжемся с вами для обсуждения деталей
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Дата мероприятия</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <Icon name="CalendarDays" className="mr-2" size={16} />
                            {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Тип фейерверка</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.title}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Расскажите о вашем мероприятии..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-gold text-dark-navy hover:bg-gold/90">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-silver hover:text-gold transition-colors"
            >
              Главная
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-silver hover:text-gold transition-colors"
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-silver hover:text-gold transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-silver hover:text-gold transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-silver hover:text-gold transition-colors"
            >
              Галерея
            </a>
            <a
              href="#contacts"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-silver hover:text-gold transition-colors"
            >
              Контакты
            </a>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsBookingOpen(true);
              }}
              className="bg-gold text-dark-navy hover:bg-gold/90 text-xl px-8 py-6 glow-gold"
            >
              Забронировать
            </Button>
          </div>
        </div>
      )}

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gold sparkle">
              Превратите ваше мероприятие
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-8 text-silver">
              в волшебное шоу
            </h3>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Профессиональные фейерверки премиум-класса для свадеб, корпоративов и частных мероприятий
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-gold text-dark-navy hover:bg-gold/90 text-lg px-8 py-6 glow-gold"
              >
                <Icon name="Sparkles" className="mr-2" />
                Забронировать шоу
              </Button>
              <Button variant="outline" className="border-silver text-silver hover:bg-silver/10 text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-scale-in p-6 rounded-lg border border-gold/20 bg-card/50 backdrop-blur">
              <Icon name="Award" className="text-gold mx-auto mb-4" size={48} />
              <h4 className="text-2xl font-bold text-gold mb-2">10+ лет</h4>
              <p className="text-muted-foreground">опыта на рынке</p>
            </div>
            <div className="animate-scale-in p-6 rounded-lg border border-gold/20 bg-card/50 backdrop-blur" style={{animationDelay: '0.1s'}}>
              <Icon name="Users" className="text-gold mx-auto mb-4" size={48} />
              <h4 className="text-2xl font-bold text-gold mb-2">500+</h4>
              <p className="text-muted-foreground">проведённых шоу</p>
            </div>
            <div className="animate-scale-in p-6 rounded-lg border border-gold/20 bg-card/50 backdrop-blur" style={{animationDelay: '0.2s'}}>
              <Icon name="Star" className="text-gold mx-auto mb-4" size={48} />
              <h4 className="text-2xl font-bold text-gold mb-2">100%</h4>
              <p className="text-muted-foreground">довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите идеальный фейерверк для вашего события
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-gold/20 bg-card hover:border-gold transition-all hover:glow-gold">
                <CardHeader>
                  <Icon name={service.icon as any} className="text-gold mb-4" size={48} />
                  <CardTitle className="text-gold">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="text-silver" size={16} />
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" className="text-silver" size={16} />
                      <span className="text-lg font-bold text-gold">{service.price}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => {
                      setSelectedService(service.title);
                      setIsBookingOpen(true);
                    }}
                    className="w-full mt-4 bg-gold/10 text-gold hover:bg-gold hover:text-dark-navy transition-all"
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Наши лучшие проекты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border border-gold/20 hover:glow-gold transition-all">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-gold mb-2">{project.title}</h3>
                    <p className="text-silver">{project.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-gold/20 bg-card">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-gold fill-gold" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-gold">{review.name}</CardTitle>
                  <CardDescription>{review.event}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Моменты наших шоу
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...portfolio, ...portfolio].map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg border border-gold/20 hover:glow-gold transition-all group">
                <img 
                  src={item.image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами для консультации
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Phone" className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (926) 987-65-43</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@fireworks-premium.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="MapPin" className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </div>
            <Card className="border-gold/20 bg-card">
              <CardHeader>
                <CardTitle className="text-gold">Быстрая связь</CardTitle>
                <CardDescription>Оставьте заявку, и мы перезвоним</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <Button className="w-full bg-gold text-dark-navy hover:bg-gold/90">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gold/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" className="text-gold" size={24} />
            <span className="text-xl font-bold text-gold">FireWorks Premium</span>
          </div>
          <p className="text-muted-foreground">© 2024 FireWorks Premium. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;