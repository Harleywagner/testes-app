import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const RADIO_URL = 'https://player.srvaudio.com.br/player5/10048';

export default function RadioPlayer() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playRadio = async () => {
    try {
      setIsLoading(true);
      
      if (sound) {
        await sound.unloadAsync();
        setSound(null);
      }

      // Configurar o modo de áudio
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false,
      });

      // Criar e carregar o som
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: RADIO_URL }, // URL correta da rádio fornecida pelo usuário
        { shouldPlay: true, isLooping: false },
        onPlaybackStatusUpdate
      );

      setSound(newSound);
      setIsPlaying(true);
    } catch (error) {
      console.error('Erro ao reproduzir rádio:', error);
      Alert.alert('Erro', 'Não foi possível conectar à rádio. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const stopRadio = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Erro ao parar rádio:', error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
      if (status.didJustFinish) {
        setIsPlaying(false);
      }
    } else if (status.error) {
      console.error('Erro de reprodução:', status.error);
      setIsPlaying(false);
    }
  };

  const toggleRadio = () => {
    if (isPlaying) {
      stopRadio();
    } else {
      playRadio();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.radioButton} 
        onPress={toggleRadio}
        disabled={isLoading}
      >
        {isLoading ? (
          <Ionicons name="refresh" size={20} color="#ffffff" />
        ) : isPlaying ? (
          <Ionicons name="pause" size={20} color="#ffffff" />
        ) : (
          <Ionicons name="play" size={20} color="#ffffff" />
        )}
      </TouchableOpacity>
      
      <View style={styles.radioInfo}>
        <Text style={styles.radioText}>RÁDIO VIVA EM</Text>
        <Text style={styles.radioText}>GRAÇA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  radioButton: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioInfo: {
    alignItems: 'center',
  },
  radioText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 12,
  },
});

