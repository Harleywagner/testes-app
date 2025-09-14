import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

export default function CourseContentScreen({ route, navigation }) {
  const { course } = route.params;
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('videos');

  const openYouTubeVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  const downloadPDF = async (pdfName) => {
    Alert.alert(
      'Download PDF',
      `O PDF "${pdfName}" será baixado para seu dispositivo.`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Baixar',
          onPress: () => {
            // Aqui você implementaria o download real do PDF
            // Por enquanto, vamos simular
            Alert.alert('Sucesso', `PDF "${pdfName}" baixado com sucesso!`);
          }
        }
      ]
    );
  };

  const renderVideoPlayer = () => {
    if (!selectedVideo) {
      return (
        <View style={styles.noVideoSelected}>
          <Ionicons name="play-circle-outline" size={80} color="#ccc" />
          <Text style={styles.noVideoText}>Selecione um vídeo para assistir</Text>
        </View>
      );
    }

    return (
      <WebView
        style={styles.videoPlayer}
        source={{
          uri: `https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&showinfo=0&controls=1`
        }}
        allowsFullscreenVideo={true}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  };

  const renderVideosList = () => (
    <ScrollView style={styles.videosList}>
      {course.videoIds.map((videoId, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.videoItem,
            selectedVideo === videoId && styles.videoItemSelected
          ]}
          onPress={() => openYouTubeVideo(videoId)}
        >
          <View style={styles.videoThumbnail}>
            <Ionicons 
              name="play-circle" 
              size={40} 
              color={selectedVideo === videoId ? "#4a7c59" : "#ccc"} 
            />
          </View>
          <View style={styles.videoInfo}>
            <Text style={styles.videoTitle}>Aula {index + 1}</Text>
            <Text style={styles.videoDescription}>
              {course.title} - Parte {index + 1}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderPDFsList = () => (
    <ScrollView style={styles.pdfsList}>
      {course.pdfs.map((pdfName, index) => (
        <TouchableOpacity
          key={index}
          style={styles.pdfItem}
          onPress={() => downloadPDF(pdfName)}
        >
          <View style={styles.pdfIcon}>
            <Ionicons name="document-text" size={40} color="#4a7c59" />
          </View>
          <View style={styles.pdfInfo}>
            <Text style={styles.pdfTitle}>{pdfName}</Text>
            <Text style={styles.pdfDescription}>Material de estudo em PDF</Text>
          </View>
          <Ionicons name="download" size={24} color="#4a7c59" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{course.title}</Text>
      </View>

      {/* Video Player */}
      <View style={styles.videoContainer}>
        {renderVideoPlayer()}
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'videos' && styles.activeTab]}
          onPress={() => setActiveTab('videos')}
        >
          <Ionicons 
            name="play-circle" 
            size={20} 
            color={activeTab === 'videos' ? "#4a7c59" : "#ccc"} 
          />
          <Text style={[
            styles.tabText, 
            activeTab === 'videos' && styles.activeTabText
          ]}>
            Vídeo-aulas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'pdfs' && styles.activeTab]}
          onPress={() => setActiveTab('pdfs')}
        >
          <Ionicons 
            name="document-text" 
            size={20} 
            color={activeTab === 'pdfs' ? "#4a7c59" : "#ccc"} 
          />
          <Text style={[
            styles.tabText, 
            activeTab === 'pdfs' && styles.activeTabText
          ]}>
            Material PDF
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === 'videos' ? renderVideosList() : renderPDFsList()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4a7c59',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  videoContainer: {
    height: height * 0.25,
    backgroundColor: '#000',
  },
  videoPlayer: {
    flex: 1,
  },
  noVideoSelected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  noVideoText: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4a7c59',
  },
  tabText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#ccc',
  },
  activeTabText: {
    color: '#4a7c59',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  videosList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  videoItemSelected: {
    backgroundColor: '#f8f8f8',
  },
  videoThumbnail: {
    width: 60,
    height: 45,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  videoInfo: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  videoDescription: {
    fontSize: 14,
    color: '#666',
  },
  pdfsList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pdfItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  pdfIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  pdfInfo: {
    flex: 1,
  },
  pdfTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  pdfDescription: {
    fontSize: 14,
    color: '#666',
  },
});

