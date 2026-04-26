import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonList, IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonButton  } from '@ionic/react';
import './VantagensIa.css';
import { flashOutline, syncOutline, barChartOutline, checkmarkDoneCircleOutline, openOutline } from 'ionicons/icons';


const VantagensIa: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Botão para voltar à Home automaticamente */}
            <IonBackButton defaultHref="/home" color="light" />
          </IonButtons>
          <IonTitle>Vantagens da IA</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="pagina-vantagens ion-padding">
  
  <div className="header-definicao">
          <h1>Vantagens da IA</h1>
          <p>Por que as empresas e pessoas estão usando IA?</p>
        </div>

  <IonList lines="none" className="lista-vantagens">
    {/* Item 1: Automação */}
    <IonItem className="item-vantagem">
      <div className="icon-container azul" slot="start">
        <IonIcon icon={syncOutline} />
      </div>
      <IonLabel>
        <h2>Automação Inteligente</h2>
        <p>Execução de tarefas repetitivas sem cansaço, liberando humanos para atividades criativas.</p>
      </IonLabel>
    </IonItem>

    {/* Item 2: Agilidade */}
    <IonItem className="item-vantagem">
      <div className="icon-container verde" slot="start">
        <IonIcon icon={flashOutline} />
      </div>
      <IonLabel>
        <h2>Agilidade Processual</h2>
        <p>Processamento de informações em milissegundos, reduzindo o tempo de espera em serviços.</p>
      </IonLabel>
    </IonItem>

    {/* Item 3: Análise de Dados */}
    <IonItem className="item-vantagem">
      <div className="icon-container roxo" slot="start">
        <IonIcon icon={barChartOutline} />
      </div>
      <IonLabel>
        <h2>Análise de Dados Profunda</h2>
        <p>Capacidade de cruzar milhões de dados para encontrar padrões que passariam despercebidos.</p>
      </IonLabel>
    </IonItem>

    {/* Item 4: Tomada de Decisão */}
    <IonItem className="item-vantagem">
      <div className="icon-container laranja" slot="start">
        <IonIcon icon={checkmarkDoneCircleOutline} />
      </div>
      <IonLabel>
        <h2>Apoio à Decisão</h2>
        <p>Sugestões baseadas em evidências reais, diminuindo riscos e incertezas em negócios.</p>
      </IonLabel>
    </IonItem>
  </IonList>

  <IonGrid>
    <IonRow className="ion-justify-content-center">
                <IonCol size="5">
                  <IonButton expand="block" size="default" shape="round" className="botao-custom" routerLink="/cuidados-ia">
                  <IonIcon icon={openOutline} slot="end"/>Ver os cuidados e desafios</IonButton>
                </IonCol>
                </IonRow>
    
    </IonGrid>
</IonContent>
    </IonPage>
  );
};

export default VantagensIa;