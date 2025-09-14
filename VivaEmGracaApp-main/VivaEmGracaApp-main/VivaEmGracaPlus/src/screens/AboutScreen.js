import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Seção Hero */}
      <View style={styles.heroSection}>
        <Text style={styles.sectionTag}>Quem Somos</Text>
        <Text style={styles.heroTitle}>Uma Igreja Para Todas as Gerações</Text>
        <Text style={styles.heroDescription}>
          Somos uma comunidade acolhedora, especialmente focada em alcançar jovens e famílias
        </Text>
      </View>

      {/* Seção de Informações */}
      <View style={styles.infoSection}>
        {/* Nossa Missão */}
        <View style={styles.infoCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="heart" size={30} color="#4a7c59" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Nossa Missão</Text>
            <Text style={styles.infoDescription}>
              Levar o amor de Cristo a todas as pessoas, especialmente aos jovens, 
              transformando vidas através da palavra de Deus e do poder do Espírito Santo.
            </Text>
          </View>
        </View>

        {/* Nossa Comunidade */}
        <View style={styles.infoCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="people" size={30} color="#4a7c59" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Nossa Comunidade</Text>
            <Text style={styles.infoDescription}>
              Uma família diversa e acolhedora, onde jovens e adultos crescem juntos na fé, 
              compartilhando experiências e construindo relacionamentos duradouros.
            </Text>
          </View>
        </View>

        {/* Nossa Visão */}
        <View style={styles.infoCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="star" size={30} color="#4a7c59" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Nossa Visão</Text>
            <Text style={styles.infoDescription}>
              Ser uma igreja relevante e transformadora, que impacta positivamente nossa cidade 
              através do amor, da verdade e da esperança em Cristo.
            </Text>
          </View>
        </View>
      </View>

      {/* Estatísticas */}
      <View style={styles.statsSection}>
        <Text style={styles.statsTitle}>Nossa Igreja em Números</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>100+</Text>
            <Text style={styles.statLabel}>Membros Ativos</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>14</Text>
            <Text style={styles.statLabel}>Anos de História</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Cultos por Semana</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>❤️+</Text>
            <Text style={styles.statLabel}>Ministérios de Casais</Text>
          </View>
        </View>
      </View>

      {/* Galeria de Fotos */}
      <View style={styles.gallerySection}>
        <Text style={styles.galleryTitle}>Nossa Galeria</Text>
        
        <View style={styles.galleryGrid}>
          <View style={styles.galleryItem}>
            <View style={styles.galleryPlaceholder}>
              <Ionicons name="musical-notes" size={40} color="#4a7c59" />
            </View>
            <Text style={styles.galleryLabel}>Culto de Adoração</Text>
            <Text style={styles.galleryDescription}>
              Momentos especiais de louvor e adoração
            </Text>
          </View>
          
          <View style={styles.galleryItem}>
            <View style={styles.galleryPlaceholder}>
              <Ionicons name="people" size={40} color="#4a7c59" />
            </View>
            <Text style={styles.galleryLabel}>Comunhão</Text>
            <Text style={styles.galleryDescription}>
              Unidos em Cristo, crescendo juntos
            </Text>
          </View>
          
          <View style={styles.galleryItem}>
            <View style={styles.galleryPlaceholder}>
              <Ionicons name="happy" size={40} color="#4a7c59" />
            </View>
            <Text style={styles.galleryLabel}>Jovens</Text>
            <Text style={styles.galleryDescription}>
              A nova geração servindo ao Senhor
            </Text>
          </View>
          
          <View style={styles.galleryItem}>
            <View style={styles.galleryPlaceholder}>
              <Ionicons name="home" size={40} color="#4a7c59" />
            </View>
            <Text style={styles.galleryLabel}>Família</Text>
            <Text style={styles.galleryDescription}>
              Uma igreja para todas as gerações
            </Text>
          </View>
          
          <View style={styles.galleryItem}>
            <View style={styles.galleryPlaceholder}>
              <Ionicons name="gift" size={40} color="#4a7c59" />
            </View>
            <Text style={styles.galleryLabel}>Celebração</Text>
            <Text style={styles.galleryDescription}>
              Celebrando as bênçãos de Deus
            </Text>
          </View>
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
  heroSection: {
    backgroundColor: '#ffffff',
    padding: 25,
    alignItems: 'center',
  },
  sectionTag: {
    backgroundColor: '#e8f5e8',
    color: '#4a7c59',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 15,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  heroDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  infoSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  infoCard: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  statsSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: (width - 60) / 2,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a7c59',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  gallerySection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  galleryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: (width - 60) / 2,
    alignItems: 'center',
    marginBottom: 25,
  },
  galleryPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  galleryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  galleryDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
});

