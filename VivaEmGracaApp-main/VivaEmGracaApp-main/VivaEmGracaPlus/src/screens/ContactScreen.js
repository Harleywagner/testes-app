import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default function ContactScreen() {
  const openPhone = () => {
    Linking.openURL('tel:+5585998087066');
  };

  const openEmail = () => {
    Linking.openURL('mailto:pr.fledsonalves@hotmail.com');
  };

  const openWhatsApp = () => {
    const message = 'Olá! Gostaria de saber mais informações sobre a Igreja Viva em Graça.';
    const whatsappUrl = `https://wa.me/5585998087066?text=${encodeURIComponent(message)}`;
    WebBrowser.openBrowserAsync(whatsappUrl);
  };

  const openMaps = () => {
    const address = 'Rua Barão do Rio Branco 2145, Centro, Fortaleza - CE, 60025-060';
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    WebBrowser.openBrowserAsync(mapsUrl);
  };

  const openSocialMedia = (platform) => {
    let url = '';
    switch (platform) {
      case 'youtube':
        url = 'https://www.youtube.com/channel/UCaRhVrYNb1iMwKvpCo9fQ5g';
        break;
      case 'instagram':
        url = 'https://instagram.com/pastor_fledson?utm_medium=copy_link';
        break;
      case 'facebook':
        url = 'https://www.facebook.com/fledson.santos.5';
        break;
      default:
        return;
    }
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTag}>Fale Conosco</Text>
        <Text style={styles.headerTitle}>Entre em Contato</Text>
        <Text style={styles.headerDescription}>
          Venha nos visitar ou entre em contato conosco. Será um prazer recebê-lo!
        </Text>
      </View>

      {/* Informações de Contato */}
      <View style={styles.contactSection}>
        {/* Endereço */}
        <TouchableOpacity style={styles.contactCard} onPress={openMaps}>
          <View style={styles.contactIcon}>
            <Ionicons name="location" size={30} color="#4a7c59" />
          </View>
          <View style={styles.contactContent}>
            <Text style={styles.contactTitle}>Endereço</Text>
            <Text style={styles.contactText}>
              Rua Barão do Rio Branco 2145 - Centro{'\n'}
              Fortaleza - CE, CEP: 60025-060
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        {/* Telefone */}
        <TouchableOpacity style={styles.contactCard} onPress={openPhone}>
          <View style={styles.contactIcon}>
            <Ionicons name="call" size={30} color="#4a7c59" />
          </View>
          <View style={styles.contactContent}>
            <Text style={styles.contactTitle}>Telefone</Text>
            <Text style={styles.contactText}>(85) 99808-7066</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        {/* E-mail */}
        <TouchableOpacity style={styles.contactCard} onPress={openEmail}>
          <View style={styles.contactIcon}>
            <Ionicons name="mail" size={30} color="#4a7c59" />
          </View>
          <View style={styles.contactContent}>
            <Text style={styles.contactTitle}>E-mail</Text>
            <Text style={styles.contactText}>pr.fledsonalves@hotmail.com</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        {/* WhatsApp */}
        <TouchableOpacity style={styles.contactCard} onPress={openWhatsApp}>
          <View style={styles.contactIcon}>
            <Ionicons name="logo-whatsapp" size={30} color="#25D366" />
          </View>
          <View style={styles.contactContent}>
            <Text style={styles.contactTitle}>WhatsApp</Text>
            <Text style={styles.contactText}>Envie uma mensagem</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Horários de Culto */}
      <View style={styles.scheduleSection}>
        <Text style={styles.scheduleTitle}>Horários de Culto</Text>
        
        <View style={styles.scheduleCard}>
          <View style={styles.scheduleIcon}>
            <Ionicons name="time" size={30} color="#4a7c59" />
          </View>
          <View style={styles.scheduleContent}>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleDay}>Domingo</Text>
              <Text style={styles.scheduleTime}>9h e 18h</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleDay}>Quarta-feira</Text>
              <Text style={styles.scheduleTime}>19h</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleDay}>Sexta-feira</Text>
              <Text style={styles.scheduleTime}>19h - Oração e confissão da palavra</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Redes Sociais */}
      <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>Siga-nos nas Redes Sociais</Text>
        
        <View style={styles.socialButtons}>
          <TouchableOpacity 
            style={[styles.socialButton, styles.youtubeButton]}
            onPress={() => openSocialMedia('youtube')}
          >
            <Ionicons name="logo-youtube" size={30} color="#ffffff" />
            <Text style={styles.socialButtonText}>YouTube</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.socialButton, styles.instagramButton]}
            onPress={() => openSocialMedia('instagram')}
          >
            <Ionicons name="logo-instagram" size={30} color="#ffffff" />
            <Text style={styles.socialButtonText}>Instagram</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.socialButton, styles.facebookButton]}
            onPress={() => openSocialMedia('facebook')}
          >
            <Ionicons name="logo-facebook" size={30} color="#ffffff" />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Informações da Igreja */}
      <View style={styles.churchSection}>
        <Text style={styles.churchTitle}>Igreja Evangélica Viva em Graça</Text>
        <Text style={styles.churchDescription}>
          Uma comunidade de fé que transforma vidas através da graça de Cristo. 
          Venha fazer parte da nossa família e crescer conosco na fé!
        </Text>
        
        <View style={styles.churchStats}>
          <View style={styles.statItem}>
            <Ionicons name="people" size={24} color="#4a7c59" />
            <Text style={styles.statText}>100+ Membros</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="calendar" size={24} color="#4a7c59" />
            <Text style={styles.statText}>14 Anos</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="heart" size={24} color="#4a7c59" />
            <Text style={styles.statText}>Uma Família</Text>
          </View>
        </View>
      </View>

      {/* Botão de Ação Principal */}
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.actionButton} onPress={openWhatsApp}>
          <Ionicons name="chatbubble" size={24} color="#ffffff" />
          <Text style={styles.actionButtonText}>Fale Conosco pelo WhatsApp</Text>
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
  contactSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  contactIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactContent: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  contactText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  scheduleSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  scheduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  scheduleCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  scheduleIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  scheduleDay: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  scheduleTime: {
    fontSize: 14,
    color: '#666',
    flex: 2,
  },
  socialSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  socialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtons: {
    gap: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 25,
    gap: 12,
  },
  socialButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
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
  churchSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  churchTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  churchDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  churchStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  actionSection: {
    padding: 20,
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25D366',
    paddingVertical: 15,
    borderRadius: 25,
    gap: 10,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

