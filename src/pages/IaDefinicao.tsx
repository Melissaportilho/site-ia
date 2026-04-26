import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonIcon, IonLabel, IonButton, IonGrid, IonCol, IonRow,   } from '@ionic/react';
import './IaDefinicao.css';
import { languageOutline, openOutline } from 'ionicons/icons';
import { bookOutline } from 'ionicons/icons';
import { desktopOutline} from 'ionicons/icons';


const IaDefinicao: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Botão para voltar à Home automaticamente */}
            <IonBackButton defaultHref="/home" color="light" />
          </IonButtons>
          <IonTitle>O que é Inteligência Artificial?</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="header-definicao">
          <h1>Entendendo a IA</h1>
          <p>A tecnologia que simula o pensamento humano.</p>
        </div>

      <IonCard className="card-principal"> 
        <IonCardHeader>
          <IonCardTitle>O conceito</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>
            A <strong>Inteligência Artificial (IA)</strong> é um ramo da ciência da computação que se dedica a criar máquinas e sistemas capazes de simular o comportamento humano e realizar tarefas que, até pouco tempo atrás, exigiam o raciocínio de uma pessoa.

            Diferente de um software comum que segue regras fixas, a IA usa algoritmos para <strong>analisar grandes volumes de dados</strong>, identificar padrões e tomar decisões de forma autônoma ou semi-autônoma.
          </p>
        </IonCardContent>
      </IonCard>

<IonList lines="none">
    <IonItem>
      <IonIcon icon={bookOutline} slot="start" color="primary" />
      <IonLabel>
        <h2>Aprendizado (Machine Learning)</h2>
        <p>É o "motor" da maioria das IAs modernas. Em vez de ser programada com regras específicas para cada situação, a máquina é treinada com milhares de exemplos (dados).
        </p>
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonIcon icon={languageOutline} slot="start" color="secondary" />
      <IonLabel>
        <h2>Processamento de linguagem</h2>
        <p>É a ponte de comunicação entre humanos e máquinas. Esta área permite que a IA entenda, interprete e até gere linguagem humana de forma natural.</p>
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonIcon icon={desktopOutline} slot="start" color="primary" />
      <IonLabel>
        <h2>Visão Computacional</h2>
        <p>É o sentido da "visão" para os computadores. Permite que as máquinas obtenham informações significativas a partir de imagens digitais, vídeos e outras entradas visuais.</p>
      </IonLabel>
    </IonItem>
  </IonList>

<IonGrid>
  <IonRow className="ion-justify-content-center">
              <IonCol size="5">
                <IonButton expand="block" size="default" shape="round" className="botao-custom" routerLink="/aplicacoes-ia">
                <IonIcon icon={openOutline} slot="end"/>Ver aplicações na prática</IonButton>
              </IonCol>
              </IonRow>
  
  </IonGrid>
</IonContent>

      
    </IonPage>
  );
};

export default IaDefinicao;