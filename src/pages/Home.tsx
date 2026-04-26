import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonButton, IonCol, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Home.css';
import { searchOutline } from 'ionicons/icons';
import {statsChartOutline} from 'ionicons/icons';
import {warningOutline} from 'ionicons/icons';
import {laptopOutline} from 'ionicons/icons';
import { bulbOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="ion-text-center">Inteligência artificial</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

      <IonGrid>
        <IonRow className="ion-justify-content-center"> 
          <IonCol size="10" >
              <IonCard className="card-home">
                <IonCardHeader>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <IonCardTitle>Explorando o Futuro Digital </IonCardTitle>
                      <IonCardSubtitle>O que você precisa saber</IonCardSubtitle>
                    </div>
                    <IonIcon icon={bulbOutline} style={{ fontSize: '40px', color: '#008793', opacity: '0.5' }} />
                  </div>
                </IonCardHeader>

                <IonCardContent>
                  <p style={{ lineHeight: '1.5', fontSize: '15px' }}>
                    Bem-vindo ao guia prático sobre Inteligência Artificial. Aqui, você vai descobrir como algoritmos e máquinas aprendem a simular a inteligência humana para resolver problemas complexos e facilitar o nosso dia a dia. Navegue pelos tópicos abaixo para dominar os conceitos essenciais dessa revolução.
                  </p>
                </IonCardContent>
              </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
        

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="5">
              <IonButton expand="block" size="large" shape="round" className="botao-custom" routerLink="/ia-definicao">
                <IonIcon icon={searchOutline} slot="end"/>O que é Inteligência Artificial?</IonButton>
            </IonCol>
            <IonCol size="5">
              <IonButton expand="block" size="large" shape="round" className="botao-custom" routerLink="/aplicacoes-ia">
                <IonIcon icon={laptopOutline} slot="end"/>Aplicações da IA no cotidiano
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="5">
              <IonButton expand="block" size="large" shape="round" className="botao-custom" routerLink="/vantagens-ia">
                <IonIcon icon={statsChartOutline} slot="end"/>Vantagens da Inteligência Artificial</IonButton>
            </IonCol>
            <IonCol size="5">
              <IonButton expand="block" size="large" shape="round" className="botao-custom" routerLink="/cuidados-ia">
                <IonIcon icon={warningOutline} slot="end"/>Cuidados e desafios no uso da IA</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        
      </IonContent>
    </IonPage>
  );
};

export default Home;