import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Linking,
  Image,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import RadioPlayer from '../components/RadioPlayer';
import { socialLinks } from '../utils/socialLinks';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatListRef = useRef(null);

  const carouselData = [
    {
      id: 1,
      image: require('../assets/01.jpeg'),
      title: 'Pastor Fledson Alves',
      description: 'Fundador e Pastor da Igreja Viva em Graça'
    },
    {
      id: 2,
      image: require('../assets/02.jpeg'),
      title: 'Comunhão',
      description: 'Unidos em Cristo, crescendo juntos'
    },
    {
      id: 3,
      image: require('../assets/03.jpeg'),
      title: 'Família',
      description: 'Uma igreja para todas as gerações'
    },
    {
      id: 4,
      image: require('../assets/04.jpeg'),
      title: 'Culto de Adoração',
      description: 'Momentos especiais de louvor e adoração'
    },
    {
      id: 5,
      image: require('../assets/05.jpeg'),
      title: 'Jovens',
      description: 'A nova geração servindo ao Senhor'
    },
    {
      id: 6,
      image: require('../assets/06.jpeg'),
      title: 'Celebração',
      description: 'Celebrando as bênçãos de Deus'
    }
  ];
  const openSocialLink = async (platform) => {
    let url = '';
    
    switch (platform) {
      case 'youtube':
        url = socialLinks.youtube;
        break;
      case 'instagram':
        url = socialLinks.instagram;
        break;
      case 'facebook':
        url = socialLinks.facebook;
        break;
      case 'whatsapp':
        url = `https://wa.me/${socialLinks.whatsapp}`;
        break;
      default:
        return;
    }
    
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir link:', error);
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#4a7c59" />
      
      {/* Header com Logo e Rádio */}
      <View style={styles.header}>
        <LinearGradient
          colors={['#4a7c59', '#6ba165']}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle}>
                <Ionicons name="leaf" size={30} color="#ffffff" />
              </View>
              <View style={styles.churchInfo}>
                <Text style={styles.churchName}>Igreja Evangélica</Text>
                <Text style={styles.churchName}>Viva em Graça</Text>
              </View>
            </View>
            
            {/* Player de Rádio */}
            <RadioPlayer />
          </View>
        </LinearGradient>
      </View>

      {/* Seção Hero */}
      <View style={styles.heroSection}>
        <LinearGradient
          colors={['#87CEEB', '#4682B4']}
          style={styles.heroGradient}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Igreja Evangélica</Text>
            <Text style={styles.heroSubtitle}>Viva em Graça</Text>
            <Text style={styles.heroWebsite}>www.vivaemgraca.com.br</Text>
            
            <View style={styles.heroButtons}>
              <TouchableOpacity 
                style={styles.heroButton}
                onPress={() => navigation.navigate('Sobre')}
              >
                <Ionicons name="heart" size={20} color="#ffffff" />
                <Text style={styles.heroButtonText}>Conheça Nossa História</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.heroButton, styles.heroButtonSecondary]}
                onPress={() => navigation.navigate('Contato')}
              >
                <Ionicons name="location" size={20} color="#4a7c59" />
                <Text style={[styles.heroButtonText, styles.heroButtonTextSecondary]}>
                  Visite-nos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>

      {/* Carrossel de Imagens */}
      <View style={styles.carouselSection}>
        <Text style={styles.carouselTitle}>Nossa Galeria</Text>
        <FlatList
          ref={flatListRef}
          data={carouselData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          onMomentumScrollEnd={(event) => {
            const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentSlide(slideIndex);
          }}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} />
              <View style={styles.carouselOverlay}>
                <Text style={styles.carouselItemTitle}>{item.title}</Text>
                <Text style={styles.carouselItemDescription}>{item.description}</Text>
              </View>
            </View>
          )}
        />
        
        {/* Indicadores do carrossel */}
        <View style={styles.carouselIndicators}>
          {carouselData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlide === index && styles.activeIndicator
              ]}
            />
          ))}
        </View>
      </View>

      {/* Seção de Crescimento Espiritual */}
      <View style={styles.section}>
        <View style={styles.sectionTag}>
          <Text style={styles.sectionTagText}>CRESCIMENTO ESPIRITUAL</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Cursos Bíblicos</Text>
        <Text style={styles.sectionDescription}>
          Aprofunde seus conhecimentos bíblicos com nossos cursos online
        </Text>

        {/* Passos para compra */}
        <View style={styles.stepsContainer}>
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <Text style={styles.stepText}>Escolha seu curso</Text>
          </View>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <Text style={styles.stepText}>Pague via PIX</Text>
          </View>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={styles.stepText}>Envie o comprovante</Text>
          </View>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>4</Text>
            </View>
            <Text style={styles.stepText}>Receba sua senha</Text>
          </View>
        </View>

        {/* Botão para cursos */}
        <TouchableOpacity 
          style={styles.coursesButton}
          onPress={() => navigation.navigate('Cursos')}
        >
          <Ionicons name="school" size={24} color="#ffffff" />
          <Text style={styles.coursesButtonText}>Ver Cursos</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de Formação em Teologia */}
      <View style={styles.section}>
        <View style={styles.courseCard}>
          <View style={styles.courseIcon}>
            <Ionicons name="school" size={40} color="#4a7c59" />
          </View>
          <Text style={styles.courseTitle}>Formação em Teologia em Graça</Text>
          <Text style={styles.courseDescription}>
            Curso completo de formação teológica com foco na doutrina da graça.
          </Text>
          <Text style={styles.coursePrice}>R$ 49,99</Text>
          
          <TouchableOpacity 
            style={styles.courseButton}
            onPress={() => navigation.navigate('Cursos')}
          >
            <Text style={styles.courseButtonText}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Redes Sociais */}
      <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>Siga-nos nas Redes Sociais</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, styles.youtubeButton]}>
            <Ionicons name="logo-youtube" size={30} color="#ffffff" />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.socialButton, styles.instagramButton]}>
            <Ionicons name="logo-instagram" size={30} color="#ffffff" />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Ionicons name="logo-facebook" size={30} color="#ffffff" />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.socialButton, styles.whatsappButton]}>
            <Ionicons name="logo-whatsapp" size={30} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 80,
  },
  headerGradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  churchInfo: {
    flex: 1,
  },
  churchName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  heroSection: {
    height: height * 0.4,
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  heroWebsite: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a7c59',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  heroButtonSecondary: {
    backgroundColor: '#ffffff',
  },
  heroButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  heroButtonTextSecondary: {
    color: '#4a7c59',
  },
  section: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginVertical: 5,
  },
  sectionTag: {
    alignSelf: 'center',
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 15,
  },
  sectionTagText: {
    color: '#4a7c59',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
    lineHeight: 22,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  step: {
    alignItems: 'center',
    flex: 1,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4a7c59',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumberText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stepText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  coursesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a7c59',
    paddingVertical: 15,
    borderRadius: 25,
    gap: 10,
  },
  coursesButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  courseIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  coursePrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a7c59',
    marginBottom: 15,
  },
  courseButton: {
    backgroundColor: '#4a7c59',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  courseButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  socialSection: {
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  youtubeButton: {
    backgroundColor: '#FF0000',
  },
  instagramButton: {
    backgroundColor: '#E4405F',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
  },
  carouselSection: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  carouselItem: {
    width: width,
    height: 250,
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  carouselOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  carouselItemTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carouselItemDescription: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
  },
  carouselIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#4a7c59',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

