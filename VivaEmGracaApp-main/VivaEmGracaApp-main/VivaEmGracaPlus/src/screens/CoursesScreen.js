import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

const { width } = Dimensions.get('window');

export default function CoursesScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [password, setPassword] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Formação em Teologia em Graça',
      description: 'Curso completo de formação teológica com foco na doutrina da graça. Aprofunde seus conhecimentos bíblicos e teológicos.',
      price: 'R$ 49,99',
      features: ['Vídeo-aulas', 'Material em PDF', 'Certificado'],
      icon: 'school',
      password: '400rmarr2423',
      videoIds: [
        'HW53rvZ_r4M', 'vRuJniGqMcA', 'KT_aXlz__Jg', '1nPdG9iYHGg',
        'U8b6qwJyYsc', '5sP2QUTarHE', '8V88UD_gCa4', 'Os8f1AhPl3k',
        'WToCJ8L2hSo', 'q0J_nu-OBAg', '8ZCeZvUP5Vc', 'OjQ4EH0azAM', 'K6IHkmkm048'
      ],
      pdfs: [
        'As Três Dispensações',
        'A criação',
        'A criação em Adão x a criação em cristo',
        'Os Efeitos na queda do homem',
        'A Tricotomia'
      ]
    },
    {
      id: 2,
      title: 'Teologia em Graça',
      description: 'Estudo aprofundado sobre a teologia da graça divina. Compreenda os fundamentos bíblicos da graça de Deus.',
      price: 'R$ 29,99',
      features: ['Vídeo-aulas', 'Material em PDF', 'Certificado'],
      icon: 'book',
      password: 'graca2024',
      videoIds: ['example1', 'example2', 'example3'],
      pdfs: ['Fundamentos da Graça', 'A Graça na História']
    },
    {
      id: 3,
      title: 'Bases Bíblicas da Graça',
      description: 'Fundamentos bíblicos sobre a graça de Deus. Curso essencial para compreender a base da fé cristã.',
      price: 'R$ 19,99',
      features: ['Vídeo-aulas', 'Material em PDF', 'Certificado'],
      icon: 'library',
      password: 'bases123',
      videoIds: ['example4', 'example5'],
      pdfs: ['Bases Bíblicas', 'Estudo da Graça']
    },
    {
      id: 4,
      title: 'Somente a Graça',
      description: 'Curso introdutório sobre a exclusividade da graça divina. Perfeito para iniciantes na fé cristã.',
      price: 'R$ 7,99',
      features: ['Vídeo-aulas', 'Material em PDF', 'Certificado'],
      icon: 'heart',
      password: 'somente2024',
      videoIds: ['example6'],
      pdfs: ['Introdução à Graça']
    },
  ];

  const openCourseModal = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
    setPassword('');
  };

  const checkPassword = () => {
    if (password === selectedCourse.password) {
      setModalVisible(false);
      // Navegar para a tela de conteúdo do curso
      navigation.navigate('CourseContent', { course: selectedCourse });
    } else {
      Alert.alert('Senha Incorreta', 'Por favor, verifique sua senha e tente novamente.');
    }
  };

  const openPixPayment = (course) => {
    Alert.alert(
      'Pagamento via PIX',
      `Para adquirir o curso "${course.title}" por ${course.price}, entre em contato conosco pelo WhatsApp para receber os dados do PIX.`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Contatar via WhatsApp',
          onPress: () => {
            const message = `Olá! Gostaria de adquirir o curso "${course.title}" por ${course.price}. Podem me enviar os dados para pagamento via PIX?`;
            const whatsappUrl = `https://wa.me/5585998087066?text=${encodeURIComponent(message)}`;
            WebBrowser.openBrowserAsync(whatsappUrl);
          }
        }
      ]
    );
  };

  const downloadFreePDFs = async () => {
    Alert.alert(
      'Estudos Gratuitos',
      'Os estudos bíblicos gratuitos em PDF estão disponíveis para download. Você será redirecionado para acessá-los.',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Acessar Estudos',
          onPress: () => {
            // Aqui você pode implementar o download ou navegação para os PDFs gratuitos
            console.log('Acessando estudos gratuitos');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTag}>Crescimento Espiritual</Text>
        <Text style={styles.headerTitle}>Cursos Bíblicos</Text>
        <Text style={styles.headerDescription}>
          Aprofunde seus conhecimentos bíblicos com nossos cursos online
        </Text>
      </View>

      {/* Passos para Compra */}
      <View style={styles.stepsSection}>
        <Text style={styles.stepsTitle}>Como Adquirir um Curso</Text>
        
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
            <Text style={styles.stepText}>Receba sua senha por WhatsApp</Text>
          </View>
        </View>
      </View>

      {/* Lista de Cursos */}
      <View style={styles.coursesSection}>
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <View style={styles.courseIcon}>
              <Ionicons name={course.icon} size={40} color="#4a7c59" />
            </View>
            
            <View style={styles.courseContent}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
              
              <View style={styles.courseFeatures}>
                {course.features.map((feature, index) => (
                  <View key={index} style={styles.feature}>
                    <Ionicons name="checkmark-circle" size={16} color="#4a7c59" />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
              
              <Text style={styles.coursePrice}>{course.price}</Text>
              
              <View style={styles.courseButtons}>
                <TouchableOpacity 
                  style={styles.buyButton}
                  onPress={() => openPixPayment(course)}
                >
                  <Text style={styles.buyButtonText}>Comprar Curso</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.accessButton}
                  onPress={() => openCourseModal(course)}
                >
                  <Text style={styles.accessButtonText}>Tenho Senha</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Estudos Gratuitos */}
      <View style={styles.freeSection}>
        <View style={styles.freeSectionHeader}>
          <Text style={styles.freeSectionTag}>Estude +</Text>
          <Text style={styles.freeSectionTitle}>Estudos Bíblicos Gratuitos</Text>
          <Text style={styles.freeSectionDescription}>
            Clique aqui para ter acesso a estudos gratuitos em PDF
          </Text>
        </View>
        
        <TouchableOpacity style={styles.freeButton} onPress={downloadFreePDFs}>
          <Ionicons name="book" size={40} color="#4a7c59" />
          <Text style={styles.freeButtonText}>Acessar Estudos Gratuitos</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de Acesso ao Curso */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Digite a senha para acessar o curso:
            </Text>
            <Text style={styles.modalCourseTitle}>
              {selectedCourse?.title}
            </Text>
            
            <TextInput
              style={styles.passwordInput}
              placeholder="Senha de acesso"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={checkPassword}
              >
                <Text style={styles.modalButtonText}>Acessar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.modalButtonSecondary]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.modalButtonText, styles.modalButtonTextSecondary]}>
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  stepsSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  coursesSection: {
    padding: 20,
    gap: 20,
  },
  courseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
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
    alignSelf: 'center',
    marginBottom: 15,
  },
  courseContent: {
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 15,
  },
  courseFeatures: {
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  coursePrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a7c59',
    marginBottom: 20,
  },
  courseButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  buyButton: {
    backgroundColor: '#4a7c59',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 1,
  },
  buyButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  accessButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4a7c59',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 1,
  },
  accessButtonText: {
    color: '#4a7c59',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  freeSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  freeSectionHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  freeSectionTag: {
    backgroundColor: '#e8f5e8',
    color: '#4a7c59',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 10,
  },
  freeSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  freeSectionDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  freeButton: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  freeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a7c59',
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 20,
    width: width * 0.9,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalCourseTitle: {
    fontSize: 16,
    color: '#4a7c59',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#4a7c59',
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
  },
  modalButtonSecondary: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4a7c59',
  },
  modalButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButtonTextSecondary: {
    color: '#4a7c59',
  },
});

