import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

const { width } = Dimensions.get('window');

export default function VideosScreen() {
  const [isLiveActive, setIsLiveActive] = useState(false);

  // Vídeos de exemplo baseados no site
  const videos = [
    {
      id: 1,
      title: 'O Reino de de Deus já veio com legendas em inglês. Aula 01',
      date: '03 de set. de 2025',
      thumbnail: 'play-circle',
      url: 'https://youtu.be/D81GuXLJIPc?si=uxtbN-YkW1F5_Svy',
    },
    {
      id: 2,
      title: 'O pecado Foi Destruído. Aula 02',
      date: '26 de mar. de 2025',
      thumbnail: 'play-circle',
      url: 'https://www.youtube.com/live/c4p-VSFLd0s?si=0tQ1WkX61sV3fMcG',
    },
    {
      id: 3,
      title: 'A morte foi Destruída. Aula 03',
      date: '26 de mar. de 2025',
      thumbnail: 'play-circle',
      url: 'https://www.youtube.com/live/yqUfSQm2qio?si=tT5o32Ve24bZk_3l',
    },
    {
      id: 4,
      title: 'O diabo Foi destituído. Aula 04',
      date: '26 de mar. de 2025',
      thumbnail: 'play-circle',
      url: 'https://www.youtube.com/live/07JYPYi-Afk?si=DJadfklnxEEMrNJ7',
    },
    {
      id: 5,
      title: 'A lei foi destituída, Findou. Aula 05',
      date: '26 de mar. de 2025',
      thumbnail: 'play-circle',
      url: 'https://www.youtube.com/live/YpXdK1iUn1c?si=QRa_iwcD7Ihs3qIi',
    },
    {
      id: 6,
      title: 'Somos uma nova Criação. Aula 06',
      date: '26 de mar. de 2025',
      thumbnail: 'play-circle',
      url: 'https://www.youtube.com/live/DED_bNSjIgE?si=a5mGiLszzNZCpLTm',
    },
  ];

  const openVideo = async (url) => {
    try {
      await WebBrowser.openBrowserAsync(url);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível abrir o vídeo.');
    }
  };

  const openYouTubeChannel = async () => {
    try {
      await WebBrowser.openBrowserAsync('https://www.youtube.com/channel/UCaRhVrYNb1iMwKvpCo9fQ5g');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível abrir o canal do YouTube.');
    }
  };

  const openLiveStream = async () => {
    try {
      await WebBrowser.openBrowserAsync('https://www.youtube.com/channel/UCaRhVrYNb1iMwKvpCo9fQ5g/live');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível abrir a transmissão ao vivo.');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTag}>Conteúdo</Text>
        <Text style={styles.headerTitle}>Nossos Vídeos</Text>
        <Text style={styles.headerDescription}>
          Assista às nossas mensagens e acompanhe a vida da nossa comunidade
        </Text>
      </View>

      {/* Transmissão ao Vivo */}
      <View style={styles.liveSection}>
        <Text style={styles.liveTitle}>Transmissão ao Vivo</Text>
        
        <TouchableOpacity style={styles.liveCard} onPress={openLiveStream}>
          <View style={styles.liveIconContainer}>
            <Ionicons name="radio" size={50} color="#FF0000" />
            {isLiveActive && <View style={styles.liveIndicator} />}
          </View>
          
          <View style={styles.liveContent}>
            <Text style={styles.liveCardTitle}>
              {isLiveActive ? 'AO VIVO AGORA' : 'Transmissão ao Vivo'}
            </Text>
            <Text style={styles.liveCardDescription}>
              {isLiveActive 
                ? 'Clique para assistir nossa transmissão ao vivo'
                : 'Acompanhe nossos cultos e eventos ao vivo'
              }
            </Text>
          </View>
          
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Lista de Vídeos */}
      <View style={styles.videosSection}>
        <Text style={styles.videosTitle}>Vídeos Recentes</Text>
        
        {videos.map((video) => (
          <TouchableOpacity 
            key={video.id} 
            style={styles.videoCard}
            onPress={() => openVideo(video.url)}
          >
            <View style={styles.videoThumbnail}>
              <Ionicons name={video.thumbnail} size={40} color="#4a7c59" />
              <View style={styles.playOverlay}>
                <Ionicons name="play" size={20} color="#ffffff" />
              </View>
            </View>
            
            <View style={styles.videoContent}>
              <Text style={styles.videoTitle} numberOfLines={2}>
                {video.title}
              </Text>
              <Text style={styles.videoDate}>{video.date}</Text>
            </View>
            
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Botões de Ação */}
      <View style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionButton} onPress={openYouTubeChannel}>
          <Ionicons name="logo-youtube" size={24} color="#ffffff" />
          <Text style={styles.actionButtonText}>Ver Todos os Vídeos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.actionButton, styles.actionButtonSecondary]}>
          <Ionicons name="notifications" size={24} color="#4a7c59" />
          <Text style={[styles.actionButtonText, styles.actionButtonTextSecondary]}>
            Receber Notificações
          </Text>
        </TouchableOpacity>
      </View>

      {/* Informações sobre o Canal */}
      <View style={styles.channelSection}>
        <Text style={styles.channelTitle}>Sobre Nosso Canal</Text>
        
        <View style={styles.channelInfo}>
          <View style={styles.channelIcon}>
            <Ionicons name="tv" size={30} color="#4a7c59" />
          </View>
          <View style={styles.channelContent}>
            <Text style={styles.channelDescription}>
              Acompanhe nossas mensagens, estudos bíblicos e momentos especiais da nossa comunidade. 
              Inscreva-se em nosso canal para não perder nenhum conteúdo!
            </Text>
          </View>
        </View>
        
        <View style={styles.channelStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100+</Text>
            <Text style={styles.statLabel}>Vídeos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>500+</Text>
            <Text style={styles.statLabel}>Inscritos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10K+</Text>
            <Text style={styles.statLabel}>Visualizações</Text>
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
  liveSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  liveTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  liveCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  liveIconContainer: {
    position: 'relative',
    marginRight: 15,
  },
  liveIndicator: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF0000',
  },
  liveContent: {
    flex: 1,
  },
  liveCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  liveCardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  videosSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  videosTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  videoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  videoThumbnail: {
    width: 80,
    height: 60,
    backgroundColor: '#e8f5e8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  playOverlay: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContent: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    lineHeight: 18,
  },
  videoDate: {
    fontSize: 12,
    color: '#666',
  },
  actionsSection: {
    padding: 20,
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
    paddingVertical: 15,
    borderRadius: 25,
    gap: 10,
  },
  actionButtonSecondary: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4a7c59',
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButtonTextSecondary: {
    color: '#4a7c59',
  },
  channelSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  channelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  channelInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  channelIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  channelContent: {
    flex: 1,
  },
  channelDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  channelStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a7c59',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
});

