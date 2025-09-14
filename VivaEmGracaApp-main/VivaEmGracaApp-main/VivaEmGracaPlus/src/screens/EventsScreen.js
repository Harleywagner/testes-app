import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function EventsScreen() {
  const services = [
    {
      id: 1,
      title: 'Culto de Domingo',
      day: 'Domingos',
      times: ['9:00h', '18:00h'],
      description: 'Momentos especiais de louvor ao Senhor, com mensagens edificantes e comunhão.',
      icon: 'sunny',
      color: '#FFD700',
    },
    {
      id: 2,
      title: 'Culto de Doutrina',
      day: 'Sexta-feiras',
      times: ['19:00h'],
      description: 'Estudo aprofundado da Palavra de Deus para crescimento espiritual e conhecimento bíblico.',
      icon: 'book',
      color: '#4a7c59',
    },
    {
      id: 3,
      title: 'Culto de Quarta',
      day: 'Quarta-feiras',
      times: ['19:00h'],
      description: 'Encontro especial com mensagens edificantes e muita comunhão.',
      icon: 'heart',
      color: '#FF6B6B',
    },
    {
      id: 4,
      title: 'Culto de Casais',
      day: 'Conforme programação',
      times: ['Horário a definir'],
      description: 'Momento especial para casais fortaleceram seus relacionamentos através da Palavra de Deus.',
      icon: 'people',
      color: '#9B59B6',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTag}>Programação</Text>
        <Text style={styles.headerTitle}>Nossos Eventos</Text>
        <Text style={styles.headerDescription}>
          Participe dos nossos eventos e fortaleça sua fé em comunidade
        </Text>
      </View>

      {/* Evento em Destaque */}
      <View style={styles.highlightSection}>
        <Text style={styles.highlightTitle}>Evento em Destaque</Text>
        <View style={styles.highlightCard}>
          <View style={styles.highlightIcon}>
            <Ionicons name="calendar" size={40} color="#4a7c59" />
          </View>
          <Text style={styles.highlightEventTitle}>Programação Especial</Text>
          <Text style={styles.highlightEventDescription}>
            Acompanhe nossa programação especial de eventos e cultos. 
            Venha fazer parte da nossa comunidade de fé!
          </Text>
        </View>
      </View>

      {/* Cultos da Semana */}
      <View style={styles.servicesSection}>
        <Text style={styles.servicesTitle}>Cultos da Semana</Text>
        
        {services.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceCard}>
            <View style={[styles.serviceIcon, { backgroundColor: service.color + '20' }]}>
              <Ionicons name={service.icon} size={30} color={service.color} />
            </View>
            
            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              
              <View style={styles.serviceSchedule}>
                <View style={styles.scheduleItem}>
                  <Ionicons name="calendar-outline" size={16} color="#666" />
                  <Text style={styles.scheduleText}>{service.day}</Text>
                </View>
                
                <View style={styles.scheduleItem}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.scheduleText}>{service.times.join(' e ')}</Text>
                </View>
              </View>
              
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Informações Adicionais */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Informações Importantes</Text>
        
        <View style={styles.infoCard}>
          <Ionicons name="location" size={24} color="#4a7c59" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Endereço</Text>
            <Text style={styles.infoText}>
              Rua Barão do Rio Branco 2145 - Centro{'\n'}
              Fortaleza - CE, CEP: 60025-060
            </Text>
          </View>
        </View>
        
        <View style={styles.infoCard}>
          <Ionicons name="call" size={24} color="#4a7c59" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Contato</Text>
            <Text style={styles.infoText}>(85) 99808-7066</Text>
          </View>
        </View>
        
        <View style={styles.infoCard}>
          <Ionicons name="mail" size={24} color="#4a7c59" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>E-mail</Text>
            <Text style={styles.infoText}>pr.fledsonalves@hotmail.com</Text>
          </View>
        </View>
      </View>

      {/* Botão de Contato */}
      <View style={styles.contactSection}>
        <TouchableOpacity style={styles.contactButton}>
          <Ionicons name="chatbubble" size={24} color="#ffffff" />
          <Text style={styles.contactButtonText}>Entre em Contato</Text>
        </TouchableOpacity>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  headerDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  highlightSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightCard: {
    backgroundColor: '#f9f9f9',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  highlightIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  highlightEventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlightEventDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  servicesSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  serviceSchedule: {
    marginBottom: 8,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  scheduleText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  serviceDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  infoSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  infoContent: {
    flex: 1,
    marginLeft: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactSection: {
    padding: 20,
    marginBottom: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a7c59',
    paddingVertical: 15,
    borderRadius: 25,
    gap: 10,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

